"use client"
import React from "react";
import Image from "next/image";
import useLayoutContext from "@/context/LayoutContext";
import Button from "@/components/UI/Button";


const OfferCard = ({ title = "", image = "", bulletPoints = [],id="" }) => {
  const { setOfferId, openBookSidebar } = useLayoutContext()
  return (
    <>
      <div className="block xl:mt-[80px] mt-10 space-y-6 group relative z-20 ">
        <div className="overflow-hidden">
          <Image
            src={image||"/assets/images/offer.png"}
            className="w-full h-[240px] group-hover:scale-110 duration-300 object-cover"
            alt="client"
            height={200}
            width={300}
          />
        </div>
        <h3 className="text-[32px] text-secondary font-[400] group-hover:text-primary duration-300"> {title} </h3>
        <div className="space-y-[6px] ">
          {(Array.isArray(bulletPoints)?bulletPoints:[]).map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="w-[8px] h-[8px] rounded bg-primary"></div>
              <span className="block ml-2 text-sm md:text-base leading-[22px] text-secondary font-semibold">
                {item}
              </span>
            </div>
          ))}
        </div>
        <Button onClick={() => {
          openBookSidebar()
          setOfferId(id)
        }} >
          Book Now
        </Button>
      </div>
    </>
  );
};
export default OfferCard;
