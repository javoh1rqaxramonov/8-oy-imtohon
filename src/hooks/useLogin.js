import React from "react";
import { auth } from "../firebase/firebase.Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { navigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { dispatch } = useGlobalContext();
  const loginWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success(`Welcome ${user.displayName}`);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        
        toast.error('Email or Password is incorrect');
      });
  };
  return { loginWithEmail };
}
