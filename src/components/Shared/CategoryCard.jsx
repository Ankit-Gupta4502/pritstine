import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "./Link";
const CategoryCard = ({
  img = "",
  imgClass = "",
  title = "",
  cardBodyClassName = "",
  desc,
  categoryName,
  containerClass = "",
  borderOnHover = false,
  href = ""
}) => {
  const cardInfo = twMerge(
    "flex top-0 justify-end bottom-[-34%] space-y-3 pb-[20px] duration-200    ease-linear  group-hover:bottom-0 items-center   flex-col absolute left-0 right-0",
    cardBodyClassName
  );
  const containerStyle = twMerge(`relative ${borderOnHover ? "border-[1px] border-solid   hover:border-white  border-transparent " : ""} xl:h-[400px] lg:h-[400px] md:h-[294px] h-[320px]   group overflow-hidden`, containerClass)
  return (
    <div className={containerStyle}>
      <Image
        src={img}
        className={` object-cover ${imgClass}`}
        layout="fill"
        alt="pain"
      />
      <div style={{ background: `linear-gradient(180deg, rgba(10, 3, 24, 0.30) 38%, #071F34 100%)` }} className={cardInfo}>
        <h5 className="text-white font-medium">{title || ""}</h5>
        <p className="text-white max-w-[285px] text-center ">{desc}</p>
        <Link href={href} className="flex space-x-4 justify-center items-center">
          <div className="bg-white text-secondary w-[36px] rounded-full grid place-items-center  h-[36px]">
            <IoIosArrowRoundForward />
          </div>
          <p className=" text-white text-sm ">{categoryName}</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
