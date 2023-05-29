import prismadb from '../../lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(request){
    try {
        const movies = await prismadb.movie.findMany()
       return NextResponse.json(movies) 
    } catch (error) {
       return NextResponse.json('Error', error)
    }
}