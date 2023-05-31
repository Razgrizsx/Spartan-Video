'use client'

import React, {useState, useEffect} from "react"
import axios from "axios"
import {AiOutlinePlus, AiOutlineCheck} from 'react-icons/ai'


export default function FavoriteButtons({movieId}){
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
   
      async function fetchData() {
        try {
          const response = await axios.get('api/current');
          setData(response.data.favoriteIds)
        } catch (error) {
          setError("No pudimos hacer la solicitud");
        }
      }
      fetchData();
    },
   []);
    

    const toggleFavorite = async () => {    
      if(data?.includes(movieId)){
        const response = await axios.delete('api/favorite', {data: {movieId}})
      console.log('delete', response)
      setData(data.filter((e) => e === movieId))
      }else{
        const response = await axios.post('api/favorite', {data: {movieId}})
      console.log('post', response)
      setData([...data, movieId])
      }
     }  

    return (
       
        <div    onClick={toggleFavorite}  className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
          {data?.includes(movieId) ? <AiOutlineCheck/> : <AiOutlinePlus className="text-white"/>}
        </div>
        
    )
}