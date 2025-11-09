import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";

export const useContextHook = () => {
  const {
    googleLogin,
    createEmailPasswordUser,
    signInUser,
    user,
    setUser,
    loading,
    setLoading,
    signOutUser
  } = useContext(AuthContext);
  return {
    googleLogin,
    createEmailPasswordUser,
    signInUser,
    user,
    setUser,
    loading,
    setLoading,
    signOutUser
  };
};
