"use client"
import React from 'react'
import NextLink from 'next/link'
import useLayoutContext from '@/context/LayoutContext'

const Link = ({ children, href = "#", withExternalquery = false, ...rest }) => {
    const { defaultLang } = useLayoutContext()
    const hrefBuilder = defaultLang === "en" || withExternalquery ? href : `${href}?lang=ar`
    return (
        <NextLink href={hrefBuilder} {...rest}>
            {children}
        </NextLink>
    )
}

export default Link