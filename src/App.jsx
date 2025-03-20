import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Contact, LikedImages } from "./pages";
import MainLayout from "./layouts/MainLayout";
import { action as HomeAction } from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index : true ,
          element : <Home/>,
          action : HomeAction
        },
        {
          path : '/about' ,
          element : <About/>
        },
        {
          path : '/contact' ,
          element : <Contact />
        },
        {
          path : '/likedImages' ,
          element : <LikedImages />
        }
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
