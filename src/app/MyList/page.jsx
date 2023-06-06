'use client'
import React, {useState, useEffect} from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
export const dynamic = 'force-dynamic'

export default function MyList(){
    const [data, setData] = useState([])
    const [error, setError] = useState()

  useEffect(() => {
   
      async function fetchData() {
        try {
          const response = await axios.get('api/favorites');
          setData(response.data)
        } catch (error) {
          setError("No pudimos hacer la solicitud");
        }
      }
      fetchData();
    },
   []);
    
    console.log(data)
    return(
        <div className="px-4 md:px-12 space-y-8 bg-zinc-800 h-full">
        <div>
            <br/>
            <p className="text-white text-md md:text-xl lg:text-2-xl font-semibold mb-4">
                My List
            </p>
            <div className="grid grid-cols-4 gap-2">
            {data?.map((movie) => { 
                return(
                <MovieCard key={movie.title} movie={movie} />
            )
            } 
            )}
            </div>
        </div>
        </div>
    )
}
