'use client'

import Link from "next/link"
import {BsChevronDown, BsSearch, BsBell } from'react-icons/bs'
import Mobile from "./Mobile"
import { useState } from "react"
import AccountMenu from './AccountMenu'

const links = [
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'Series',
        route: '/auth'
    },
    {
        label: 'Films',
        route: '/profile'
    },
    {
        label: 'New & Popular',
        route: '/profile'
    },
    {
        label: 'My List',
        route: '/profile'
    },
]

export default function Navigation(){
    const [visible, setVisible] = useState(false)
    const [show, setShow] = useState(false)
    return (
        
        <nav className="bg-zinc-950 flex flex-row px-12 py-5 w-full">
            <img src="/images/logo.png" alt="logo" className="h-14 drop-shadow-[0_2px_5px_rgba(255,0,0,1)]"/>
            <ul className="lg:flex flex-row px-4 md:px-6 items-center transition duration-500 gap-7 hidden">
                {links.map(({route, label}) => (
                    <li key={label}>
                    <Link key={label} href={route} className="text-white cursor-pointer hover:text-gray-300 transition"><p>{label}</p></Link>
                    </li>
                ))}
                
            </ul>
                <li onClick={() => setVisible(!visible)} className="text-white cursor-pointer hover:text-gray-300 lg:hidden flex flex-row px-4 md:px-6 items-center duration-500 gap-7 transition">
                    <p className="text-white text-sm" key='browse'>Browse</p>
                    <BsChevronDown className={`text-white transition ${visible ? 'rotate-180' : 'rotate-0'}`}/>
                    <Mobile visible={visible}/>
                </li>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch/>
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell/>
                    </div>
                    <div onClick={() => setShow(!show)} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/profile.webp" alt="profile" />
                        </div>
                            <BsChevronDown className={`text-white transition ${show ? 'rotate-180' : 'rotate-0'}`}/>
                            <AccountMenu show={show}/>
                    </div>
                </div>
        </nav>
        
    )
}