"use client"
import React from 'react'
import Button from '../UI/Button'
import useLayoutContext from "@/context/LayoutContext"
import { buttonLang } from '@/locales/UI'
const OpenModalButton = ({ label = "Book Now", className= ""}) => {
    const { openBookSidebar, defaultLang,isBookSidebarOpen } = useLayoutContext()
    const showLabel = () => {
        if (label === "Book Now" && defaultLang === "en") {
            return "Book Now"
        }
        if (defaultLang !== "en" && label === "Book Now") {
            return buttonLang[defaultLang].book
        }
        return label
    }

    return (
        <Button onClick={openBookSidebar}  className={className}> {showLabel()} </Button>
    )
}

export default OpenModalButton