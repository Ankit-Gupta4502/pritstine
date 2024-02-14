
import React, { memo } from 'react'
import { cookies } from "next/headers";
const Hero = ({ children, renderTitle = () => "", renderButton = () => "", desc = "" }) => {
  const defaultLang = cookies().get("lang")?.value || "en"
  return (
    <>
      <div className="bg-white   rounded-br-[22px] pb-4 pt-6 ">
        <div className="container">
          {children}
        </div>
      </div>

      <div className='overflow-hidden pb-3' >
        <div className={`flex flex-col ${defaultLang === "en" ? "md:flex-row" : "md:flex-row-reverse"}  max-w-[1512px] mx-auto bg-white relative`}>
          <div className={`
          md:w-2/4 shadow-[0_6px_15px_rgba(0,0,0,0.04)] relative z-10  after:content-[''] after:hidden xs:after:block  sm:after:hidden md:after:block  after:w-[75%]  md:after:w-[50px] h-full  after:h-[84%]  
          ${defaultLang === "en" ? "md:after:shadow-[-4px_-15px_0_#ffff] md:after:top-0 after:-right-[45px] py-2 md:after:rounded-tl-[50%]  md:rounded-br-[24px]" : 
          
          " py-5 md:after:top-[2px] md:after:shadow-[15px_-13px_0_#ffff] after:-left-[51px] md:after:rounded-tr-[50%]"}
           after:border-tr-[15px]  after:absolute    bg-white  after:rounded-tl-md   md:rounded-bl-[24px]   md:after:bg-none   xl:px-11 lg:px-8 md:px-6 px-4  

          `}>
            {renderTitle()}
          </div>
          <div className={`md:w-2/4  py-5 md:py-0 items-center lg:ps-10 ps-4  pe-7 r relative z-10 bg-transparent flex  justify-start  sm:justify-between  flex-col ${defaultLang === "en" ? "xs:flex-row" : "xs:flex-row-reverse"}`}>
            <p style={{ direction: defaultLang === "en" ? " ltr " : "rtl" }} className=' md:max-w-[420px] leading-[24px] lg:text-[20px] text-base text-[#7F7F7F] ' >
              {desc}
            </p>
            <div className='xs:ms-auto mr-auto xs:mt-0 mt-4' >
              {renderButton()}
            </div>
          </div>
          <div className="left-auto w-full    right-0 z-[1] absolute h-[calc(100%+12px)] bg-body ">
          </div>
        </div>
      </div>


    </>
  )
}

export default memo(Hero)