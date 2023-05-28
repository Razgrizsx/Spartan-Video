import { NextResponse } from 'next/server'
import prismadb from '../../lib/prismadb'


export async function POST(){
    try {
        const movieCount = await prismadb.movie.count()
        const index = Math.floor(Math.random() * movieCount)
       const movie = await prismadb.movie.findMany(
            {
                take: 1,
                skip: index
            }
         )
        return NextResponse.json(movie[0])
    } catch (error) {
        return NextResponse.json({'Error:': error})
    }
    
}