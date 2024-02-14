"use client"
import React from 'react'
import useLayoutContext from '@/context/LayoutContext'
const ConditionalTitle = () => {
    const { defaultLang } = useLayoutContext()
    return (
        <h2 className={`text-white mb-20 text-[52px] leading-[61.6px]  ${defaultLang === "en" ? "" : "text-end"}`} >
            {defaultLang === "en" ? "Main" : "الفئة"}
            <br />

            {defaultLang === "en" ? "Category" : "الرئيسية"}
        </h2>
    )
}

export default ConditionalTitle