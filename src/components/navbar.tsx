import { useState } from 'react';
import { ArrowUpRight, Menu, Orbit, X } from 'lucide-react';
export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="header"><a className="wordmark" href="#inicio" aria-label="Felipe Oliveira, início"><Orbit size={25} />felipe<span>.oliveira</span></a><button className="menu-toggle icon-button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav id="navigation" className={open ? 'nav open' : 'nav'} aria-label="Navegação principal"><a onClick={() => setOpen(false)} href="#projetos">Projetos</a><a onClick={() => setOpen(false)} href="#experiencia">Experiência</a><a onClick={() => setOpen(false)} href="#orbita">Em órbita</a><a onClick={() => setOpen(false)} className="nav-contact" href="#contato">Vamos conversar <ArrowUpRight size={16} /></a></nav></header>;
}
