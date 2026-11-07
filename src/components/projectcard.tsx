import { useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, Image, Plus, X } from 'lucide-react';
import type { Project } from '../data/projects';

export function ProjectCard({
  title, category, stage, description, details = [], skills, recognitions = [],
  skillsLabel = 'Tecnologias utilizadas', preview, link,
}: Project) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [failedPreview, setFailedPreview] = useState<string>();
  const hasPreview = !!preview && failedPreview !== preview;

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.showModal();
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  const close = () => { dialog.current?.close(); setOpen(false); };

  return (
    <article className="project">
      <button className="project-trigger" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-label={`Conhecer o projeto ${title}`}>
        <div className="project-image">
          {hasPreview ? (
            <img src={preview} alt={`Capa visual do projeto ${title}`} loading="lazy" width="800" height="500" onError={() => setFailedPreview(preview)} />
          ) : (
            <div className="project-photo-placeholder">
              <Image size={30} strokeWidth={1} aria-hidden="true" />
              <span>{title}</span>
              <small>Registro visual em breve</small>
            </div>
          )}
          <span className="project-open"><Plus size={23} /></span>
        </div>
        <div className="project-meta"><span>{category}</span><span>Ver projeto <ArrowUpRight size={14} /></span></div>
        <h3>{title}</h3>
        {stage && <span className="project-stage">{stage}</span>}
        <p>{description}</p>
      </button>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby={titleId}
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onClick={event => { if (event.target === event.currentTarget) close(); }}
      >
        <div className="dialog-content">
          <button className="dialog-close icon-button" autoFocus onClick={close} aria-label="Fechar detalhes do projeto"><X /></button>
          {open && hasPreview && <img className="dialog-image" src={preview} alt={`Capa visual do projeto ${title}`} onError={() => setFailedPreview(preview)} />}
          <div className={`dialog-copy${hasPreview ? '' : ' dialog-copy-without-image'}`}>
            <span className="muted">{category}</span>
            <h2 id={titleId}>{title}</h2>
            {stage && <span className="project-stage">{stage}</span>}
            <p>{description}</p>
            {recognitions.length > 0 && <section className="project-detail">
              <h3>Competições e reconhecimentos</h3>
              <ul className="project-recognitions">
                {recognitions.map(item => <li key={item.competition}>
                  <strong>{item.result}</strong><span>{item.competition}</span>
                </li>)}
              </ul>
            </section>}
            {details.map(detail => (
              <section className="project-detail" key={detail.heading}>
                <h3>{detail.heading}</h3>
                <p>{detail.text}</p>
              </section>
            ))}
            {skills.length > 0 && <>
              <h3>{skillsLabel}</h3>
              <ul className="tech-list">
                {skills.map(skill => <li key={skill.alttext}>{skill.icon && <img src={skill.icon} alt="" />}{skill.alttext.replace(' Icon', '')}</li>)}
              </ul>
            </>}
            {link && link !== '#' && (
              <a className="button primary" href={link} target="_blank" rel="noreferrer">
                {title === 'Contest Search' ? 'Acessar o projeto' : 'Ver publicação do projeto'}<ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>
      </dialog>
    </article>
  );
}
