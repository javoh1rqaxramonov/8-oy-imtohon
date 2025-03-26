import { doc, setDoc, deleteDoc } from "firebase/firestore"; 
import { toast } from "react-toastify";
import { db } from "../firebase/firebase.Config";

export const useFirestore = () => {
  
  const addDocument = (collectionName, id, data) => {
    setDoc(doc(db, collectionName, id), data)
      .then(() => {
        toast.success("Document successfully written!");
      })
      .catch((error) => {
        toast.error("Error adding document: " + error.message);
      });
  };

  const deleteDocument = (collectionName, id) => {
    deleteDoc(doc(db, collectionName, id))
      .then(() => {
        toast.success("Document successfully deleted!");
      })
      .catch((error) => {
        toast.error("Error deleting document: " + error.message);
      });
  };

  return { addDocument, deleteDocument };
};
