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
      const response = await apiReq.post("/school/request/create", data);
      const result = response.data;
      if (result?.error && !result?.success) {
        toast.error(result.message);
        return;
      }
      toast.success(
        "Your request was sent successfuly! We are currently review it! Please check the provided email for more details.",
      );
      return true;
    },
    {
      onFinally: () => {
        setLoading(false);
      },
    },
  );

  return { signup, loading };
}
