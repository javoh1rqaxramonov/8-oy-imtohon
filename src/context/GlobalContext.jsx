import React, { useEffect, useReducer } from "react";
import { createContext } from "react";
import { LikedImages } from "../pages";
import { useCollection } from "../hooks/useCollection";

export const GlobalContext = createContext();

// const dataFromLocalStorage = () => {
//     return JSON .parse(localStorage.getItem('my-unsplash-data')) || {
// LikedImages :[],
// downloadImages: [],
//     };
// }

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user: payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "LIKE":
      return {
        ...state,
        LikedImages: payload,
      };
    case "DISLIKE":
      return {
        ...state,
        LikedImages: state.LikedImages.filter((image) => image.id !== payload),
      };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const storedData = JSON.parse(localStorage.getItem("my-unsplash-data")) || {
    user: null,
    LikedImages: [],
    downloadImages: [],
  };
  const {data : likedImages} = useCollection('likedImages');
  // console.log(data);
  
  const [state, dispatch] = useReducer(changeState, storedData);

  useEffect(()=>{
    if(likedImages){
      dispatch({type: "LIKE", payload: likedImages});
    }
  },[likedImages]);

  useEffect(() => {
    localStorage.setItem("my-unsplash-data", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

// export function GlobalContextProvider({ children }) {
//   const [state, dispatch] = useReducer(changeState, {
//     user:null,
//     LikedImages: [],
//     downloadImages: [],
//   });

//   useEffect(() => {
//     localStorage.setItem("my-unsplash-data", JSON.stringify(state));
//   }, [state]);
//   return (
//     <GlobalContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// } 

