import prismadb from '../../lib/prismadb'
import { getServerSession } from 'next-auth/next'
import {authOptions} from '../../lib/auth'
import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const {user} = await getServerSession(authOptions)
     const currentUser = await prismadb.user.findUnique({
        where: {
          email: user.email,
        },
      }); 
      const movies = await prismadb.movie.findMany({
        where:{
          id: {in : currentUser.favoriteIds}
        }
      })
   return NextResponse.json(movies) 
} catch (error) {
   return NextResponse.json(error)
}
}