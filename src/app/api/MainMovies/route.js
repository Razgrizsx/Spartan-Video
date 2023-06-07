import prismadb from '../../lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(request){
    try {
        const movies = await prismadb.movie.findMany()
        const mainMovies = movies.slice(0, 4)
       return NextResponse.json(mainMovies) 
    } catch (error) {
       return NextResponse.json('Error', error)
    }
}