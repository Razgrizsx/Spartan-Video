import { NextResponse } from "next/server";
import prismadb from '../../../lib/prismadb'
import { authOptions } from "../../../lib/auth";

export async function GET(request, {params}){
    try {
        const id = params.movie
        const movie = await prismadb.movie.findUnique({
            where: {
                id: id
            }
        })
        return NextResponse.json(movie)
    }
    catch (error) {
        console.log(error)
    }
}