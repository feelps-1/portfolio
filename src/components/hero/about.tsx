import StackList from "../about/stacklist"
import react from "/react.svg"
import typescript from "/typescript.svg"
import vite from "/vite.svg"
import tailwind from "/tailwind.svg"
import nodejs from "/nodejs.svg"
import postgresql from "/postgresql.svg"
import figma from "/figma.svg"
import resume from "/resume.pdf"

const stack = [
    {icon: react, alttext: "React Icon"},
    {icon: typescript, alttext: "Typescript Icon"},
    {icon: tailwind, alttext: "Tailwind Icon"},
    {icon: figma, alttext: "Figma Icon"},   
    {icon: vite, alttext: "Vite Icon"},
    {icon: nodejs, alttext: "NodeJS Icon"},
    {icon: postgresql, alttext: "Postgresql Icon"},
]

export function About() {
    return (
    <div className="bg-slate-800 md:rounded-b-md p-4 justify-center items-center flex flex-col h-full w-full relative">
        <h1 className="font-bold text-4xl md:mb-4 md:text-start text-center">Sobre mim</h1>
        <span className="gap-4">
            <h2 className="text-xl md:text-center text-justify mb-4">Sou estudante do 2º período de 
                Sistemas de Informação no CIn-UFPE e 
                formado como Técnico em Eletrônica no IFPE, adquiri experiência em 
                diversas áreas da tecnologia.</h2>
            <h3 className="text-3xl font-bold text-center mb-4">Atualmente, prefiro trabalhar com essas tecnologias:</h3>
            <StackList stack={stack}/>
        </span>

        <div className="bg-zinc-500 mt-10 text-xl p-4 rounded-lg hover:bg-blue-600">
        <a href={resume} download="curriculoFelipeOliveira.pdf"> 
            Baixar CV 
        </a>
        </div>
        
        {/* <span className="gap-4">
            <h3 className="text-3xl font-bold text-center">Também tenho experiência com essas:</h3>
        </span>
        <StackList stack={stack}/> */}
    </div>
    )
}