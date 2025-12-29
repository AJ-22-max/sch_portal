import { useRequest } from "../config/request";
import { apiReq } from "../constants/request";
import useUser from "../context/user/useUser";
import { clearUser, updateUser } from "../store/slices/userSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useMiddleware } from "./middleware";

export function useLogin() {
  const { request } = useRequest();
  const [loading, setLoading] = useState(false);

  const login = request(
    async function (data) {
      setLoading(true);

      const res = await apiReq.post("/auth/user/login", data);
      const resData = res.data;

      if (!resData.success && resData.error) {
        toast.error("Login failed!");
        return;
      }

      const isRegularLogin = resData.result?.token && resData.result?.user;
      const isParentLogin = resData.result && resData.students;
      const isValidLogin = isRegularLogin || isParentLogin;
      const hasUnverifiedOtp = resData.otp && !resData.otp_verified;

      if (hasUnverifiedOtp) {
        return {
          otp: true,
          ...data,
        };
      }

      if (!isValidLogin) {
        toast.error("Login failed! Error occurred!");
        return;
      }

      const isParent = resData?.students?.length > 0;
      const user = isParent ? resData.result : resData.result.user;

      const role = user?.role;
      if (![3, 4, 5, 6].some((role_) => role.includes(role_))) {
        toast.error("Unauthorized Login!");
        return;
      }

      if (isParent) {
        return {
          students: resData?.students,
          info: resData.result,
        };
      }

      return {
        status: true,
        user: resData.result.user,
        token: resData.result.token,
      };
    },
    { onFinally: () => setLoading(false) },
  );

  return { login, loading };
}

export function useResendOtp() {
  const { request } = useRequest();
  const [loading, setLoading] = useState(false);

  const resendOtp = request(
    async function (data) {
      setLoading(true);

      const res = await apiReq.post("/auth/resend/login/otp", data);

      const resData = res.data;
      if (resData?.error && !resData?.success) {
        toast.error(resData.message);
        return;
      }

      toast.success(resData.message);
      return true;
    },
    { onFinally: () => setLoading(false) },
  );

  return { resendOtp, loading };
}

export function useResetPasswordToken() {
  const { request } = useRequest();
  const [loading, setLoading] = useState(false);

  const resetPasswordToken = request(
    async function (data) {
      setLoading(true);

      const res = await apiReq.post(`/auth/user/reset/password`, data);

      const resData = res.data;
      if (resData?.error && !resData?.success) {
        toast.error(resData.message);
        return;
      }

      toast.success(
        `If this email is associated with your account, your will recieive an password reset link!`,
      );
      return true;
    },
    { onFinally: () => setLoading(false) },
  );

  return { resetPasswordToken, loading };
}

export function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authConfig } = useUser();
  const { isApplicanant } = useMiddleware();
  const { request } = useRequest();
  const [loading, setLoading] = useState(false);

  const logout = request(
    async function () {
      setLoading(true);
      const res = await apiReq.post("/auth/user/logout", {}, authConfig);
      const resData = res.data;
      if (resData?.error && !resData?.success) {
        toast.error(resData.message);
        return;
      }
      if (isApplicanant()) {
        navigate("/admission/login");
      } else {
        navigate("/auth/login");
      }
      dispatch(clearUser());
    },
    { onFinally: () => setLoading(false) },
  );

  return { logout, loading };
}

export function useResetPassword() {
  const { request } = useRequest();
  const [loading, setLoading] = useState(false);

  const resetPassword = request(
    async function (data) {
      setLoading(true);
      const res = await apiReq.post("/auth/verify/forgot/password", data);
      const resData = res.data;
      if (resData?.error || !resData?.success) {
        toast.error(resData.message);
        return;
      }
      toast.success(resData.message);
      return { ok: true };
    },
    { onFinally: () => setLoading(false) },
  );

  return { resetPassword, loading };
}

export function useCheckAuth() {
  const { token } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      toast.info("Please login!");
      navigate("/auth/login");
    }
  }, [token, navigate]);
}

export function useUpdateProfile() {
  const { request } = useRequest();
  const { authConfig } = useUser();
  const [loading, setLoading] = useState(false);

  const updateProfile = request(
    async function (data) {
      setLoading(true);
      const res = await apiReq.put(
        `/auth/user/update/profile`,
        data,
        authConfig,
      );

      const resData = res.data;
      if (resData?.error && !resData?.success) {
        toast.error(resData.message);
        return;
      }

      toast.success(resData.message);
      return true;
    },
    { onFinally: () => setLoading(false) },
  );

  return { updateProfile, loading };
}

export function useCreateAdmissionAccount() {
  const { request } = useRequest();
  const [loading, setLoading] = useState(false);
  const createAdmissionAccount = request(
    async function (data) {
      setLoading(true);
      const res = await apiReq.post("/admission/create/account", data);
      const resData = res.data;
      if (!resData?.success || resData?.error) {
        toast.error("Error occurred. Try again!");
        return;
      }
      toast.success(
        `${resData?.message}. Your ID is: ${resData?.result.application_id}. Save ID and login!`,
      );
      return true;
    },
    { onFinally: () => setLoading(false) },
  );
  return { createAdmissionAccount, loading };
}

export function useAdmissionLogin() {
  const { request } = useRequest();
  const [loading, setLoading] = useState(false);

  const admissionLogin = request(
    async function (data) {
      setLoading(true);
      const res = await apiReq.post("/admission/login", data);
      const resData = res.data;
      if (!resData?.success || resData?.error) {
        toast.error("Error occurred. Try again!");
        return;
      }
      if (!resData?.result?.token || !resData?.result?.user) {
        toast.error("Login failed! Error occured!");
        return;
      }
      const user = resData.result.user;
      const roles = user?.role;
      const subRoles = user?.sub_role;
      if (
        (!roles?.includes(5) && !subRoles?.includes(15)) ||
        !user?.ad_session_status ||
        !user?.ad_form_status ||
        user?.status == 4
      ) {
        toast.error("Unauthorized login!");
        return;
      }
      return {
        status: true,
        user: resData.result.user,
        token: resData.result.token,
      };
    },
    { onFinally: () => setLoading(false) },
  );

  return { admissionLogin, loading };
}

export function useRefreshUser() {
  const dispatch = useDispatch();
  const { authConfig } = useUser();
  const { request } = useRequest();
  const [loading, setLoading] = useState(false);

  const refreshUser = request(
    async function () {
      setLoading(true);
      const res = await apiReq.post("/auth/refresh/token", {}, authConfig);
      const resData = res.data;
      if (resData?.error && !resData?.success) {
        toast.error(resData.message);
        return;
      }
      const result = resData.result;
      const userData = { user: result.user, token: result.token };
      dispatch(updateUser(userData));
      return userData;
    },
    { onFinally: () => setLoading(false) },
  );

  return { refreshUser, loading };
}

export function useCompleteParentLogin() {
  const { request } = useRequest();
  const [loading, setLoading] = useState(false);

  const completeParentLogin = request(
    async function (data) {
      setLoading(true);

      const response = await apiReq.post(
        "/auth/user/complete/parent-login",
        data,
      );

      const responseData = response.data;
      if (responseData?.error && !responseData?.success) {
        toast.error(responseData.message);
        return;
      }

      const result = responseData?.result;
      const token = result?.token;
      const user = result?.authUser;
      const student = result?.student;

      if (!token && !user && !student) {
        toast.error("Login failed! An error occured!");
        return;
      }

      return {
        status: true,
        user,
        token,
        student,
      };
    },
    { onFinally: () => setLoading(false) },
  );

  return { completeParentLogin, loading };
}
