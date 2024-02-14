"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FiChevronDown } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import useLayoutContext from '@/context/LayoutContext';
import { useQuery } from '@tanstack/react-query';

const Sidebar = ({ isSidebarOpen = true, setIsSidebarOpen = () => false }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { defaultLang } = useLayoutContext()
    const { data = [], } = useQuery({
        queryKey: ["treatments"]
    })
    console.log(data, "dataaaaa");
    return (
        <div className={`fixed  overflow-hidden  top-0 bottom-0 left-0 right-0 z-50 bg-black/40 h-full xl:hidden block bg-[url('/assets/images/sidebar_bg.png')] bg-cover bg-center ${isSidebarOpen ? " translate-y-0  " : "-translate-y-full"} space-y-8  duration-300 pt-[76px] sm:ps-24 ps-6 `}
            style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}
        >
            <Link href="/" className=' block uppercase text-white font-[K2d] font-bold  text-3xl md:text-[56px] md:leading-normal ' >

                {defaultLang === "en" ? "Home" : "بيت"}
            </Link>

            <div>
                <div className=' flex items-center space-x-4 ' >
                    <span role='button' className={`
                block uppercase  font-[K2d] font-bold  text-3xl md:text-[56px] md:leading-normal ${isOpen ? " text-primary " : "text-white"}
                `} onClick={() => setIsOpen(prev => !prev)} >

                        {defaultLang === "en" ? "TREATMENTS" : "العلاجات"}
                    </span>
                    <FiChevronDown color={isOpen ? "#CA9050" : "#fff"} size={36} />
                </div>
                {
                    isOpen && <div className={` mt-4  overflow-hidden`} >
                        {
                            data.map((item) => {
                                return <Link key={item._id} href={`/treatment/${item.slug}`} className=' block  text-[2rem]  font-[K2d] text-white '>
                                    {item.treatment_name}

                                </Link>
                            })
                        }
                    </div>}


            </div>


            <Link href="/about-us" className=' block uppercase text-white font-[K2d] font-bold  text-3xl md:text-[56px] md:leading-normal ' >

                {defaultLang === "en" ? "About us" : "معلومات عنا"}
            </Link>

            <Link href="/blogs" className=' block uppercase text-white font-[K2d] font-bold  text-3xl md:text-[56px] md:leading-normal ' >

                {defaultLang === "en" ? "Blogs" : "المدونات"}
            </Link>


            <div className={`absolute  top-[70%]  ${defaultLang === "en" ? "right-5" : "hidden"}`}>
                <span className=' text-white flex items-end ' >
                    Powered by <span className=' ms-2 font-semibold leading-[0] w-6 h-6 text-white rounded-full grid place-items-center border border-white ' >
                        c
                    </span>
                </span>

                <div className="absolute -rotate-90 -top-[110px] -right-[76px] ">
                    <div className="flex items-center text-white w-max">
                        <span className=' text-2xl font-bold  ' >
                            PRISTINE  <span className=' inline font-light ' >
                                CARE
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            <button className={`absolute  top-6 ${defaultLang === "en" ? "right-4" : "left-4"}`} onClick={() => setIsSidebarOpen(false)} >
                <IoMdClose color='#fff' size={36} />
            </button>
        </div>
    )
}

export default Sidebar