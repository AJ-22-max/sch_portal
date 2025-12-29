import type { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import UserContext from "./UserContext";

export default function UserProvider({ children }: PropsWithChildren) {
  const { user, token, student } = useSelector(
    (state: any) => state.user || {},
  );

  const authConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    <UserContext.Provider
      value={{
        user,
        authConfig,
        token,
        student,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
