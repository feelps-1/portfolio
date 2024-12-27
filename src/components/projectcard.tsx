import StackList, { Tech } from "./about/stacklist"

interface ProjectProps {
    title: string
    description: string
    skills: Tech[] 
    preview?: string
    link?: string
}

export function ProjectCard({
    title,
    description,
    skills,
    preview = '',
    link = '',
}: ProjectProps){
    return (
        <a href={link} target="#">
        <div className="bg-zinc-800 gap-2 rounded-t-lg md:w-[460px] h-full">
            {preview && (
                <img
                src={preview}
                alt="preview"
                className="max-h-52 w-full rounded-t-lg object-cover object-top h-full"
                />
            )}
            <div className="px-2">
                <h3 className="pt-2">{title}</h3>
                <p>Stack:</p>
                <StackList stack={skills} size='xsmall'/>
                <p className="text-sm pb-2  text-ellipsis">{description}</p>
            </div>
        </div>
        </a>
    )
}
