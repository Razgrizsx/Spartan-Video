'use client'
import { useState } from "react";
import AuthInput from "../components/input";


export default function Auth(){
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [logged, setLogged] = useState('Log In')

    const toggleLogged = (e) => {logged === 'Log In' ? setLogged('Register') : setLogged('Log In')}

    return(
        <div className="relative h-full w-full bg-[url('/images/hero.png')] bg-no-repeat bg-fixed bg-center bg-cover">
            <div className="bg-black w-full h-full bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-14 drop-shadow-[0_2px_5px_rgba(255,0,0,1)]"/>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {logged}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {logged === 'Register' && 
                            <AuthInput label='Username' onChange={(e) => {setUsername(e.target.value)}} type='text' id={'username'} value={username}></AuthInput>}
                            
                            <AuthInput label='Password' onChange={(e) => {setPassword(e.target.value)}} type='password' id={'password'} value={password}></AuthInput>
                            
                            <AuthInput label='Email' onChange={(e) => {setEmail(e.target.value)}} type='email' id={'email'} value={email}></AuthInput>
                        
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {logged === 'Log In' ? 'Log In' : 'Sign Up'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {logged === 'Log In' ? 'New to Spartan?' : 'Already have an account?'}
                            <span onClick={toggleLogged} className="text-white ml-1 hover:underline cursor-pointer">
                               {logged === 'Log In' ? 'Create an account' : 'Log In Here'}
                            </span>
                        </p>   
                    </div>
                </div>
            </div>
        </div>
    )
}