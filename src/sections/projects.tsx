import { Tech } from "../components/about/stacklist";
import { ProjectCard } from "../components/projectcard";
import react from "/react.svg"
import typescript from "/typescript.svg"
import vite from "/vite.svg"
import tailwind from "/tailwind.svg"
import nodejs from "/nodejs.svg"
import postgresql from "/postgresql.svg"
import figma from "/figma.svg"
import arduino from "/arduino.svg"
import dlj from "/dlj.jpg"
import cspreview from "/contestsearchpreview.png"

export interface Project {
    title: string
    description: string
    skills: Tech[]
    preview?: string
    link?: string
}

const projectStacks = {
    contestsearch: [
        {icon: react, alttext: "React Icon"},
        {icon: typescript, alttext: "Typescript Icon"},
        {icon: tailwind, alttext: "Tailwind Icon"},
        {icon: figma, alttext: "Figma Icon"},   
        {icon: vite, alttext: "Vite Icon"},
        {icon: nodejs, alttext: "NodeJS Icon"},
        {icon: postgresql, alttext: "Postgresql Icon"},
    ],
    synesthesia: [
        {icon: arduino, alttext: "Arduino Icon"}
    ]
};

const projects: Array<Project> = [
    {
        title: "Contest Search",
        description: "Site que agrega competições de nível estudantil",
        link: "https://contest-search.vercel.app/",
        preview: cspreview,
        skills: projectStacks.contestsearch
    },
    {
        title: "Synesthesia Vision",
        description: "Desenvolvedor técnico de tecnologias assistivas",
        link: "https://synesthesiavision.com/",
        preview: '/contestsearchpreview.png',
        skills: projectStacks.synesthesia
    },
    {
        title: "Desafio Liga Jovem",
        description: "Finalista da maior competição nacional de empreendedorismo e inovação, com um projeto de tecnologia sustentavél",
        link: "https://synesthesiavision.com/",
        preview: dlj,
        skills: projectStacks.synesthesia
    },
]

export function Projects() {
    return (
        <div className="items-center mb-4 md:mx-10 gap-4 mt-4">
            <h1 className="font-bold md:text-4xl text-3xl md:text-start text-center my-4">Projetos e experiências</h1>
            <div className="flex flex-wrap justify-evenly gap-4">
                {projects?.map(({title, description, link, preview, skills}) => (
                    <ProjectCard
                        key={title}
                        title={title}
                        description={description}
                        link={link}
                        preview={preview} 
                        skills={skills}/>
                ))}
            </div>
        </div>
    )
}