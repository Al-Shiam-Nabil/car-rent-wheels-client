import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

  const createEmailPasswordUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log(currentUser);
        setLoading(false)
        setUser(currentUser)
      }
      setLoading(false)
    
    });
    return () => {
      unsubscribe();
    };
  }, []);

//   signout user

const signOutUser=()=>{
    setLoading(true)
    return signOut(auth)
}

  const info = {
    signInUser,
    googleLogin,
    createEmailPasswordUser,
    user,
    setUser,
    loading,
    setLoading,
    signOutUser
  };
  return <AuthContext value={info}>{children}</AuthContext>;
};

export default AuthProvider;
