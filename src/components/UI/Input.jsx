"use client"
import useLayoutContext from '@/context/LayoutContext'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
const Input = ({
    type = "text",
    placeholder = "",
    children,
    className = "",
    value = "",
    ...rest
}) => {
    const { defaultLang } = useLayoutContext()
    const [isFocus, setIsFocus] = useState(false)
    const classNames = twMerge("w-full h-full z-20 relative bg-transparent  border-solid border-b-[1px] border-secondary placeholder:text-secondary text-secondary text-[18px] focus:outline-none", className)
    // defaultLang === "en" ? "ltr" : "rtl"
    return (
        <div className='relative' >
            {(!isFocus && !value) && <div className={`absolute ${defaultLang === "en" ? "left-0" : "right-0"}   bottom-1  z-10`} >
                {children}
            </div>}
            <input value={value} style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }} placeholder={placeholder} type={type} onBlur={() => setIsFocus(false)} onFocus={() => setIsFocus(true)} {...rest} className={classNames} />
        </div>
    )
}

export default Input