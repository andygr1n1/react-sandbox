import { ComponentProps, ElementType, ReactNode } from 'react'

type XButtonOwnProps<E extends ElementType = ElementType> = {
    children: ReactNode
    primary?: boolean
    secondary?: boolean
    as?: E
}

type XButtonProps<E extends ElementType> = XButtonOwnProps<E> & Omit<ComponentProps<E>, keyof XButtonOwnProps>

const defaultElement = 'button'

export const XButton = <E extends ElementType = typeof defaultElement>({
    children,
    primary,
    secondary,
    as,
    ...otherProps
}: XButtonProps<E>) => {
    const TagName = as || defaultElement
    return <TagName {...otherProps}>{children}</TagName>
}
