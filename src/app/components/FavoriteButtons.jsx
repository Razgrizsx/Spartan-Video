'use client'
import React, { useEffect, useState } from "react"
import axios from "axios"
import {AiOutlinePlus, AiOutlineCheck} from 'react-icons/ai'



export default async function FavoriteButtons({movieId}){
    const toggleFavorite = async () => { 
       const response = await axios.post('api/favorite', {data: {movieId}})
     }
    return (
        <div onClick={toggleFavorite} className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
            <AiOutlinePlus className="text-white"/>
        </div>
    )
}