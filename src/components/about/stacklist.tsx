import { tv, VariantProps } from "tailwind-variants"

export interface Tech {
    icon: string
    alttext: string
}

interface StackProps extends VariantProps<typeof list> {
    stack: Tech[]
}

const list = tv({
    base: 'transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110',
    variants: {
        size: {
            xsmall: 'size-7',
            small: 'size-12',
            medium: 'size-14'
        },
    },
    defaultVariants: {
        size: 'medium',
    }
})

export default function StackList({ stack, size }: StackProps) {   
    return (
        <div className="flex p-2 gap-4 flex-wrap justify-center items-center">
            {
                stack.map(({icon, alttext}) => (
                    <img key={alttext} src={icon} alt={alttext} className={list({ size })} />
                ))
            }
        </div>
    )
}