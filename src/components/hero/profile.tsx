import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
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
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass-card p-8 flex flex-col items-center lg:items-start gap-5 w-full lg:w-auto lg:min-w-[320px]"
        >
            <div className="relative">
                <img
                    className="w-36 h-36 rounded-full object-cover ring-4 ring-cyan-500/30 shadow-lg shadow-cyan-500/20"
                    src={profile}
                    alt="Felipe Oliveira"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-slate-900" />
            </div>

            <div className="text-center lg:text-left">
                <h1 className="text-3xl lg:text-4xl font-bold glow-text">Felipe</h1>
                <h2 className="text-lg font-light text-slate-400 tracking-wider">SANTANA DE OLIVEIRA</h2>
            </div>

            <div className="rounded-xl border-l-4 border-l-cyan-500 p-4 bg-slate-800/60 text-slate-300 text-sm leading-relaxed">
                Gosto de desenvolver soluções inovadoras para ajudar pessoas e transformar a comunidade ao meu redor.
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin size={16} className="text-cyan-400" />
                <span>Pernambuco, Brasil</span>
            </div>

            <div className="flex gap-3 pt-1">
                {contacts.map(({icon, url}) => (
                    <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center hover:bg-cyan-500/20 hover:ring-1 hover:ring-cyan-500/50 transition-all duration-200"
                    >
                        <img
                            src={icon}
                            alt={url}
                            className="w-5 h-5 grayscale hover:grayscale-0 transition-all duration-200"
                        />
                    </a>
                ))}
            </div>
        </motion.div>
    )
}
