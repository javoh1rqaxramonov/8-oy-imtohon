import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcStackOfPhotos } from "react-icons/fc";
import { FaHeart } from "react-icons/fa6";
import { FaSun, FaMoon, FaDownload } from "react-icons/fa";
import { NavLinks } from "./";
import Navlinks from "./Navlinks";
import { useGlobalContext } from "../hooks/useGlobalContext";
const themeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "winter";
};

function Navbar() {
  const { LikedImages , downloadImages } = useGlobalContext();
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const toggleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <header className="bg-base-200">
      <div className="navbar aligh-elements">
        <div className="navbar-start">
          <Link to="/" className="hidden md:flex">
            <img
              className="w-10 h-10 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYPNyFGrvP-YqkjoLXlj3no-xP5Cv6M8EDg&s"
              alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYPNyFGrvP-YqkjoLXlj3no-xP5Cv6M8EDg&s"
            />
          </Link>

          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button">
              <img
                className="w-10 h-10 "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYPNyFGrvP-YqkjoLXlj3no-xP5Cv6M8EDg&s"
                alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYPNyFGrvP-YqkjoLXlj3no-xP5Cv6M8EDg&s"
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
          <Link to="/downloadedImages">
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
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={toggleTheme} />

            {/* sun icon */}
            <FaSun className="swap-on h-6 w-6 mt-[-5px] fill-current" />

            {/* moon icon */}
            <FaMoon className="swap-off h-6 mt-[-5px] w-6 fill-current" />
          </label>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
