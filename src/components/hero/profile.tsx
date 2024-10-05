import { MapPin } from "lucide-react";
import profile from "/tucano.jpeg"

interface Contact {
    icon: string;
    url: string;
}

interface ProfileProps {
    contacts: Contact[];
}

export function Profile({ contacts }: ProfileProps) {
    return (
        <div className="md:w-5/12 h-full p-4 flex flex-col md:rounded-md items-start gap-4 text-white bg-slate-800">
            <img className='w-48 rounded-full' src={profile} alt='tucano'></img>
            <span className="flex-col">
                <h3 className="bg-gradient-to-r from-blue-600 via-sky-500  to-sky-300 bg-clip-text text-4xl text-transparent lg:text-6xl">Felipe</h3>
                <h2 className="text-2xl font-light text-gray-700 dark:text-gray-100">SANTANA DE OLIVEIRA</h2>
            </span>
            <section className="rounded rounded-bl-none rounded-tl-none border-l-4 border-l-sky-500 p-4 bg-gray-700 text-white lg:text-sm">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis diam a dolor porta pharetra id sed velit. In posuere ut sapien eget suscipit. Donec quis sollicitudin ante.</span>
            </section>
            <section className="flex flex-row gap-2">
                <MapPin/>
                <p>Pernambuco, Brasil</p>
            </section>
            <section className="flex gap-2">
                {contacts.map(({icon, url}) => (
                    <a key={url} href={url} target="blank">
                        <img src={icon}
                        alt={url}
                        className="w-10 grayscale hover:grayscale-0"
                        />
                    </a>
                ))}
            </section>  
        </div>
    )
}