import React from "react";

function Image({ image }) {
  const { links, urls, alt_description, user } = image;
  return (
    <div>
      <img
        src={urls.regular}
        alt={alt_description}
        className="w-full roundeed-md"
      />
    </div>
  );
}

export default Image;
