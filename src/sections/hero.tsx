import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Stars } from '../components/space';
import { PhotoFrame } from '../components/photo-frame';
import { personalPhotos } from '../data/personal-photos';

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <Stars />
      <div className="hero-grid container">
        <div className="hero-copy">
          <h1>Ideias na Terra.<br />Código <span>além.</span></h1>
          <p className="hero-intro">
            Sou Felipe Oliveira, desenvolvedor full stack.<br />
            Da interface à engenharia de ferramentas de IA, construo tecnologia para problemas reais.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projetos">Explorar trabalhos <ArrowDown size={18} /></a>
            <a className="text-link" href="https://github.com/feelps-1" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={17} /></a>
          </div>
        </div>
        <div className="hero-portrait">
          <svg className="portrait-orbits" viewBox="0 0 560 560" aria-hidden="true">
            <g fill="none" stroke="#3a423d">
              <circle cx="280" cy="280" r="260" />
              <ellipse cx="280" cy="280" rx="275" ry="155" transform="rotate(-35 280 280)" />
            </g>
            <circle cx="464" cy="96" r="10" fill="#eda77e" />
            <circle cx="35" cy="367" r="5" fill="#91b5b1" />
          </svg>
          <PhotoFrame src={personalPhotos.hero} alt="Felipe Oliveira falando ao microfone em um evento" caption="Felipe Oliveira · Desenvolvedor full stack" className="hero-photo" />
        </div>
      </div>
      <div className="hero-bottom container">
        <span><span className="location-dot" /> Recife, Pernambuco · Brasil</span>
        <span>Desenvolvimento full stack & IA</span>
        <a href="#projetos" aria-label="Rolar para projetos"><ArrowDown size={18} /></a>
      </div>
    </section>
  );
}
