import axios from "axios";
import React from "react";
import MovieCard from "./MovieCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import prismadb from '../lib/prismadb'



export default async function MyMovieList({title}){
   const movies = await fetch(`${process.env.BASE_URL}/favorites`)
   console.log(movies)
    return (
        <div className="px-4 md:px-12 mt-4 space-y-8 h-[400px]">
        {/* <div>
            <p className="text-white text-md md:text-xl lg:text-2-xl font-semibold mb-4">
                {title}
            </p>
            <div className="grid grid-cols-4 gap-2">
            {foundMovie.map((movie) => { 
                return(
                <MovieCard movie={movie}/>
            )
            } 
            )}
            </div>
        </div> */}
        </div>
    )
}  
