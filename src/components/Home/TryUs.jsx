"use client"
import React from 'react'
import Image from 'next/image'
import Button from '../UI/Button'
import dentist from "@/app/treatments/[category]/_lib/aboutus.png";
import mesh from "./images/mesh.png"
import mesh2 from "./images/mesh_2.png"
import useLayoutContext from '@/context/LayoutContext';
import biLang from "@/locales/Home/TryUs"
import { buttonLang } from '@/locales/UI';
import AppointmentForm from '../Layout/AppointmentForm';
import OpenModalButton from "@/components/Shared/OpenModalButton";
const TryUs = () => {
    const { defaultLang } = useLayoutContext()
    return (
        <div className="bg-body overflow-hidden  relative  py-[86px] md:py-[150px]  ">
            <Image src={mesh} alt='background' className=' object-contain md:object-cover  h-96 md:h-auto   top-1/4 md:top-auto   -left-[300px] z-10  absolute md:bottom-1 ' />

            <div className={`container max-w-[1232px] mx-auto   flex justify-between  flex-col  items-center relative z-20 ${defaultLang === "en" ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`w-full  max-w-[528px] ${defaultLang==="en"?"text-start":"text-end"}`}>
                    <h2 className="text-primary lg:text-[56px] md:text-[42px] text-[32px] font-bold mb-10 xl:leading-[61px] md:leading-[46px]  leading-[43px] ">
                        {biLang[defaultLang].title}
                    </h2>
                    <p className=' text-xl ' >
                       {biLang[defaultLang].desc}
                    </p>

                    <OpenModalButton className={`mt-6  ${defaultLang==="en"?"":"ms-auto"} `}  />
                </div>
                <div className="w-full mt-[40px] md:mt-0   max-w-[528px]">
                    <Image
                        src={dentist}

                        className="object-cover h-[390px] md:h-auto"
                        alt="try us"

                    />

                </div>
            </div>
            <Image src={mesh2} alt='background' className=' -right-[180px] z-10 bottom-2  absolute  ' />
        </div>
    )
}

export default TryUs