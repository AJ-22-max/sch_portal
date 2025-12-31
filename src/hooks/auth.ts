import { useRequest } from "../config/request";
import { apiReq } from "../constants/request";
import { useState } from "react";
import { toast } from "react-toastify";

export function useSignup() {
  const { request } = useRequest();
  const [loading, setLoading] = useState(false);

  const signup = request(
    async function (data) {
      console.log("🔵 useSignup: Starting signup request");
      setLoading(true);

      try {
        // Try different possible endpoints
        const possibleEndpoints = [
          "/auth/school/register",
          "/school/register", 
          "/auth/register",
          "/schools/create",
          "/auth/school/create",
          "/auth/signup"
        ];

        let res;
        let lastError;

        for (const endpoint of possibleEndpoints) {
          try {
            console.log(`🔵 useSignup: Trying endpoint ${endpoint}`);
            res = await apiReq.post(endpoint, data);
            console.log(`✅ useSignup: Success with ${endpoint}`, res);
            break;
          } catch (err: any) {
            if (err?.response?.status === 404) {
              console.log(`❌ ${endpoint} not found, trying next...`);
              lastError = err;
              continue;
            } else {
              // If it's not a 404, it's a real error, throw it
              throw err;
            }
          }
        }

        if (!res) {
          throw lastError || new Error("All endpoints failed");
        }
        
        const resData = res.data;
        console.log("🔵 useSignup: Response data", resData);

        if (!resData.success || resData.error) {
          console.error("🔴 useSignup: Signup failed - API error");
          toast.error(resData.message || "Registration failed!");
          return null;
        }

        console.log("🔵 useSignup: Signup successful");
        toast.success(resData.message || "Registration successful!");
        
        return {
          success: true,
          data: resData.result,
          message: resData.message
        };
      } catch (error) {
        console.error("💥 useSignup: Exception caught", error);
        throw error;
      }
    },
    { onFinally: () => {
      console.log("🔵 useSignup: Finally block - setting loading to false");
      setLoading(false);
    }},
  );

  return { signup, loading };
}


