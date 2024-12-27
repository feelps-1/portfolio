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
import cpp from "/c-plusplus.svg"
import nextjs from "/nextjs-icon.svg"
import cin from "/HC.png"
import opencv from "/opencv.svg"
import dlj from "/dlj.jpg"
import cspreview from "/contestsearchpreview.png"
import synesthesia from "/synesthesia.jpg"
import cuidamais from "/cuidamais.jpg"
import astro from "/astro.gif"


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
    boraimpactar: [
        {icon: react, alttext: "React Icon"},
        {icon: typescript, alttext: "Typescript Icon"},
        {icon: tailwind, alttext: "Tailwind Icon"},
        {icon: figma, alttext: "Figma Icon"},   
        {icon: nodejs, alttext: "NodeJS Icon"},
        {icon: postgresql, alttext: "Postgresql Icon"},
        {icon: nextjs, alttext: "NextJS Icon"}
    ],
    synesthesia: [
        {icon: cpp, alttext: "CPlusPlus Icon"},
        {icon: arduino, alttext: "Arduino Icon"}
    ],
    cuidamais: [
        {icon: react, alttext: "React Icon"},
        {icon: typescript, alttext: "Typescript Icon"},
        {icon: tailwind, alttext: "Tailwind Icon"},
        {icon: figma, alttext: "Figma Icon"},   
        {icon: nodejs, alttext: "NodeJS Icon"},
        {icon: postgresql, alttext: "Postgresql Icon"},
    ],
    asteroidfinder: [
        {icon: cpp, alttext: "CPlusPlus Icon"},
        {icon: opencv, alttext: "OpenCV Icon"},
    ]
};

const projects: Array<Project> = [
    {
        title: "Cuida+",
        description: "App para auxiliar cuidadores de idosos familiares a ter acesso ao conhecimento e melhoria na rotina de cuidado na 13ª edição do Claro Campus Mobile",
        link: "https://www.institutoclaro.org.br/campus-mobile/noticias/conheca-os-projetos-selecionados-para-a-13a-edicao-do-campus-mobile/",
        preview: cuidamais,
        skills: projectStacks.cuidamais
    },
    {
        title: "CIn - Bora Impactar",
        description: "Projeto de extensão em parceria com a Prefeitura do Recife para desenvolver um portal que ajude ONGs a captar oportunidades de fomento",
        link: "https://extensao.cin.ufpe.br/portf%C3%B3lio-de-a%C3%A7%C3%B5es",
        preview: cin,
        skills: projectStacks.boraimpactar
    },
    {
        title: "Contest Search",
        description: "Site que agrega competições de nível estudantil",
        link: "https://contest-search.vercel.app/",
        preview: cspreview,
        skills: projectStacks.contestsearch
    },
    {
        title: "Synesthesia Vision",
        description: `Trabalhei como desenvolvedor técnico de um dispositivo sensorial para auxiliar pessoas com deficiência visual`,
        link: "https://www.instagram.com/synesthesiavision/",
        preview: synesthesia,
        skills: projectStacks.synesthesia
    },
    {
        title: "Desafio Liga Jovem",
        description: "Finalista da maior competição nacional de empreendedorismo e inovação, com um projeto de tecnologia sustentável",
        link: "https://portal.ifpe.edu.br/recife/noticias/estudantes-do-ifpe-recife-passam-para-semifinal-do-desafio-liga-jovem-sebrae/",
        preview: dlj,
        skills: projectStacks.synesthesia
    },
    {
        title: "AsteroidFinder",
        description: "Projeto de visão computacional para detectar asteroides em imagens de satélite usando OpenCV e conceitos de orientação a objetos",
        link: "#",
        preview: astro,
        skills: projectStacks.asteroidfinder
    }
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
