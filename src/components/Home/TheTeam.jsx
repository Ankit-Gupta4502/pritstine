import { cookies } from 'next/headers'
import React from 'react'
import Button from '../UI/Button'
import Image from 'next/image'
import mesh from "./images/mesh.png"
import Link from '@/components/Shared/Link'

const TheTeam = ({ teams = [] }) => {
    const cookie = cookies()
    const defaultLang = cookie.get("lang")?.value || "en"
    return (
        <div className='container overflow-hidden relative  mb-36 '>
            <div className={`flex md:items-center max-w-[1092px] space-y-4 md:space-y-0 flex-col md:flex-row  justify-between ${defaultLang === "en" ? "md:flex-row" : "md:flex-row-reverse text-end md:text-start"}`}>
                <h4 className='md:text-[56px]  font-bold   text-primary '  >
                    {defaultLang === "en" ? "The Team" : "الفريق"}

                </h4>
                <p className='max-w-[460px] lg:text-lg text-base  ' >
                    {defaultLang === "en" ? " We are excellent in dental care and treatments for all patients. We take care of you and your families." : "نحن متميزون في رعاية وعلاج الأسنان لجميع المرضى. نحن نعتني بك وبعائلتك."}

                </p>
                <Link href='/about-us' >

                    <Button className={`w-max ${defaultLang === "en" ? "" : "ms-auto md:ms-0"}`}>

                        {defaultLang === "en" ? " ALL MEMBERS" : "كل الأعضاء"}
                    </Button>
                </Link>
            </div>
            <div className="grid  mt-[60px] grid-rows-[repeat(1,277px)] overflow-auto sm:overflow-hidden  md:grid-rows-none   lg:grid-cols-3  sm:grid-cols-2    grid-flow-col sm:grid-flow-row   gap-y-20 gap-x-[69px]  ">
                <Image src={mesh} width={500} height={500} className='absolute sm:block hidden  top-1/3  left-[20%] ' alt='background' />

                <Image src={mesh} width={500} height={500} className='absolute sm:block hidden -bottom-[10%]  -right-[15%]  ' alt='background' />

                {
                    teams.map((member) => {
                       
                        return <div className='relative group min-w-[253px]' key={member._id} >
                            <div className={`max-w-[274px] rounded-[3px] overflow-hidden  h-[277px] md:h-[300px] relative z-10  ${defaultLang === "en" ? "" : "ml-auto"}`} >
                                <Image src={`/basepath/${member?.image?.image}`} className='  duration-300 object-cover group-hover:scale-110 ' alt='team member' layout='fill' />
                            </div>
                            <div className={`z-20  group-hover:h-[100px] duration-300 group-hover:bg-secondary  absolute h-[90px] w-full max-w-[221px]  md:max-w-[246px]  bg-primary flex flex-col justify-center  px-5   ${defaultLang === "en" ? "right-0" : ""} bottom-2`}>
                                <span className='block text-white text-[18px] font-bold mb-[3px]' >
                                    {member?.name}
                                </span>
                                <small className='text-white text-base ' > {member?.role} </small>
                            </div>
                        </div>
                    })
                }



            </div>


        </div>
    )
}

export default TheTeam