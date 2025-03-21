import React from "react";
import { FaRegHeart, FaHeart, FaDownload } from "react-icons/fa6";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Image({ image,added }) {
  const { links, urls, alt_description, user } = image;
  const {LikedImages,dispatch} = useGlobalContext();   
  const addLikedImage = (image) => {
    console.log(image);
    const alreadyAdded = LikedImages.some((img)=>{
        return img.id === image.id
    });

    if(!alreadyAdded){
      dispatch({ type: "LIKE", payload: image });
    } else {
        dispatch({ type: "DISLIKE", payload: image.id });
    }
    
    // dispatch({ type: "LIKE", payload: image });
  }

  return (
    <div className="relative group">
      {!added && (
        <span onClick={()=>addLikedImage(image)} className="absolute h-8 w-8 rounded-xl border-1 hover-icon flex justify-center items-center  cursor-pointer right-2 top-2">
          <FaRegHeart className="text-white" />
        </span>
      )}
      {added && (
        <span onClick={()=>addLikedImage(image)} className="absolute hover-icon h-8 w-8 rounded-xl border-1  flex justify-center items-center  cursor-pointer right-2 top-2 bg-white">
          <FaHeart className="text-red-500" />
        </span>
      )}
      <img
        src={urls.regular}
        alt={alt_description}
        className="w-full rounded-md"
      />
      <span className="absolute left-2 bottom-2 flex items-center gap-2 hover-icon">
        <img
          src={user.profile_image.large}
          alt={user.name + "avatar"}
          className="w-5 h-5 md:w-8  md:h-8 rounded-full "
        />
        <p className="text-white text-sm hidden md:block">{user.name}</p>
        <p className="text-white text-xs w-10 md:hidden">
          {user.first_name.replace(/[^a-zA-Z\s]/g, "")}
        </p>
      </span>
      <span className="absolute hover-icon h-8 w-8 flex justify-center items-center  cursor-pointer right-2 bottom-2 ">
        <a download href={links.download + "&force=true"}>
          <FaDownload className="text-white" />
        </a>
      </span>
    </div>
  );
}

export default Image;
