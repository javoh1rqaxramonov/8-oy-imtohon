import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Image } from "./";
import { useGlobalContext } from "../hooks/useGlobalContext";
function ImageContainer({ images }) {
  const { LikedImages } = useGlobalContext();
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
      <Masonry gutter="10px">
        {images.map((image) => {
          return (
            <Image
              key={image.id}
              image={image}
              added={LikedImages.some((img) => img.id === image.id)}
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ImageContainer;
