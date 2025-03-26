import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase.Config";

export const useCollection = (collectionName) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    // const getData = async () => {
    //   const querySnapshot = await getDocs(collection(db, collectionName));
    //   //   console.log(querySnapshot.docs[0].id);
    //   const queryData = [];
    //   querySnapshot.forEach((doc) => {
    //     queryData.push({ id: doc.id, ...doc.data() });
    //   });
    //   setData(queryData);
    // };
    // getData();

    onSnapshot(collection(db, collectionName), (querySnapshot) => {
    //   console.log(snapshot);
      const queryData = [];
      querySnapshot.forEach((doc) => {
        queryData.push({ id: doc.id, ...doc.data() });
      });
      setData(queryData);
    });
  }, []);
  return { data };
};
