import { Trophy, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

export function Recognition() {
  const entries = projects.flatMap(project =>
    (project.recognitions ?? []).map(recognition => ({ ...recognition, project: project.title })),
  );
  const awards = entries.filter(entry => !entry.ongoing);
  const ongoing = entries.filter(entry => entry.ongoing);

  return (
    <section id="reconhecimentos" className="recognition-section container" aria-labelledby="recognition-title">
      <div className="section-heading">
        <h2 id="recognition-title">Ideias colocadas à prova.<br /><span>Conquistas em equipe.</span></h2>
        <p>Premiações e seleções em competições<br />de tecnologia, inovação e impacto social.</p>
      </div>
      <ul className="recognition-list">
        {awards.map(item => <li key={`${item.project}-${item.competition}`}>
          <Trophy size={20} aria-hidden="true" />
          <strong>{item.result}</strong>
          <div><h3>{item.project}</h3><p>{item.competition}</p></div>
        </li>)}
      </ul>
      {ongoing.length > 0 && <div className="recognition-ongoing">
        <h3>Os próximos desafios</h3>
        <p>Participações em andamento, ainda sem resultado final.</p>
        <ul>{ongoing.map(item => <li key={`${item.project}-${item.competition}`}>
          <ArrowUpRight size={18} aria-hidden="true" />
          <span>{item.project} · {item.competition}</span><span>{item.result}</span>
        </li>)}</ul>
      </div>}
    </section>
  );
}
