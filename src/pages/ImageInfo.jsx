import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Audio } from "react-loader-spinner";

const ImageInfo = ({ links }) => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/photos/${id}?client_id=_h1dHQPmq11J6oo8q-WsMqSbg1LFqkm8nS_6l1Xnavs`
  );
  console.log(data);
  console.log("ImageInfo page, ID:", id);

  const downloadImage = (event) => {
    event.preventDefault();
    window.open(data.links.download + "&force=true", "_blank");
  };

  if (isPending)
    return (
      <div className="flex justify-center items-center h-screen">
        <Audio
          height="300"
          width="150"
          radius="9"
          color="green"
          ariaLabel="loading"
        />
      </div>
    );

  if (error) return <p>Something went wrong: {error}</p>;

  if (!data) return <p>No image found!</p>;

  return (
    <div className="p-4 md:flex gap-10 aligh justify-center max-[840px]:flex-col max-[840px]:justify-center">
      <img
        src={data.urls.regular}
        alt={data.alt_description}
        className="w-[500px] max-[840px]:w-[750px] mt-4 rounded-lg h-[400px] sm:h-[600px]"
      />

      <div className="mt-4 md:mt-10 md:w-[600px]">
        <h2 className="sm:text-xl text-md font-bold">
          {data.description || "No description available"}
        </h2>
        <h2 className="sm:text-xl text-sm font-medium">
          {data.alt_description || "No alt description"}
        </h2>
        <p className="mt-2">Creator: {data.user.name}</p>
        <p className="mt-2">
          Created At: {new Date(data.created_at).toLocaleDateString()}
        </p>
        <div>
          <button
            download
            onClick={(e) => downloadImage(e)}
            className="border-2 py-3 px-5 rounded-md bg-blue-500 text-white mt-2 sm:mt-10 cursor-pointer"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageInfo;
