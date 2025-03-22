import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

function ImageInfo() {
    const { id } = useParams()
    const {data,isPending,error} = useFetch(`https://api.unsplash.com/photos/${id}?client_id=_h1dHQPmq11J6oo8q-WsMqSbg1LFqkm8nS_6l1Xnavs`);
    console.log(data);
    
  return (
    <div>ImageInfo:{id}</div>
  )
}

export default ImageInfo