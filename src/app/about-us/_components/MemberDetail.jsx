import React from 'react'
import { AiOutlineClose,AiOutlineArrowLeft } from 'react-icons/ai'
import Image from 'next/image'
const MemberDetail = ({member,closeModal}) => {
    
  return (
    <>
    <div className="flex   flex-col md:flex-row md:items-center mb-6 justify-between">

         <div className="w-9 h-9 border border-[#DCDCDC] rounded-full flex items-center justify-center cursor-pointer  md:hidden  my-6  " onClick={closeModal} >
            <AiOutlineArrowLeft color='#7F7F7F' size={16} />
            </div> 
        <h4 className=' text-secondary ' >
        {member?.name}
        </h4>

            <AiOutlineClose size={24} className=' md:inline-flex hidden  cursor-pointer ' onClick={closeModal}  />
    </div>
    <Image src={member?.image?.image?`/basepath/${member?.image?.image}` :"/assets/images/team_1.png"} width={600} height={300} className=' w-full h-[264] ' alt='team member' />

    <div className="grid md:grid-cols-[170px_auto] grid-cols-1 gap-y-6  items-start mt-8">
            <div className=' space-y-2  md:space-y-8 ' >
                <div className=' flex flex-row md:flex-col md:items-start items-center '  >
                    <span className="block text-gray">
                        TITLE
                    </span>
                    <p  className=' text-sm text-secondary ml-3 md:ml-0 md:mt-1 ' >
                    { member?.qualification?.replaceAll?.('"' ,"")}
                    </p>
                </div>

                <div className=' flex flex-row md:flex-col md:items-start items-center '>
                    <span className="block text-gray">
                    EXPERIENCE
                    </span>
                    <p  className=' text-sm text-secondary  ml-3 md:ml-0 md:mt-1 ' >
                    {member.experience}+ Years
                    </p>
                </div>

                <div className=' flex flex-row md:flex-col md:items-start items-center '>
                    <span className="block text-gray">
                    FLUENT IN
                    </span>
                    <p  className=' text-sm text-secondary  ml-3 md:ml-0 md:mt-1 ' >
                    {member?.fluent?.replaceAll?.('"' ,"")}
                 
                    </p>
                </div>


             
            </div>

            <div>
                <p className=' text-[18px] text-secondary  leading-[25px]' >
               {member?.description}
                </p>
            </div>
    </div>
    </>
  )
}

export default MemberDetail