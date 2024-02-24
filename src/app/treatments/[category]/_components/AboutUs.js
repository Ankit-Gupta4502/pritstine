
import React from "react";
import Image from "next/image";
import clinicImage from "../_lib/aboutus.png";
import backmesh from "../_lib/backmesh.png"
import { AiOutlineArrowDown } from "react-icons/ai";
import { cookies } from "next/headers";
const AboutUs = ({title="",desc="",image=""}) => {
  const cookieList = cookies()
  const defaultLang = cookieList.get("lang")?.value

  return (
    <>
    <div className="bg-[#FBFBFB] w-full">
     
      <div className={`container max-w-[1232px]  py-10  flex justify-between flex-col items-center ${ defaultLang==="en"?"md:flex-row":"md:flex-row-reverse" }`}>
        <div className="w-full  max-w-[528px]">
          <h2 className="text-primary font-bold mb-10 w-full">
          {title}
          </h2>
          <p className="xl:text-xl text-base" >
          {desc}
          </p>
        </div>
        <div className="w-full  max-w-[528px] mt-6 md:mt-0">
            <Image
              src={image||clinicImage}
              width={600}
              height={500}
              className={`object-cover  xl:w-full md:ms-4 lg:ms-0 ${defaultLang==="en"?"md:w-full":"md:w-auto"}`}
              alt="aboutus"
            />
        </div>
      </div>
      </div>
    
      
    </>
  );
};

export default AboutUs;
