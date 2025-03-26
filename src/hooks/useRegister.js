import { auth } from "../firebase/firebase.Config";
import { signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,updateProfile   } from "firebase/auth";
import { toast } from "react-toastify";
import { useGlobalContext } from "./useGlobalContext";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const { dispatch } = useGlobalContext();
  const navigate = useNavigate(); 

  const registerWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
          dispatch({ type: "LOGIN", payload: user });

          toast.success(`Welcome ${user.displayName}`);

        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const registerWithEmail = (displayName,email, password) => {
    console.log(displayName,email,password);
    createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    await updateProfile(auth.currentUser , {
      displayName : displayName,
      photoURL : `https://api.dicebear.com/9.x/initials/svg?seed=${displayName}`
    })
    const user = userCredential.user;
    dispatch({ type: "LOGIN", payload: user });
    toast.success(`Welcome ${user.displayName}`);
    navigate("/");
  })
  .catch((error) => {
    const errorMessage = error.message;
    toast.error(errorMessage);
  });
  }

  return { registerWithGoogle,registerWithEmail };
};
