import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {GlobalContextProvider} from "./context/GlobalContext.jsx";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById("root")).render(<GlobalContextProvider><App /><ToastContainer position="top-right" /></GlobalContextProvider>);
