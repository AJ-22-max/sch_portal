import { useCallback, useRef } from "react";
import { useNavigate } from "react-router";
import { apiReq } from "../constants/request";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { clearUser } from "../store/slices/userSlice";
import { useMiddleware } from "../hooks/middleware";

interface ErrorHandlingOptions {
  onError?: (error: any) => any;
  rethrow?: boolean;
  onFinally?: () => void;
  abort?: boolean;
  config?: Record<string, any>;
  pinAuth?: string;
  redirectOnUnauth?: boolean;
  logoutOnExpiry?: boolean;
}

export const useRequest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isApplicanant } = useMiddleware();
  const controllersRef = useRef<Map<string, AbortController>>(new Map());

  const createWrapper = useCallback(
    <T extends (...args: any[]) => Promise<any>>(
      fn: T,
      options: ErrorHandlingOptions = { abort: true },
    ) => {
      let interceptorId: number | null = null;
      let controller: AbortController | null = null;

      const wrapped = async (
        ...args: Parameters<T>
      ): Promise<ReturnType<T> | any> => {
        const requestId = Math.random().toString(36);

        if (options.abort) {
          controller = new AbortController();
          controllersRef.current.set(requestId, controller);
        }

        if (options.pinAuth) {
          interceptorId = apiReq.interceptors.request.use((config: any) => {
            config.headers = {
              ...config.headers,
              "Account-Password": options.pinAuth,
            };
            return config;
          });
        }

        try {
          const enhancedArgs = options.abort
            ? [...args, { signal: controller?.signal }]
            : args;

          const result = await fn(...(enhancedArgs as Parameters<T>));
          return result;
        } catch (error: any) {
          console.error("api error -> ", error);
          const errMsg = Array.isArray(error?.response?.data?.message)
            ? error?.response?.data?.message[0]
            : error?.response?.data?.message;
          if (error?.code === "ERR_NETWORK") {
            toast.info("Connection error, please try again!");
            return;
          }

          if (error?.name === "AbortError") {
            toast.error("Request was aborted or timed out.");
            return;
          }

          const status = error?.response?.status;
          if (status === 401) {
            toast.error("Session expired. Please login again.");

            if (options.logoutOnExpiry !== false) {
              dispatch(clearUser());
            }

            if (options.redirectOnUnauth !== false) {
              dispatch(clearUser());
              if (isApplicanant()) {
                navigate("/admission/login", { replace: true });
              } else {
                navigate("/auth/login", { replace: true });
              }
            }
            return;
          }

          if (status === 403) {
            toast.error(errMsg || "Access denied.");
            return;
          }

          const method = error?.config?.method?.toUpperCase?.();
          if (options.onError) {
            const errorResult = options.onError(error);
            if (errorResult !== undefined) {
              return errorResult;
            }
          } else if (method !== "GET") {
            toast.error(errMsg || "Technical error! Please try again.");
          } else {
            console.error(error);
          }

          if (options.rethrow) throw error;
        } finally {
          // 🧹 Cleanup
          if (interceptorId !== null) {
            apiReq.interceptors.request.eject(interceptorId);
          }

          if (controller) {
            controllersRef.current.delete(requestId);
          }

          if (options.onFinally) options.onFinally();
        }
      };

      return Object.assign(wrapped, {
        abort: () => controller?.abort(),
      });
    },
    [navigate, dispatch, isApplicanant],
  );

  // Utility to abort all pending requests
  const abortAll = useCallback(() => {
    controllersRef.current.forEach((controller) => controller.abort());
    controllersRef.current.clear();
  }, []);

  // Cleanup on unmount
  const cleanup = useCallback(() => {
    abortAll();
  }, [abortAll]);

  return {
    request: createWrapper,
    abortAll,
    cleanup,
  };
};
