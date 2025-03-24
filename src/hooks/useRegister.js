import { auth } from "../firebase/firebase.Config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { useGlobalContext } from "./useGlobalContext";

export const useRegister = () => {
  const { dispatch } = useGlobalContext();
  const registerWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success(`Welcome ${user.displayName}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return { registerWithGoogle };
};
