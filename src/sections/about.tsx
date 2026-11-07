import { PhotoFrame } from '../components/photo-frame';
import { personalPhotos } from '../data/personal-photos';

export function About() {
  return (
    <section id="sobre" className="about-section container" aria-labelledby="about-title">
      <div className="about-heading">
        <h2 id="about-title">Antes do código,<br /><span>vem a curiosidade.</span></h2>
        <p>Felipe Oliveira. Recife, Pernambuco.<br />Tecnologia, pessoas e vontade de construir.</p>
      </div>
      <div className="about-layout">
        <div className="about-photos">
          <PhotoFrame src={personalPhotos.aboutPortrait} alt="Felipe com a equipe na premiação do EDScript" caption="Uma conquista construída em equipe · EDScript" className="about-photo-portrait" />
          <PhotoFrame src={personalPhotos.aboutMoment} alt="Felipe apresentando um projeto ao público" caption="Ideias ganham vida quando são compartilhadas." className="about-photo-moment" />
        </div>
        <div className="about-copy">
          <p className="about-lead">Gosto de entender como as coisas funcionam — e como podem funcionar melhor para as pessoas.</p>
          <p>Minha trajetória conecta a Eletrônica, formação que trouxe do IFPE, aos Sistemas de Informação no CIn-UFPE. Entre sensores, interfaces e APIs, encontrei diferentes maneiras de transformar uma ideia em algo que possa ser usado.</p>
          <p>Hoje sou Desenvolvedor Júnior na Avanade, onde participo da engenharia de uma ferramenta interna de desenvolvimento orientado a IA. Construo funcionalidades, investigo problemas e ajudo outras equipes a usar a plataforma. Antes, atuei em aplicações full stack com Java e Angular.</p>
          <p>Também sou cofundador e Líder de Gestão da Manguebit, na UFPE. A experiência com equipes multidisciplinares, hackathons e protótipos me ensinou a ouvir, testar hipóteses e apresentar ideias com clareza.</p>
          <p>Projetos de acessibilidade, saúde e impacto social fazem parte desse caminho. Na pesquisa do Synesthesia Vision, trabalhei com um dispositivo sensorial para pessoas com deficiência visual. É esse encontro entre engenharia e necessidades reais que quero continuar explorando.</p>
          <a className="text-link" href="#contato">Vamos trocar uma ideia <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
