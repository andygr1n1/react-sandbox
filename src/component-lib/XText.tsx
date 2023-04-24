import { ReactNode } from 'react'
import { ComponentProps, ElementType } from 'react'

type TextOwnProps<E extends ElementType = ElementType> = {
    children: ReactNode
    as?: E
}

type TextProps<E extends ElementType> = TextOwnProps<E> & Omit<ComponentProps<E>, keyof TextOwnProps>

const defaultElement = 'div'

export const XText = <E extends ElementType = typeof defaultElement>({ children, as, ...otherProps }: TextProps<E>) => {
    const TagName = as || defaultElement

    console.log('as', as)
    return <TagName {...otherProps}>{children}</TagName>
}
