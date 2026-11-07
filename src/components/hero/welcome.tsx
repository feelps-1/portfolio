import { motion } from "framer-motion";

export function Welcome(){
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="glass-card p-8 text-center lg:text-left"
        >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <span className="text-3xl md:text-4xl font-semibold text-slate-100">Olá</span>
                <img className="w-9 md:w-10" src="/wavingemoji.svg" alt="waving hand emoji" />
            </div>
            <p className="text-xl md:text-2xl text-slate-300">
                eu sou um <span className="font-bold glow-text text-2xl md:text-3xl">desenvolvedor fullstack!</span>
            </p>
        </motion.div>
    )
}