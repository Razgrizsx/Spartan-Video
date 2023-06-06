'use client'
import React, {useState, useEffect} from "react"
import axios from "axios"
import MovieFullCard from "../components/MovieFullCard"

export default function Movies(){

    const [data, setData] = useState()
    const [error, setError] = useState()

  useEffect(() => {
   
      async function fetchData() {
        try {
          const response = await axios.get('api/movies');
          setData(response.data)
        } catch (error) {
          setError("No pudimos hacer la solicitud");
        }
      }
      fetchData();
    },
   []);
    
    


    //const {data} = await axios.get(`${process.env.BASE_URL}/movies`) 

    return (
        <div className="flex items-center h-full justify-center bg-zinc-800">
        <div className="px-4 md:px-12 mt-4 space-y-8 h-[600px]">
        <div>
            <p className="text-white text-md md:text-xl lg:text-2-xl font-semibold mb-4">
                
            </p>
            <div className="grid grid-cols-4 gap-2">
            {data?.map((movie) => { 
                return(
                <MovieFullCard key={movie.title} movie={movie} />
            )
            } 
            )}
            </div>
        </div>
        </div>
        </div>
    )
}
