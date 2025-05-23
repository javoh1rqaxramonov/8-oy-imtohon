import React from "react";
import { FaRegHeart, FaHeart, FaDownload } from "react-icons/fa6";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";
import { useFirestore } from "../hooks/useFirestore";
// import { ImageInfo } from "../pages/ImageInfo";

function Image({ image, added }) {
  const { links, urls, alt_description, user } = image;
  const { LikedImages , user:authUser } = useGlobalContext();
  
  // console.log("LikedImages:", LikedImages);

  const {addDocument , deleteDocument} = useFirestore();
  const addLikedImage = (image, event) => {
    event.preventDefault();
    const alreadyAdded = LikedImages.some((img) => {
      return img.id === image.id;
    });

    if (!alreadyAdded) {
      addDocument('likedImages', image.id, {...image,uid:authUser.uid});
     } else {
      deleteDocument('likedImages', image.id);
    }
  };

  const downloadImage = (event)=>{
    event.preventDefault();
    window.open(links.download + "&force=true",'_blank')
  }

  return (
    <Link to={`/imageInfo/${image.id}`}>
      <div className="relative group">
        {!added && (
          <span
            onClick={(e) => addLikedImage(image, e)}
            className="absolute h-8 w-8 rounded-xl border-1 hover-icon flex justify-center items-center  cursor-pointer right-2 top-2"
          >
            <FaRegHeart className="text-white" />
          </span>
        )}
        {added && (
          <span
            onClick={(e) => addLikedImage(image ,e)}
            className="absolute hover-icon h-8 w-8 rounded-xl border-1  flex justify-center items-center  cursor-pointer right-2 top-2 bg-white"
          >
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
          <span onClick={(e)=>downloadImage(e)} >
            <FaDownload download className="text-white" />
          </span>
        </span>
      </div>
    </Link>
  );
}

export default Image;