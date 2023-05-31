import prismadb from '../../lib/prismadb'
import { getServerSession } from 'next-auth/next'
import {authOptions} from '../../lib/auth'
import { NextResponse } from 'next/server'

export async function GET(request){
        const user = await getServerSession(authOptions)
        /* const currentUser = await prismadb.user.findUnique({
            where: {
              email: user.email,
            },
          }); */
        return NextResponse.json(user)
}