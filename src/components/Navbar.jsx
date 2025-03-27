import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcStackOfPhotos } from "react-icons/fc";
import { FaHeart } from "react-icons/fa6";
import { FaSun, FaMoon, FaDownload } from "react-icons/fa";
import { NavLinks } from "./";
import Navlinks from "./Navlinks";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.Config";
import { toast } from "react-toastify";

const themeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "winter";
};

function Navbar() {
  const { LikedImages, downloadImages, user, dispatch } = useGlobalContext();
  // console.log(user);
  
  const [theme, setTheme] = useState(themeFromLocalStorage());

  const toggleTheme = () => {
    const newTheme = theme === "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      toast.success("Logged out successfully");
      window.location.reload(); // Sahifani yangilash
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    // console.log("Navbardagi user:", user);
  }, [user]);

  return (
    <header className="bg-base-200">
      <div className="navbar aligh-elements">
        <div className="navbar-start">
          <Link to="/" className="hidden md:flex">
            <img
              className="w-10 h-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYPNyFGrvP-YqkjoLXlj3no-xP5Cv6M8EDg&s"
              alt="Logo"
            />
          </Link>

          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button">
              <img
                className="w-10 h-10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYPNyFGrvP-YqkjoLXlj3no-xP5Cv6M8EDg&s"
                alt="Logo"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <Navlinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden min-[500px]:flex">
          <ul className="menu menu-horizontal rounded-box">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end flex gap-5 items-center">
          <Link to="/downloadImages">
            <div className="indicator">
              <span className="indicator-item badge badge-sm badge-secondary">
                {downloadImages.length}
              </span>
              <FaDownload className="h-6 w-6" />
            </div>
          </Link>

          <Link to="/likedImages">
            <div className="indicator">
              <span className="indicator-item badge badge-sm badge-secondary">
                {LikedImages.length}
              </span>
              <FaHeart className="h-6 w-6" />
            </div>
          </Link>

          <label className="swap swap-rotate">
            <input type="checkbox" onClick={toggleTheme} />
            <FaSun className="swap-on h-6 w-6 mt-[-5px] fill-current" />
            <FaMoon className="swap-off h-6 mt-[-5px] w-6 fill-current" />
          </label>

          <p className="hidden md:flex">{user?.displayName?.split(" ")[0] || "Guest"}</p>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || "https://via.placeholder.com/150"} alt={user?.displayName || "User"} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile <span className="badge">New</span></a>
              </li>
              <li><a>Settings</a></li>
              <li><button onClick={signOutUser}>Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
