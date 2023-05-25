import {signOut} from 'next-auth/react'
import React from 'react'

export default function AccountMenu({show}){
    
    if(!show){
        return null
    }
    return (
        <div className='bg-black w-56 absolute top-14 right-8 py-5 flex-col border-2 border-gray-800 flex'>
            <div className='flex flex-col gap-3'>
                <div className='px-3 group/item flex flex-row gap-3 items-centerd w-full'>
                    <img className='w-8 rounded-md' src="/images/profile.webp" alt="profile" />
                    <p className='text-white tesxt-sm group-hover/item:underline'>
                        Username
                    </p>
                </div>
                <hr className='bg-gray-600 border-0 h-px my-4' />

                <div onClick={() => signOut(undefined , { callbackUrl: '/' })} className='px-3 text-center text-white text-sm hover:underline'>
                    Sign Out
                </div>
            </div>
        </div>
    )
}