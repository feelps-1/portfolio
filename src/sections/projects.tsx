import { ProjectCard } from "../components/projectcard";

export interface Project {
    title: string
    description: string
    preview?: string
    link?: string
}

const projects: Array<Project> = [
    {
      title: "Contest Search",
      description: "Site que agrega competições de nível estudantil",
      link: "https://contest-search.vercel.app/",
      preview: '/contestsearchpreview.png',
    },
    {
        title: "Synesthesia Vision",
        description: "Desenvolvedor técnico de tecnologias assistivas",
        link: "https://contest-search.vercel.app/",
        preview: '/contestsearchpreview.png',
    },
    {
        title: "Desafio Liga Jovem",
        description: "Desenvolvedor técnico de tecnologias assistivas",
        link: "https://contest-search.vercel.app/",
        preview: '/contestsearchpreview.png',
    },
    {
        title: "Conkktest Search",
        description: "Site que agrega competições de nível estudantil",
        link: "https://contest-search.vercel.app/",
        preview: '/contestsearchpreview.png',
      },
      {
          title: "Synestkhesia Vision",
          description: "Desenvolvedor técnico de tecnologias assistivas",
          link: "https://contest-search.vercel.app/",
          preview: '/contestsearchpreview.png',
      },
      {
          title: "Deskafio Liga Jovem",
          description: "Desenvolvedor técnico de tecnologias assistivas",
          link: "https://contest-search.vercel.app/",
          preview: '/contestsearchpreview.png',
      },
]

export function Projects() {
    return (
        <div className="justify-evenly items-center md:h-screen">
            <h1 className="font-bold text-4xl mb-4 md:ml-10">Projetos e experiências</h1>
            <div className="flex flex-wrap justify-evenly gap-4">
                {projects?.map(({title, description, link, preview}) => (
                    <ProjectCard
                    key={title}
                    title={title}
                    description={description}
                    link={link}
                    preview={preview}
                    />
                ))}
            </div>
        </div>
    )
}