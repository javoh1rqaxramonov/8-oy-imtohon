import React, { useState, useEffect } from "react";
import { Search, ImageContainer } from "../components";
import { useActionData } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Audio } from "react-loader-spinner";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let search = formData.get("search");
  return search;
};

function Home() {
  const searchParamsFromParams = useActionData();
  const [allImages, setAllImages] = useState([]);

  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }&query=random`
  );

  console.log(data?.results);

  useEffect(() => {
    if (data && data.results) {
      setAllImages(data.results);
    }
  }, [data]);

  if (isPending) {
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
  }
  if (error) {
    return <h1>Error:{error}</h1>;
  }

  return (
    <div className="aligh-elements">
      <div className="my-10">
        <Search />
      </div>
      {allImages.length > 0 && <ImageContainer images={allImages} />}
    </div>
  );
}

export default Home;
