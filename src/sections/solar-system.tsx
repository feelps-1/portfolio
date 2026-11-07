import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Stars } from '../components/space';
const planets = [
  {name:'Mercúrio', radius:68, size:4, color:'#b9aca2', speed:810, start:20},
  {name:'Vênus', radius:95, size:7, color:'#d6b68c', speed:610, start:145},
  {name:'Terra', radius:125, size:8, color:'#91b5b1', speed:490, start:240},
  {name:'Marte', radius:158, size:6, color:'#c7785e', speed:390, start:310},
  {name:'Júpiter', radius:207, size:19, color:'#cda888', speed:265, start:70},
  {name:'Saturno', radius:258, size:15, color:'#d2c19d', speed:210, start:190},
  {name:'Urano', radius:305, size:11, color:'#92b8bd', speed:155, start:345},
  {name:'Netuno', radius:350, size:10, color:'#778ea6', speed:110, start:125},
];
function Planet({planet, progress, reduced}: {planet: typeof planets[number]; progress: MotionValue<number>; reduced: boolean}) {
  // SVG coordinates share the exact center and radius of the orbit paths.
  // Avoid CSS transform-origin, which is relative to the planet group's box.
  const angle = useTransform(progress, value =>
    (planet.start + (reduced ? 0 : value * planet.speed)) * Math.PI / 180,
  );
  const cx = useTransform(angle, value => 400 + planet.radius * Math.cos(value));
  const cy = useTransform(angle, value => 400 + planet.radius * Math.sin(value));
  return (
    <g data-planet={planet.name} data-orbit-radius={planet.radius}>
      <motion.circle cx={cx} cy={cy} r={planet.size} fill={planet.color} />
      {planet.name === 'Saturno' && (
        <motion.ellipse cx={cx} cy={cy} rx="26" ry="8" fill="none" stroke={planet.color} strokeWidth="3" />
      )}
    </g>
  );
}
export function SolarSystem() {
  const ref = useRef<HTMLElement>(null);
  const reduced = !!useReducedMotion();
  const {scrollYProgress} = useScroll({target:ref, offset:['start start','end end']});
  const scaleX = useTransform(scrollYProgress,[0,1],[0,1]);
  return <section ref={ref} className={`solar-section${reduced ? ' reduced' : ''}`} id="orbita"><div className="solar-sticky"><Stars/><div className="solar-title container"><h2>A curiosidade<br/>não fica parada.</h2><p>Entre software, eletrônica e IA,<br/>há sempre uma nova órbita para explorar.</p></div><svg className="solar-art" viewBox="0 0 800 800" role="img" aria-label="Sistema solar ilustrativo: oito planetas orbitam o Sol conforme a página é rolada. Distâncias e velocidades fora de escala."><g fill="none" stroke="#343938" strokeWidth=".7">{planets.map(p => <circle key={p.name} cx="400" cy="400" r={p.radius}/>)}</g><circle cx="400" cy="400" r="37" fill="#edac70"/><circle cx="400" cy="400" r="44" fill="none" stroke="#edac70" strokeWidth=".7"/>{planets.map(p => <Planet key={p.name} planet={p} progress={scrollYProgress} reduced={reduced}/>)}</svg><div className="solar-bottom container"><span>{reduced ? 'Um universo de possibilidades.' : 'Continue rolando. O universo acompanha.'} <ArrowDown size={16}/></span><span>Uma interpretação do sistema solar · fora de escala</span></div><motion.div className="orbit-progress" style={{scaleX}}/></div></section>;
}
