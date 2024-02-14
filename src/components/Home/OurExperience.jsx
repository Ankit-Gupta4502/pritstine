"use client"
import React from 'react'
import Image from 'next/image'
import img1 from "@/app/treatments/[category]/_lib/choose1.png"
import img2 from "@/app/treatments/[category]/_lib/choose2.png"
import Button from '../UI/Button'
import useLayoutContext from '@/context/LayoutContext'
import biLang from "@/locales/Home/OurExperience"
const OurExperience = () => {
    const { defaultLang } = useLayoutContext()
    return (
        <div className="container relative overflow-hidden">

            <div className={`
    flex max-w-[1356px] ms-auto ${defaultLang === "en" ? "md:flex-row" : "md:flex-row-reverse"} flex-col justify-between  mt-[150px] mb-36  items-center
    `} >
                <div className={`flex-1 xl:max-w-[500px] lg:max-w-[366px] ${defaultLang === "en" ? "" : "text-end"}`}>
                    <h4 className='text-primary xl:text-[56px]  text-[36px] leading-[43px]  font-bold xl:leading-[67px] relative z-10' dangerouslySetInnerHTML={{ __html: biLang[defaultLang].title }}  >


                    </h4>

                    <div className=' mt-[60px]' >

                        <h5 className=' xl:text-[20px] text-base font-["Nunito_Sans"] relative z-10' >
                            {biLang[defaultLang].subTitle}
                        </h5>

                        <p className=' text-sm  mt-3 relative z-10' >
                        {biLang[defaultLang].desc}
                        </p>
                        <Button className={`mt-6 relative z-10 ${defaultLang === "en" ? "" : "ml-auto"} `} >
                            {biLang[defaultLang].btnLabel}
                        </Button>
                    </div>
                </div>
                <div className='absolute z-5 left-0 bottom-0 object-contain'>
                    <Image src="/assets/images/bgcircle.png" alt='bgcircle'
                        className='h-[400px] w-40'
                        height={400} width={400} />
                </div>
                <div className="sm:mt-0 mt-10  md:w-[45%] relative w-full px-5 md:px-0 ">
                    <div className='absolute z-5  left-[-50%] bottom-0 object-contain'>
                        <Image src="/assets/images/bgmesh2.svg" alt='bgcircle'
                            className='h-[400px] w-[600px]'
                            height={400} width={400} />
                    </div>
                    <Image src={img1} alt="why choose" width={605} height={510}
                        className="xl:max-w-[605px] ms-auto xl:h-[509px] md:max-w-[300px] md:h-[250px] md:mt-0 w-full max-w-[350px] h-[255px] md:px-0 pl-10 mt-10 object-cover relative z-10"
                    />
                    <Image
                        src={img2}
                        alt="why choose"
                        className="absolute xl:w-[499px] md:w-[250px] xl:h-[308px] w-[248px] md:h-[180px] h-[153px] top-[70%] lg:left-[-20%] sm:left-[20%] md:left-[2%] xl:top-[60%] md:top-[54%]  rounded-[3px]  z-10"
                        width={450} height={350}
                    />
                    <div className='absolute z-5  right-[-50%] top-[40%] object-cover'>
                        <Image src="/assets/images/bgmesh3.svg" alt='bgcircle'
                            className='h-[380px] w-[1000px]'
                            height={400} width={400} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurExperience