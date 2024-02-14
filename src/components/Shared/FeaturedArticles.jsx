"use client"
import React, { useRef, useState } from 'react'
import Button from '../UI/Button'
const BlogCard = dynamic(() => import('./BlogCard'), {
    ssr: false
});
import { IoIosArrowRoundForward } from "react-icons/io"
import Link from 'next/link';
import useLayoutContext from '@/context/LayoutContext';
import dynamic from 'next/dynamic';
const FeaturedArticles = ({
    sectionTitle = "",
    desc = "",
    blogs = [],
    href="/news-room"
}) => {
    const { defaultLang } = useLayoutContext()
    const [swiper, setSwiper] = useState({})
    const slider = useRef(null)
    console.log(parseInt(swiper?.currentBreakpoint) < 768 , "swiperrrr");
    return (
        <div className='my-[150px]' >
            <div className={`container ${defaultLang === "en" ? "text-start" : "text-end"}`}>
                <h3 className='text-primary text-[36px] md:text-[56px] font-bold ' >
                    {sectionTitle}
                </h3>
                <p className='text-[18px] mt-6' >
                    {desc}
                </p>

                <Link href={href} className={` ${defaultLang === "en" ? "block" : "w-max ml-auto"}`} >
                    <Button className="mt-10">
                        {defaultLang === "en" ? "VIEW ALL" : "عرض الكل"}
                    </Button>
                </Link>

            </div>

            <div className={` relative  mt-14  overflow-x-auto ${defaultLang === "en" ? "sm:ms-[18%]" : "sm:mr-[18%]"}`}>
                {/* <Swiper slidesPerView={3} freeMode cssMode={parseInt(swiper?.currentBreakpoint) < 768 ? true : false} keyboard modules={[Navigation, Keyboard]} className="mySwiper" pagination={false} loop spaceBetween={30} autoplay={false} onBeforeInit={(swiper) => setSwiper(swiper)}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {
                        blogs.map((item) => {
                            return <SwiperSlide key={item.id}>
                                <BlogCard {...item} />
                            </SwiperSlide>
                        })
                    }




                </Swiper>
                <button className={`md:flex hidden top-[30%]  z-30 rounded-full items-center absolute justify-center w-[80px] h-[80px] bg-white/50 ${defaultLang === "en" ? "md:flex right-5" : "left-5 rotate-[180deg]"} `} onClick={() => {

                    swiper.slideNext()

                }} >
                    <IoIosArrowRoundForward size={42} />
                </button> */}


                <div ref={slider} className="flex no-scrollbar overflow-x-auto space-x-8 items-start">
                    {
                        blogs.map((item, index) => {
                            return <div className=' md:w-96 w-[360px] flex-shrink-0 ' key={item?.id} >
                                <BlogCard {...item} />
                            </div>
                        })
                    }
                </div>

                {blogs.length > 2 && <button className={`md:flex hidden top-[30%]  z-30 rounded-full items-center absolute justify-center w-[80px] h-[80px] bg-white/50 ${defaultLang === "en" ? "md:flex right-5" : "left-5 rotate-[180deg]"} `} onClick={() => {
                    slider.current?.scrollTo({
                        left:slider.current.scrollLeft += 384,
                        behavior:"smooth"
                      })
                }} >
                    <IoIosArrowRoundForward size={42} />
                </button>}
            </div>
        </div>
    )
}

export default FeaturedArticles
