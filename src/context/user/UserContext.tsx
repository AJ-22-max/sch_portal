import { createContext } from "react";

export interface UserContextProps {
  user: any;
  authConfig: any;
  token: any;
  student: any;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export default UserContext;
