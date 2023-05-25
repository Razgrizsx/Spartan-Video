import Link from "next/link"

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
    return (
        
        <nav className="bg-zinc-900 flex flex-row px-12 py-5 w-full">
            <img src="/images/logo.png" alt="logo" className="h-14 drop-shadow-[0_2px_5px_rgba(255,0,0,1)]"/>
            <ul className="lg:flex flex-row px-4 md:px-6 items-center transition duration-500 gap-7 hidden">
                {links.map(({route, label}) => (
                    <li key={route}>
                    <Link key={route} href={route} className="text-white cursor-pointer hover:text-gray-300 transition"><p>{label}</p></Link>
                    </li>
                ))}
                
            </ul>
                <li className="text-white cursor-pointer hover:text-gray-300 lg:hidden flex flex-row px-4 md:px-6 items-center duration-500 gap-7 transition">
                    <Link key='browse' href='/profile'>Browse</Link>
                </li>
        </nav>
        
    )
}