import { NextResponse } from 'next/server'
import prismadb from '../../lib/prismadb'


export async function GET(){
    try {
        const movieCount = await prismadb.movie.count()
         const index = Math.floor(Math.random() * movieCount)
        const movie = await prismadb.movie.findMany()
        return NextResponse.json(movie)
    } catch (error) {
        return NextResponse.json({'Error:': error})
    }
    
}