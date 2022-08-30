import { useContext } from "react";
import UserContext from "../context/user";

const useAuth = () => {
  return useContext(UserContext);
};

export default useAuth;
