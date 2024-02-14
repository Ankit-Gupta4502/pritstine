"use client"
import { createContext, useContext, useState, useEffect } from "react";
import { setCookie, parseCookies } from "nookies";
import "@/http"
const ContextProvider = createContext({})


export const LayoutContext = ({ children }) => {
    const [isBookSidebarOpen, setIsBookSidebarOpen] = useState(false)
    const [defaultLang, setDefaultLang] = useState("en")
    const [languageModal, setLangugageModal] = useState(false)
    const [offerId,setOfferId] = useState(null)
    const openBookSidebar = () => setIsBookSidebarOpen(true)
    const closeBookSidebar = () =>{ setIsBookSidebarOpen(false)
        setOfferId(null)
    }

    useEffect(() => {
        const cookie = parseCookies()
        if (cookie.lang) {
            setDefaultLang(cookie.lang)
        }
        else {
            setLangugageModal(true)
        }
    }, [])





    useEffect(() => {
        const cookie = parseCookies()
        if (!cookie.lang) {
            setCookie(null, 'lang', defaultLang, {
                path: "/",
                maxAge: 365 * 24 * 60 * 60
            })
        }

    }, [defaultLang])



    return <ContextProvider.Provider value={{ isBookSidebarOpen, openBookSidebar, closeBookSidebar, defaultLang, setDefaultLang, languageModal, setLangugageModal,setOfferId,offerId }} > {children} </ContextProvider.Provider>
}


const useLayoutContext = () => useContext(ContextProvider)
export default useLayoutContext