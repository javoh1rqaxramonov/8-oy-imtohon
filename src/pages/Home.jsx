import React, { useState, useEffect,useRef } from "react";
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
  const [pageParam, setPageParam] = useState(1);

  const prevSearchParam = useRef(searchParamsFromParams);

  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=_h1dHQPmq11J6oo8q-WsMqSbg1LFqkm8nS_6l1Xnavs&query=${searchParamsFromParams}&page=${pageParam}`
  );


  useEffect(() => {
    if (data && data.results) {
      setAllImages((prevImages) => {
        return pageParam === 1
          ? data.results
          : [...prevImages, ...data.results];
      });
    }
  }, [data]);

  useEffect(()=>{
    if(searchParamsFromParams !== prevSearchParam.current){
      setAllImages([]);
      setPageParam(1);
      prevSearchParam.current = searchParamsFromParams;
    }
  },[searchParamsFromParams])

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
      <div className="my-10 w-1/2 mx-auto md:w-1/3">
        <button
          onClick={() => setPageParam(pageParam + 1)}
          className="w-full btn btn-secondary"
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default Home;
