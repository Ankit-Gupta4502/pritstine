"use client";
import React, { useState } from "react";
import useLayoutContext from "@/context/LayoutContext";

const Techniques = ({ cards }) => {
  const { defaultLang } = useLayoutContext()
  const [hoverIndex, setHoverIndex] = useState(1);

  if (!cards) {
    return null
  }
  return (
    <>
      <div className="my-20 container xl:px-[5rem] md:px-[3rem]">
        <div className="text-center">
          {" "}
          <h2 className="font-[48px] leading-[52px] font-[K2D] text-[#CA9050] mb-5">

            {cards?.heading}


          </h2>
        </div>
        <div className="flex justify-between flex-col xl:flex-row md:flex-row">
          <div className=" md:w-2/4 xl:mr-4 mr-0 md:mr-5">
            <div
              onMouseOver={() => setHoverIndex(1)}
              className={`border rounded-xl border-slate-200 py-[20px] px-[10px] xl:py-[30px] xl:px-[40px]   transition-all  duration-300 transform ${hoverIndex === 1 ? "border-b-[8px]  border-b-[#CA9050] shadow-xl" : ""}    mt-5 `}
            >
              <h3 className="text-[24px] capitalize font-[600] leading-[26px] font-[K2D] text-[#071F34] mb-5">
                {" "}
                {cards?.title1}
              </h3>
              <p className="text-[16px] font-[400] leading-[26px] font-[sofia Pro] text-[#7F7F7F]">
                {cards?.description1}
              </p>
            </div>

            <div
              onMouseOver={() => setHoverIndex(2)}
              className={`border rounded-xl border-slate-200 py-[20px] px-[10px] xl:py-[30px] xl:px-[40px]   transition-all  duration-300 transform ${hoverIndex === 2 ? "border-b-[8px]  border-b-[#CA9050] shadow-xl" : ""}    mt-5 `}
            >
              <h3 className="text-[24px] capitalize font-[600] leading-[26px] font-[K2D] text-[#071F34] mb-5">
                {" "}
                {cards?.title2}
              </h3>
              <p className="text-[16px] font-[400] leading-[26px] font-[sofia Pro] text-[#7F7F7F]">
                {cards?.description2}
              </p>
            </div>
          </div>


          <div className="md:w-2/4  xl:ml-4 md:ml-5 ml-0 mt-[2rem]">
            <div
              onMouseOver={() => setHoverIndex(3)}
              className={`border rounded-xl border-slate-200 py-[20px] px-[10px] xl:py-[30px] xl:px-[40px] transition-all duration-300 transform ${hoverIndex === 3 ? "border-b-[8px]  border-b-[#CA9050] shadow-xl" : ""}    mt-5 `}
            >
              <h3 className="text-[24px] capitalize font-[600] leading-[26px] font-[K2D] text-[#071F34] mb-5">
                {" "}
                {cards?.title3}
              </h3>
              <p className="text-[16px] font-[400] leading-[26px] font-[sofia Pro] text-[#7F7F7F]">
              {cards?.description3}
              </p>
            </div>

            <div
              onMouseOver={() => setHoverIndex(4)}
              className={`border rounded-xl border-slate-200 py-[20px] px-[10px] xl:py-[30px] xl:px-[40px]   transition-all  duration-300 transform ${hoverIndex === 4 ? "border-b-[8px]  border-b-[#CA9050] shadow-xl" : ""}    mt-5 `}
            >
              <h3 className="text-[24px] capitalize font-[600] leading-[26px] font-[K2D] text-[#071F34] mb-5">
                {" "}
                {cards?.title4}
              </h3>
              <p className="text-[16px] font-[400] leading-[26px] font-[sofia Pro] text-[#7F7F7F]">
              {cards?.description4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Techniques;
