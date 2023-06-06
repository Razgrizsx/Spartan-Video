import prismadb from '../../lib/prismadb'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import {authOptions} from '../../lib/auth'
export const dynamic = 'force-dynamic'

export async function GET(request){
    try {
        const {user} = await getServerSession(authOptions)
         const currentUser = await prismadb.user.findUnique({
            where: {
              email: user.email,
            },
          }); 
       return NextResponse.json(currentUser) 
    } catch (error) {
       return NextResponse.json(error)
    }
}
