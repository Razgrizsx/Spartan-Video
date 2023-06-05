import axios from "axios"
import Link from "next/link"
import {AiOutlineInfoCircle} from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'


export default async function BillBoard(){

   const data = await axios.post(`${process.env.BASE_URL}/random`)
   const {id, description, title, videourl, thumbnailurl} = data.data
       return( 
        <div className="relative h-[400px] w-full">
            <video className="w-full h-[400px] object-cover brightness-[60%]" autoPlay muted loop poster={thumbnailurl} src={videourl}></video>
            <div className="absolute top-[50%] md:top-[4%] ml-4 md:ml-16">
                <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">{title}</p>
                <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">{description}</p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <button className="bg-white text-black rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition">
                        <Link className="flex flex-row items-center" href={`/WatchPage/${id}`}>
                        <BsFillPlayFill className="mr-1"/>
                        Play
                        </Link>
                    </button>
                    <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20"><AiOutlineInfoCircle className='mr-1'/>
                     More Info
                    </button>
                </div>
            </div>
        </div>
    )
}