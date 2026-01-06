import { toast } from "react-toastify";
import { useRequest } from "../config/request";
import { apiReq } from "../constants/request";
import { useState } from "react";

export function useSignup() {
  const { request } = useRequest();
  const [loading, setLoading] = useState(false);

  const signup = request(
    async function (data) {
      setLoading(true);
      try {
        const response = await apiReq.post("/school/request/create", data);
        const result = response.data;
        
        if (result?.error && !result?.success) {
          // Return the error message so the component can display it
          return { success: false, message: result.message };
        }
        return { success: true };
      } catch (error: any) {
        // Catch API errors and return them
        const errorMessage = error.response?.data?.message 
          || error.response?.data?.error 
          || error.message 
          || "An error occurred";
        
        return { success: false, message: errorMessage };
      }
    },
    {
      onFinally: () => {
        setLoading(false);
      },
    },
  );

  return { signup, loading };
}