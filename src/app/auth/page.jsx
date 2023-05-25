'use client'

import { useState } from "react";
import AuthInput from "../components/input";
import axios from "axios";
import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react";


export default function Auth(){
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [logged, setLogged] = useState('Log In')

    const { data: session } = useSession();

    const toggleLogged = (e) => {logged === 'Log In' ? setLogged('Register') : setLogged('Log In')}

    const register = async () => {
        try {
            await axios.post('/api/register',{
                email,
                name,
                password
            })
        } catch (error) {
            console.log('Error', error)
        }
    }
    return(
        <div className="bg-black w-full h-full bg-opacity-50 pt-6">
            <div className="w-full h-full">
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {logged}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {logged === 'Register' && 
                            <AuthInput label='Name' onChange={(e) => {setName(e.target.value)}} type='text' id={'name'} value={name}></AuthInput>}
                            {logged === 'Register' &&
                            <AuthInput label='Password' onChange={(e) => {setPassword(e.target.value)}} type='password' id={'password'} value={password}></AuthInput>}
                            {logged === 'Register' &&
                            <AuthInput label='Email' onChange={(e) => {setEmail(e.target.value)}} type='email' id={'email'} value={email}></AuthInput>}
                        
                        </div>
                        <button onClick={session ? () => signOut() : logged === 'Log In' ? () => signIn(undefined , { callbackUrl: '/' }) : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {session ? 'SignOut' : logged === 'Log In' ? 'Log In' : 'Sign Up'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {session ? '' : logged === 'Log In' ? 'New to Spartan?' : 'Already have an account?'}
                            <span onClick={toggleLogged} className="text-white ml-1 hover:underline cursor-pointer">
                               {session ? '' : logged === 'Log In' ? 'Create an account' : 'Log In Here'}
                            </span>
                        </p>   
                        
                    </div>
                </div>
            </div>
        </div>
    )
}