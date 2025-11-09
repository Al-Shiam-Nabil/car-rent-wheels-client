import React from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const createEmailPasswordUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };


  const info = {
    googleLogin,
    createEmailPasswordUser
  };
  return <AuthContext value={info}>{children}</AuthContext>;
};

export default AuthProvider;
