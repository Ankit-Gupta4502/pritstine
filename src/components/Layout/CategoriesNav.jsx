"use client"
import React, { useState, useRef, useEffect, memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image'
import { IoIosArrowRoundForward } from "react-icons/io"
import { useQuery } from "@tanstack/react-query"
import axios from 'axios';
import useLayoutContext from '@/context/LayoutContext';
import Link from '../Shared/Link';
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from '../UI/Tooltip';
const Categories = ({ isActive = false, setIsActive = () => true,setIsClicked }) => {
  const { defaultLang } = useLayoutContext()
  const [cord, setCord] = useState({ x: 35, width: defaultLang === "en" ? 136 : 97, slug: "" })
  const [active, setActive] = useState(1)
  const swiperRef = useRef(null)
  const activeTimeout = useRef(null)
  const handleCord = (e, id, slug) => {
    
    activeTimeout.current = setTimeout(() =>{ 
      setActive(id)
      setCord({ x: e.target.offsetLeft, width: e.target.getBoundingClientRect().width, slug })
    }, 500)
  }


  const { data = [] } = useQuery({
    queryKey: ["treatments"],
    queryFn: () => axios("/api/treatment_list").then(({ data }) => data.data)
  })

  const { data: subCategories = [], isLoading } = useQuery({
    queryKey: ["servicesById", active],
    queryFn: () => axios("/api/treatment_services", {
      params: {
        id: active
      }
    }).then(({ data }) => data.data)
  })


  const { data: totalCount } = useQuery({
    queryKey: ["totalSubCategories"],
    queryFn: () => axios("/api/total_services").then(({ data }) => data.data)
  })
  useEffect(() => {
    if (data[0]?._id) {
      setActive(data[0]?._id)
      setCord(prev => ({ ...prev, slug: data[0]?.slug }))
    }
  }, [
    data,
    defaultLang
  ])

  useEffect(() => {
    const handleMouseout = (e) => {
      if (e.target.classList.contains("dialog-panel")) {
        setIsActive(false)
      }
    }
    if (isActive) {
      window.addEventListener("mousemove", handleMouseout)
    }
    return (() => {
      console.log("working on unmount");
      window.removeEventListener("mousemove", handleMouseout)
    })
  }, [isActive])
  return (
    <div className={`dialog-panel ${isActive ? "-translate-x-2/4" : "  translate-x-full  "}  fixed    z-50  w-full bg-black/40  left-2/4  !ml-0  max-w-[1512px]   top-[74px]  duration-500   ease-linear origin-left  pb-5   h-full `}>
      <div className='min-h-[500px] flex flex-col pt-9  bg-white' >

        <div className="flex  px-9 items-center duration-200 gap-[30px] relative ">


          <div style={{ left: cord.x, width: cord.width }} className="absolute border-b border-2 border-primary w-[136px] duration-500 -bottom-2   ">


          </div>
          {
            data.map((category) => {
              return <Link href={`/treatments/${category?.slug}`} key={category._id} className={`  relative !ms-0  capitalize ${active === category._id ? "text-primary" : "text-gray"}`} role='button'
                onMouseLeave={() => clearTimeout(activeTimeout.current)}
                onClick={(e) =>{ 
                  setIsClicked(true)
                  setIsActive(false)
                  setActive(category._id)
                  setCord({ x: e.target.offsetLeft, width: e.target.getBoundingClientRect().width, slug:category?.slug })
                }} 
                onMouseOver={(e) => {
                  handleCord(e, category._id, category?.slug)
                }}>
                {category?.treatment_name}

                <span className={`absolute -right-6 top-[.2rem]  duration-200 pointer-events-none    ${active === category._id ? "opacity-100" : "opacity-0"} `} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11.8764 6C11.6693 6 11.5015 6.1678 11.5015 6.3749C11.5015 6.58194 11.6693 6.7498 11.8764 6.7498H15.7099L8.11206 14.3476C7.96285 14.4968 7.96285 14.7388 8.11206 14.8881C8.26132 15.0373 8.50331 15.0373 8.65257 14.8881L16.2502 7.2904V11.1236C16.2502 11.3306 16.418 11.4985 16.6251 11.4985C16.8322 11.4985 17 11.3306 17 11.1236V6.3749C17 6.1678 16.8322 6 16.6251 6H11.8764Z" stroke="#CA9050" />
                  </svg>
                </span>
              </Link>
            })
          }
        </div>

        <div className=" flex-col flex-1  justify-between flex h-full">
          {isLoading ?

            <div
              className="block my-14 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current mx-auto border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span
              >
            </div> :
            <div className=" mt-[34px]    pb-10 px-9 relative ">
              <div ref={swiperRef} className=' transition-all duration-500 no-scrollbar overflow-x-auto flex items-center gap-8'
              >

                {
                  subCategories.map((item) => {
                    return <div className=' flex-shrink-0 basis-[220px] ' key={item._id} >
                      <Link href={`/treatments/${cord.slug}/${item.slug}`} className='py-5 group space-y-[24px]  text-center' onClick={(e) => {
                        setIsActive(false)
                        e.stopPropagation();
                      }} >
                        <div className=' overflow-hidden rounded-[3px]' >
                          <Image
                            alt='teeth'
                            src={item?.banner?.image ? `/basepath/${item?.banner?.image}` : "/assets/images/teethcleaning.png"}
                            width={300}
                            height={300}
                            className='w-full  group-hover:scale-110 duration-300  object-cover h-[220px] '
                          />
                        </div>
                        <TooltipProvider  >
                          <Tooltip>
                            <TooltipTrigger data-tooltip-place="bottom" className=''>
                              <h6 className=' capitalize text-center  leading-relaxed line-clamp-1 text-secondary  group-hover:text-primary duration-200 '>

                                {item?.service_name}
                              </h6>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white shadow-2xl capitalize" sideOffset={20} >
                              <p> {item?.service_name} </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                      </Link>
                    </div>
                  })
                }

              </div>
              <button className='md:flex hidden top-[30%] right-14 z-30 rounded-full items-center absolute justify-center w-[80px] h-[80px] bg-white/50 ' onClick={() => {
                const currentScroll = swiperRef.current.scrollLeft
                swiperRef.current.scrollTo({
                  left: currentScroll + 220,
                  behavior: "smooth",
                })
              }} >
                <IoIosArrowRoundForward size={42} color='#fff' />
              </button>
            </div>
          }

          <div className="px-9 border-t border-[#E5E5E5]   p-5  ">
            <p>

              We offer more than  <span className='text-secondary'>
                {totalCount} treatments
              </span>   and procedures.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Categories)