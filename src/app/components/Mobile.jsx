import React from "react";
import Link from "next/dist/client/link";

const links = [
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'Login',
        route: '/auth'
    },
    {
        label: 'Profile',
        route: '/profile'
    },
    {
        label: 'Movies',
        route: '/Movies'
    },
    {
        label: 'My List',
        route: '/MyList'
    },
]

export default function Mobile({visible}){
    if(!visible){
        return null
    }
    return (
        <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-4">
                {links.map(({label, route}) => {
                    return (
                        <Link key={label} href={route} className="px-3 text-center text-white hover:underline">
                            {label}
                        </Link>
                    )}
                )}
                <div className="px-3 text-center text-white hover:underline">
                    Home
                </div>
            </div>
        </div>
    )
}