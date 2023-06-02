import prismadb from '../../lib/prismadb'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'

export default async function WatchPage({params}){
    
    const movie = await prismadb.movie.findUnique(
        {
            where: {
                id: params.id
            }
        }
     )
    return (
        <div className="bg-zinc-800 h-full text-white">
            <div className='h-screen w-screen bg-black'>
                <nav className='fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70'>
                <Link className="flex flex-row items-center" href={`/`}><AiOutlineArrowLeft className='text-white' size={30}/></Link>
                <p className='text-white text-1xl md:text-3xl font-bold '>
                    <span className='font-light'>
                        Watching: 
                    </span>
                    {movie.title}
                </p>
                </nav>
                <video
                autoPlay
                controls
                className='h-full w-full' src={`${movie.videourl}`}></video>
            </div>
            
        </div>
    )
}