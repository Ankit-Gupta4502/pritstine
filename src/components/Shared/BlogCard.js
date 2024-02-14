import React from "react";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import {format} from "date-fns"
import Link from "./Link";
const BlogCard = ({title="With a brilliant event, The Pristine Medical Center",date="",href="",desc="",image=""}) => {
  return (
    <>
      <div className="block group">
        <div className="h-[330px] relative overflow-hidden ">
          <Image
            src={image||"/assets/images/choose1.png"}
            className="w-full group-hover:scale-110 duration-300 object-cover"
            layout="fill"
            alt=""
          />
        </div>
        <div className="px-6 pb-[25px] rounded-bl-lg rounded-br-lg   border-[0.70px] border-solid  border-[#E0E0E0] bg-[#fff]">
          <span className="block mt-6 text-[#7F7F7F] text-[14px]"> {date && format(new Date(date),"LLLL dd, yyyy")} </span>
          <h5 dangerouslySetInnerHTML={{__html:title}} className="mt-3 group-hover:text-primary duration-300 line-clamp-2 ">
            
          </h5>
          <p className="mt-[20px] line-clamp-3" dangerouslySetInnerHTML={{__html:desc}} >
            
          </p>
          <Link href={href} className="flex  justify-end mt-[26px] cursor-pointer text-[14px] text-[#7F7F7F] group-hover:text-secondary duration-300">
            READ MORE
            <RiArrowRightSLine size={20} />
          </Link>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
