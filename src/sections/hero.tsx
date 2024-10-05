import email from "/email.svg"
import linkedin from "/linkedin.svg"
import github from "/github.svg"
import { Profile } from "../components/hero/profile";
import { Welcome } from "../components/hero/welcome";
import { About } from "../components/hero/about";

const contacts = [  
    {icon: email, url:'mailto:felipesansoliv01@gmail.com'},
    {icon: linkedin, url:'https://www.linkedin.com/in/felipe-santana-de-oliveira-4251a8230/'},
    {icon: github, url:'https://github.com/feelps-1'}
]

export function Hero() {
    return (
        <>
        <div className="md:h-screen flex flex-wrap items-center justify-center md:px-10">
                <div className="flex justify-center w-full md:gap-10 flex-col md:flex-row"> 
                    <Profile contacts={contacts}/>
                    <div className="overflow-y-auto gap-4">
                        <Welcome/>
                        <About/>
                    </div> 
                </div>
        </div>
        </>
    )
}