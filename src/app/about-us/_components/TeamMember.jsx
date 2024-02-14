"use client"
import React from 'react'
import Image from 'next/image'
const TeamMember = ({ item, openModal, setMember }) => {
    return (
        <div className="  relative px-4 xs:px-4 sm:px-4 md:px-6 lg:px-8 xl:px-9  group duration-300 hover:bg-primary   grid  grid-cols-2  items-center   sm:grid-cols-3   cursor-pointer  py-5 " onClick={() => {
            openModal()
            setMember(item)
        }} >
            <div>
                <h6 className=" text-[16px] group-hover:text-[white] text-[#071F34a] font-[K2D] ">
                    {item?.name} 
                </h6>
            </div>

            <div className="   sm:text-center row-start-2 sm:row-start-auto    ">
                <p className="group-hover:text-[white]"> {item?.role} </p>
            </div>

            <div className=" flex-1 flex justify-end items-center">
                <p className=" group-hover:text-[white] pr-5 hidden md:block">{ item?.qualification.replaceAll('"' ,"")}</p>
                <div className=" row-start-1 row-end-3 col-start-2  sm:row-start-auto sm:row-end-auto sm:col-start-auto w-[32px] h-[32px] md:w-[24px] md:h-[24px] xl:hidden " >
                    <Image
                        alt=""
                        src={`/basepath/${item?.image?.image}`}
                        width={50}
                        height={50}
                        className="w-full h-full block ms-auto filter brightness-50 grayscale-10"
                    />

                </div>
            </div>

            <Image className=" duration-300 object-cover w-[300px] h-[400px] group-hover:scale-100 scale-0  hidden md:block   absolute left-[20%] " src={`/basepath/${item?.image?.image}`} width={250} height={400} alt="" />


        </div>
    )
}

export default TeamMember