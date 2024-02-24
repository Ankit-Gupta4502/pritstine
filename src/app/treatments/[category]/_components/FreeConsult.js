"use client"
import Button from "@/components/UI/Button";
import React from "react";
import Image from "next/image";
import backgroundmesh from "../_lib/backgroundmesh.png"
import OpenModalButton from "@/components/Shared/OpenModalButton";
import useLayoutContext from '@/context/LayoutContext';

const FreeConsult = ({subTitle=""}) => {
const  {defaultLang} = useLayoutContext() 

  return( 
  <>
  <div className="w-full bg-primary h-[345px] relative z-20 mt-20">
   <div className="flex justify-center  items-center pt-20 relative z-20">
    <div>
    <h3 className=" font-normal text-white pb-5 text-center">{defaultLang==="en"?"World-class Dental and Healthcare Facility in Dubai":"الخدمات الطبية في دبي"}</h3>
    <span className="text-white text-center block">{subTitle}</span>
    <div className="flex justify-center mt-10">
    <OpenModalButton label={defaultLang==="en"?"Book Free Consultation":"احجز استشارة مجانية"}/>
    </div>
   </div>
   </div>
   <Image src={backgroundmesh}
   className="absolute bottom-0 z-10"
   alt="backgroundmesh"/>
  </div>


  </>
  )
};
export default FreeConsult;
