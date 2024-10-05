import { tv, VariantProps } from "tailwind-variants"

export interface Tech {
    icon: string
    alttext: string
}

interface StackProps extends VariantProps<typeof list> {
    stack: Tech[]
}

const list = tv({
    base: 'md:grayscale md:hover:grayscale-0',
    variants: {
        size: {
            xsmall: 'size-8',
            small: 'size-16',
            medium: 'size-20'
        },

    },
    defaultVariants: {
        size: 'medium',
    }
    },)

export default function StackList({ stack, size }: StackProps) {   
    return (
        <div className="flex p-2 gap-4 flex-wrap justify-center items-center">
            {
                stack.map(({icon, alttext}) => (
                    <img src={icon} alt={alttext} className={list({ size })}></img>
                ))
            }
        </div>
    )
}