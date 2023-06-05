import axios from "axios";
import React from "react";
import MovieCard from "./MovieCard";

export default async function MovieList({title}){
    let data = []
    data = await axios.get(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/movies`)
    
    return (
       <div className="px-4 md:px-12 mt-4 space-y-8 h-[300px]">
        <div>
            <p className="text-white text-md md:text-xl lg:text-2-xl font-semibold mb-4">
                {title}
            </p>
            <div className="grid grid-cols-4 gap-2">
            {data?.data.map((movie) => { 
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
