import type { Tech } from "../components/about/stacklist";

import react from "/react.svg"
import typescript from "/typescript.svg"
import vite from "/vite.svg"
import tailwind from "/tailwind.svg"
import nodejs from "/nodejs.svg"
import postgresql from "/postgresql.svg"
import figma from "/figma.svg"
import arduino from "/arduino.svg"
import cpp from "/c-plusplus.svg"
import nextjs from "/nextjs-icon.svg"
import opencv from "/opencv.svg"


export interface Project {
    recognitions?: { competition: string; result: string; ongoing?: boolean }[]
    category: string
    stage?: string
    details?: { heading: string; text: string }[]
    skillsLabel?: string
    title: string
    description: string
    skills: Tech[]
    preview?: string
    link?: string
}

const projectStacks = {
    contestsearch: [
        {icon: react, alttext: "React Icon"},
        {icon: typescript, alttext: "Typescript Icon"},
        {icon: tailwind, alttext: "Tailwind Icon"},
        {icon: figma, alttext: "Figma Icon"},
        {icon: vite, alttext: "Vite Icon"},
        {icon: nodejs, alttext: "NodeJS Icon"},
        {icon: postgresql, alttext: "Postgresql Icon"},
    ],
    boraimpactar: [
        {icon: react, alttext: "React Icon"},
        {icon: typescript, alttext: "Typescript Icon"},
        {icon: tailwind, alttext: "Tailwind Icon"},
        {icon: figma, alttext: "Figma Icon"},
        {icon: nodejs, alttext: "NodeJS Icon"},
        {icon: postgresql, alttext: "Postgresql Icon"},
        {icon: nextjs, alttext: "NextJS Icon"}
    ],
    synesthesia: [
        {icon: cpp, alttext: "CPlusPlus Icon"},
        {icon: arduino, alttext: "Arduino Icon"}
    ],
    cuidamais: [
        {icon: react, alttext: "React Icon"},
        {icon: typescript, alttext: "Typescript Icon"},
        {icon: tailwind, alttext: "Tailwind Icon"},
        {icon: figma, alttext: "Figma Icon"},
        {icon: nodejs, alttext: "NodeJS Icon"},
        {icon: postgresql, alttext: "Postgresql Icon"},
    ],
    asteroidfinder: [
        {icon: cpp, alttext: "CPlusPlus Icon"},
        {icon: opencv, alttext: "OpenCV Icon"},
    ]
};

export const projects: Array<Project> = [
    {
        title: 'Verdejar',
        category: 'Arborização urbana & sustentabilidade',
        stage: 'Protótipo · semifinalista do Liga Jovem 2025',
        description: 'Plataforma da equipe Manguebit que conecta empresas, instituições, comunidades e poder público para planejar e acompanhar ações de arborização urbana.',
        preview: '/verdejar-cover.png',
        recognitions: [{ competition: 'Desafio Liga Jovem · 2025', result: 'Semifinalista' }],
        skills: [],
        details: [
            { heading: 'O problema', text: 'O déficit de arborização, as ilhas de calor e a dificuldade de articulação entre organizações e comunidades motivaram a proposta: transformar o interesse em sustentabilidade em ações coordenadas de plantio e manutenção.' },
            { heading: 'O protótipo desenvolvido', text: 'O protótipo contemplava cadastros, sugestões de locais para plantio e conexão entre participantes. Empresas, instituições de ensino, ONGs, voluntários e poder público fazem parte da rede proposta pela equipe Manguebit.' },
            { heading: 'Inteligência territorial proposta', text: 'A IA foi proposta para combinar dados de satélite, censos arbóreos, mapas de ilhas de calor e sugestões da comunidade, apoiando a priorização de áreas e a escolha de espécies nativas. Essa camada descreve a proposta de evolução, não uma funcionalidade já concluída.' },
            { heading: 'Sensibilizar, conectar e empoderar', text: 'A metodologia une educação ambiental e mobilização comunitária, articulação entre financiadores e participantes, e protagonismo das comunidades no plantio e na manutenção das árvores.' },
            { heading: 'Validação e modelo de negócio', text: 'A validação inicial envolveu 16 pessoas entrevistadas. O pitch de 2025 explorava um modelo B2B + B2G, com cotas de impacto e taxa de gestão para financiar plantio, educação ambiental e acompanhamento. Naquele estágio, a equipe buscava parcerias para um piloto em Recife; não se trata de receita realizada nem de piloto já executado.' },
            { heading: 'Desafio Liga Jovem e Festival LED', text: 'O Verdejar foi semifinalista do Desafio Liga Jovem em 2025, com participação da equipe em Belém. O projeto também foi apresentado no Festival LED da Globo.' },
        ],
    },
    {
        title: 'Pluvius',
        preview: '/pluvius-cover.png',
        category: 'Mobilidade urbana & serviços públicos',
        stage: 'Hackathon · 2º lugar',
        description: 'Avisos dinâmicos sobre obstáculos e acontecimentos nas rotas que os usuários percorrem regularmente.',
        recognitions: [{ competition: 'Hacker Cidadão 12.0', result: '2º lugar' }],
        skills: [],
        details: [
            { heading: 'O desafio', text: 'Projeto desenvolvido no desafio de governo a zero clique, voltado ao apoio à mobilidade urbana.' },
            { heading: 'A solução', text: 'A proposta considera as rotas feitas regularmente pelos usuários para oferecer avisos dinâmicos de acordo com obstáculos e acontecimentos no trajeto.' },
            { heading: 'Reconhecimento', text: 'O Pluvius conquistou o 2º lugar no Hacker Cidadão 12.0.' },
        ],
    },
    {
        title: 'EDScript',
        preview: '/edscript-cover.png',
        recognitions: [{ competition: 'EDScript', result: '1º lugar' }],
        category: 'IA & análise esportiva',
        stage: 'Hackathon · projeto vencedor',
        description: 'Assistente de análise esportiva que combina dados, modelos estatísticos e IA para gerar insights e alertas contextuais.',
        skills: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Gemini / LLMs'].map(alttext => ({ alttext, icon: '' })),
        details: [
            { heading: 'O que foi desenvolvido', text: 'Integração de fontes de dados esportivos, modelos estatísticos e um modelo de linguagem para apoiar a leitura de partidas. Os insights exploram situações como pressão, momentos perigosos e risco de gols, escanteios e cartões.' },
            { heading: 'Contexto e resultado', text: 'Projeto vencedor do EDScript, desenvolvido em contexto de hackathon. A proposta conecta backend, interface e IA aplicada em uma experiência de análise esportiva.' },
            { heading: 'Pesquisa de dados', text: 'BetsAPI, StatsBomb e FBref foram fontes estudadas durante o projeto; isso não significa que todas tenham sido integradas à solução.' },
        ],
    },
    {
        title: 'Pulse',
        preview: '/pulse-cover.png',
        recognitions: [
            { competition: 'Hacker Cidadão 13.0', result: '2º lugar' },
            { competition: 'Claro Campus Mobile · 14ª edição', result: 'Semifinalista' },
        ],
        category: 'Saúde digital & dados',
        stage: 'Proposta e experimentação',
        description: 'Proposta para identificar risco de abandono do acompanhamento de diabetes e hipertensão na atenção básica.',
        skills: ['Machine Learning', 'Random Forest', 'Análise de dados'].map(alttext => ({ alttext, icon: '' })),
        skillsLabel: 'Técnicas exploradas',
        details: [
            { heading: 'Origem e reconhecimento', text: 'O Pulse nasceu no Hacker Cidadão 13.0, onde conquistou o 2º lugar. Também foi semifinalista da 14ª edição do Claro Campus Mobile.' },
            { heading: 'O problema', text: 'Apoiar Agentes Comunitários de Saúde na identificação de pessoas que podem interromper o acompanhamento de diabetes e hipertensão, ajudando a orientar o contato e a continuidade do cuidado.' },
            { heading: 'Experimentos realizados', text: 'Exploração de Random Forest com dados sintéticos, incluindo experimentos com e sem SMOTE. Esses experimentos não constituem validação clínica.' },
            { heading: 'Proposta de produto', text: 'Dashboards para ACS e fluxos de comunicação por WhatsApp, Twilio e síntese de voz fazem parte da solução explorada. Integrações com FHIR/RNDS e e-SUS/PEC foram estudadas como possibilidades, não apresentadas como funcionalidades concluídas.' },
            { heading: 'Próximos passos', text: 'Modelo B2G e piloto com UBS foram discutidos como caminhos de validação. O projeto não é apresentado como um piloto já executado.' },
        ],
    },
    {
        title: 'Hai',
        preview: '/hai-cover.png',
        recognitions: [
            { competition: 'Sebrae Supernova', result: 'Em competição', ongoing: true },
            { competition: 'Claro Campus Mobile · 15ª edição', result: 'Em competição', ongoing: true },
        ],
        category: 'Educação & empregabilidade',
        stage: 'Pesquisa e prototipação',
        description: 'Proposta de edtech que aproxima jovens de oportunidades por meio de desafios práticos, portfólios e avaliação de habilidades.',
        skills: [],
        details: [
            { heading: 'A proposta', text: 'Explorar uma ponte entre aprendizagem e empregabilidade jovem: desafios práticos que ajudem a demonstrar habilidades e a construir portfólios, com IA como apoio.' },
            { heading: 'Pesquisa e validação', text: 'Pesquisa com jovens e validação com recrutadores para compreender necessidades, avaliar a proposta e orientar os protótipos.' },
            { heading: 'Escopo do trabalho', text: 'Descoberta de problemas, pesquisa, modelagem de negócio e prototipação. Foram exploradas possibilidades B2B, B2I e B2G; a iniciativa não é apresentada como uma plataforma de software pronta.' },
        ],
    },
    {
        title: "Cuida+",
        category: 'Saúde & cuidado',
        description: "App para auxiliar cuidadores de idosos familiares a ter acesso ao conhecimento e melhoria na rotina de cuidado na 13ª edição do Claro Campus Mobile",
        link: "https://www.institutoclaro.org.br/campus-mobile/noticias/conheca-os-projetos-selecionados-para-a-13a-edicao-do-campus-mobile/",
        preview: '/cuidamais-cover.png',
        skills: projectStacks.cuidamais
    },
    {
        title: "CIn - Bora Impactar",
        category: 'Tecnologia & impacto social',
        description: "Projeto de extensão em parceria com a Prefeitura do Recife para desenvolver um portal que ajude ONGs a captar oportunidades de fomento",
        link: "https://extensao.cin.ufpe.br/portf%C3%B3lio-de-a%C3%A7%C3%B5es",
        preview: '/bora-impactar-cover.png',
        skills: projectStacks.boraimpactar
    },
    {
        title: "Contest Search",
        category: 'Educação & oportunidades',
        description: "Site que agrega competições de nível estudantil",
        link: "https://contest-search.vercel.app/",
        preview: '/contest-search-cover.png',
        skills: projectStacks.contestsearch
    },
    {
        title: "Synesthesia Vision",
        category: 'Hardware & acessibilidade',
        description: `Trabalhei como desenvolvedor técnico de um dispositivo sensorial para auxiliar pessoas com deficiência visual`,
        link: "https://www.instagram.com/synesthesiavision/",
        preview: '/synesthesia-vision-cover.png',
        details: [{ heading: 'Pesquisa e engenharia', text: 'Pesquisa em tecnologia assistiva ligada ao GRENDES/UFPE, de agosto de 2023 a agosto de 2024. Atuação com firmware em C++, sensores, ESP32 e integração com API Spring Boot.' }],
        skills: projectStacks.synesthesia
    },
    {
        title: "Water Recycle",
        stage: 'Finalista nacional · 2023',
        recognitions: [{ competition: 'Desafio Liga Jovem · 2023', result: 'Finalista da etapa nacional' }],
        category: 'Inovação & sustentabilidade',
        description: "Projeto de tecnologia sustentável finalista da etapa nacional do Desafio Liga Jovem em 2023.",
        link: "https://portal.ifpe.edu.br/recife/noticias/estudantes-do-ifpe-recife-passam-para-semifinal-do-desafio-liga-jovem-sebrae/",
        preview: '/water-recycle-cover.png',
        skills: projectStacks.synesthesia
    },
    {
        title: "AsteroidFinder",
        category: 'Visão computacional',
        description: "Projeto de visão computacional para detectar asteroides em imagens de satélite usando OpenCV e conceitos de orientação a objetos",
        link: "#",
        preview: '/asteroid-finder-cover.png',
        skills: projectStacks.asteroidfinder
    }
]
