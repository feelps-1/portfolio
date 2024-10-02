interface ProjectProps {
    title: string
    description: string
    preview?: string
    link?: string
}

export function ProjectCard({
    title,
    description,
    preview = '',
    link = '',
}: ProjectProps){
    return (
        <a href={link} target="#">
        <div className="bg-slate-600 gap-3">
            {preview && (
                <img
                src={preview}
                alt="preview"
                className="max-h-52 w-full rounded-t-lg object-cover"
                />
            )}
            <span>
                <h3 className="p-2">{title}</h3>
                <p className="text-sm p-2">{description}</p>
            </span>
        </div>
        </a>
    )
}