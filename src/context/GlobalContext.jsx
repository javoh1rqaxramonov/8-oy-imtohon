import React, { useEffect, useReducer } from 'react';
import { createContext } from 'react';
import { LikedImages } from '../pages';

export const GlobalContext = createContext();

const dataFromLocalStorage = () => {
    return JSON .parse(localStorage.getItem('my-unsplash-data')) || {
        LikedImages :[],
        downloadImages: [],
    };
}

const changeState = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'LIKE':
            return {
                ...state,
                LikedImages: [...state.LikedImages, payload]
            };
        case 'DISLIKE':
            return {
                ...state,
                LikedImages: state.LikedImages.filter((image) => image.id !== payload)
            };
        default:
            return state;
    }
};

export function GlobalContextProvider({ children }) {
    const [state, dispatch] = useReducer(changeState, dataFromLocalStorage());

    useEffect(() => {
        localStorage.setItem('my-unsplash-data', JSON.stringify(state));
    }, [state]);    
    return (
        <GlobalContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}