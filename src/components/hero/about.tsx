import { motion } from "framer-motion";
import { Download } from "lucide-react";
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
    <motion.div
        id="sobre"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        className="glass-card p-8 flex flex-col gap-6"
    >
        <h2 className="font-bold text-2xl md:text-3xl text-center lg:text-left">
            Sobre <span className="glow-text">mim</span>
        </h2>

        <p className="text-slate-300 text-base md:text-lg leading-relaxed text-center lg:text-left">
            Sou estudante do 2º período de Sistemas de Informação no CIn-UFPE e
            formado como Técnico em Eletrônica no IFPE, adquiri experiência em
            diversas áreas da tecnologia.
        </p>

        <div>
            <h3 className="text-lg font-semibold text-center mb-3 text-slate-200">
                Tecnologias que uso no dia a dia
            </h3>
            <StackList stack={stack}/>
        </div>

        <div className="flex justify-center">
            <a
                href={resume}
                download="curriculoFelipeOliveira.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
                <Download size={18} />
                Baixar CV
            </a>
        </div>
    </motion.div>
    )
}
