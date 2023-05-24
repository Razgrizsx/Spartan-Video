import prismadb from '../../lib/prismadb'
import { NextResponse } from 'next/server';

export async function POST(request){

const {email, password} = await request.json()

 const user = await prismadb.user.findUnique({
    where: {
      email,
    },
  }); 

  return NextResponse.json(user.id)
}