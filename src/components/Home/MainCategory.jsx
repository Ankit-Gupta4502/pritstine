import { cookies } from "next/headers"
import React from 'react'
import CategoryCard from '../Shared/CategoryCard'
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';
import bgMesh from "./images/bg_mesh_category.png";
import ConditionalTitle from './MainCategory/ConditionalTitle';
import axios from 'axios';
import Link from "../Shared/Link";
const getCategories = async () => {
    const cookie = cookies()
    try {
        const currLang = cookie.get("lang")?.value || "en"
        const { data = [] } = await axios("https://pristine.amazonpro.in/api/treatment_list", {
            params: {
                lang: currLang
            }
        })
        return data
    } catch (error) {
        console.log(error);
        return error
    }

}
const MainCategory = async () => {
    const categories = await getCategories()
    const currLang = cookies().get("lang")?.value || "en"
    return (
        <div className="     bg-no-repeat bg-cover py-[100px]   bg-[url('/assets/images/category_bg.png')]" >
            <div className="container">
                <ConditionalTitle />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]' >
                    {
                        categories?.data?.map((item) => {
                            return <CategoryCard
                                key={item._id}
                                borderOnHover
                                categoryName={"Treatment"}
                                href={`/treatments/${item.slug}`}
                                desc={currLang === "en" ? "We specialize in helping patients with dental hygiene and making their smiles look great" : `نحن متخصصون في مساعدة المرضى فيما يتعلق بصحة الأسنان وجعل ابتساماتهم تبدو رائعة
                                `}
                                cardBodyClassName="space-y-6 bottom-[-33%] "
                                title={item?.treatment_name}
                                containerClass='xl:h-[460px]  rounded-[3px] h-[320px]' img={item?.banner?.image ? `/basepath/${item?.banner?.image}` : '/assets/images/category_5.png'}

                            />
                        })
                    }


                    <div style={{ direction: currLang === "en" ? "ltr" : "rtl" }} className="bg-primary md:pb-[40px] pt-[22px] pb-[26px] flex px-10 md:pt-[45px] lg:h-[400px] xl:h-[460px]  md:h-[294px] h-[320px]   rounded-[3px] flex-col justify-between relative  overflow-hidden">
                        <div>
                            <h5 className=' mb-2  text-[34px] text-white font-medium ' >THE</h5>
                            <span className='relative   xl:leading-[72px] xl:text-[66px] leading-[42px] text-[42px] text-white font-[k2d]  '>
                                SMILE OF
                                <br />
                                YOUR
                                <br />
                                DREAMS
                                <span className={`absolute bottom-[-50px]  ${currLang === "en" ? "-right-[88px]" : "-left-[88px]"} `} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="125" height="59" viewBox="0 0 125 59" fill="none">
                                        <path d="M0 7.5H31" stroke="white" strokeWidth="14" />
                                        <path d="M93.5 7H124.5" stroke="white" strokeWidth="14" />
                                        <path d="M16 11.5C19 24.8333 34 52.7 64 51.5C81.5 51.5 100.7 42.7 111.5 11.5" stroke="white" strokeWidth="14" />
                                    </svg>
                                </span>
                            </span>
                        </div>
                        <div className="flex  items-center justify-between ">
                            <div className="flex items-center">

                                <div className="flex">
                                    <Image alt="avatar" className=' relative z-20 ' src="/assets/images/avatar_1.png" width={40} height={40} />

                                    <Image alt="avatar" className={` relative z-10   ${currLang === "en" ? "-translate-x-3" : "translate-x-3"}`} src="/assets/images/avatar_2.png" width={40} height={40} />

                                    <Image alt="avatar" className={` relative z-0   ${currLang === "en" ? "-translate-x-6" : "translate-x-6"}`} src="/assets/images/avatar_1.png" width={40} height={40} />
                                </div>
                                <span className='font-[k2d] leading-[14px] text-white ' >

                                    CONTACT
                                    <br />
                                    OUR
                                    <br />
                                    EXPERTS
                                </span>
                            </div>
                            <Link href="/about-us" className="bg-white text-secondary w-[36px] rounded-full grid place-items-center  h-[36px] hover:scale-[1.15] origin-bottom-right duration-100 ">
                                <IoIosArrowRoundForward size={20} />
                            </Link>
                        </div>
                        <Image src={bgMesh} alt='' className=' absolute   -top-60  -right-64 ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCategory