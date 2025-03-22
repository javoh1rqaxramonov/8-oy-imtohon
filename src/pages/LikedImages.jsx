import React from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { ImageContainer } from "../components";
import { Link } from "react-router-dom";

function LikedImages() {
  const { LikedImages } = useGlobalContext();

  if (LikedImages.length === 0) {
    return <div className="h-full flex justify-center items-center gap-10 flex-col">
      <h1 className="text-center text-2xl sm:text-4xl">No Liked Images</h1>
      <Link to='/' className="btn btn-primary btn-sm sm:btn-md">Go Home</Link>
    </div>;
  }
  return (
    <div className="aligh-elements">
      {LikedImages.length > 0 && (
        <ImageContainer images={LikedImages}/>
      )}
    </div>
  );
}

export default LikedImages;
