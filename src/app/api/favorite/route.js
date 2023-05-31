 import { NextResponse } from "next/server";
 import prismadb from '../../lib/prismadb'
 import { getServerSession } from "next-auth";
 import { authOptions } from "../../lib/auth";

 export async function POST(request){
    const {user} = await getServerSession(authOptions)
        const {data} = await request.json()
        const currentUser = await prismadb.user.findUnique({
            where: {
              email: user.email,
            },
          })
        const foundMovie = await prismadb.movie.findUnique({
            where:{
                id: data.movieId
            }
        })
        if(currentUser.favoriteIds.includes(data.movieId)){
            return NextResponse.json('Id already in favorite')
        }
        if(!foundMovie){
            throw new Error('Invalid Id')
        }
        const cUser = await prismadb.user.update({
            where:{
                email: user.email
            },
            data:{
                favoriteIds: {
                    push: data.movieId
                }
            }
        })
    return NextResponse.json(cUser)
 }

 export async function DELETE(request){
    return NextResponse.json('connected')
    const {user} = await getServerSession(authOptions)
        const {data} = await request.json()
        
        const currentUser = await prismadb.user.findUnique({
            where: {
              email: user.email,
            },
          })
          
         const foundMovie = await prismadb.movie.findUnique({
            where:{
                id: data.movieId
            }
        })
        
        if(!foundMovie){
            throw new Error('Invalid Id')
        }
        const newfavorites = currentUser.favoriteIds.filter((e) => e === data.id)
        
        const cUser = await prismadb.user.update({
            where:{
                email: user.email
            },
            data:{
                favoriteIds: newfavorites
            }
        })
        
        
    
 }