import React from "react";
import { FaRegHeart, FaHeart, FaDownload } from "react-icons/fa6";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";

function Image({ image, added }) {
  const { links, urls, alt_description, user, id } = image;
  const { LikedImages, dispatch } = useGlobalContext();

  const addLikedImage = (event) => {
    event.preventDefault();
    event.stopPropagation(); // Link navigatsiyasini to'xtatish
    const alreadyAdded = LikedImages.some((img) => img.id === image.id);

    if (!alreadyAdded) {
      dispatch({ type: "LIKE", payload: image });
    } else {
      dispatch({ type: "DISLIKE", payload: image.id });
    }
  };

  const downloadImage = (event) => {
    event.preventDefault();
    event.stopPropagation(); // Link navigatsiyasini to'xtatish
    window.open(links.download + "&force=true", "_blank");
  };

  return (
    <div className="relative group">
      <Link to={`/imageInfo/${image.id}`}>
        <img
          src={urls.regular}
          alt={alt_description || `${user.name}'s photo`}
          className="w-full rounded-md"
        />
      </Link>

      {!added && (
        <span
          onClick={addLikedImage}
          className="absolute h-8 w-8 rounded-xl border border-gray-300 hover:bg-gray-100 flex justify-center items-center cursor-pointer right-2 top-2"
        >
          <FaRegHeart className="text-white" />
        </span>
      )}
      {added && (
        <span
          onClick={addLikedImage}
          className="absolute h-8 w-8 rounded-xl border border-gray-300 hover:bg-gray-100 flex justify-center items-center cursor-pointer right-2 top-2 bg-white"
        >
          <FaHeart className="text-red-500" />
        </span>
      )}

      <span className="absolute left-2 bottom-2 flex items-center gap-2 group-hover:opacity-100 opacity-0 transition-opacity">
        <img
          src={user.profile_image.large}
          alt={`${user.name}'s avatar`}
          className="w-5 h-5 md:w-8 md:h-8 rounded-full"
        />
        <p className="text-white text-sm hidden md:block">{user.name}</p>
        <p className="text-white text-xs w-10 md:hidden">
          {user.first_name.replace(/[^a-zA-Z\s]/g, "")}
        </p>
      </span>

      <span
        onClick={downloadImage}
        className="absolute h-8 w-8 flex justify-center items-center cursor-pointer right-2 bottom-2 group-hover:opacity-100 opacity-0 transition-opacity"
      >
        <FaDownload className="text-white" />
      </span>
    </div>
  );
}

export default Image;