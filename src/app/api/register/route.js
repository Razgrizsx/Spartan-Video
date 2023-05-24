import bcrypt from 'bcrypt'
import { NextResponse, NextRequest } from 'next/server'
import prismadb from '../../lib/prismadb'

export async function POST(request){
    try {
        const {email, name, password} = await request.json()
        const foundUser = await prismadb.user.findUnique({
            where:{
                email
            }
        })
        if (foundUser){
            return NextResponse.json({error: 'Email Taken'})
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = await prismadb.user.create({
            data:{
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date()
            }
        })
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json('Error:', error)
    }
    }
