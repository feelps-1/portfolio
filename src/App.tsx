import { Navbar } from './components/navbar';
import { Hero } from './sections/hero';
import { Recognition } from './sections/recognition';
import { Projects } from './sections/projects';
import { Experience } from './sections/experience';
import { SolarSystem } from './sections/solar-system';
import { About } from './sections/about';
import { Footer } from './sections/footer';
export function App() {
  return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Navbar /><main id="conteudo"><Hero /><Projects /><Recognition /><Experience /><SolarSystem /><About /></main><Footer /></>;
}
