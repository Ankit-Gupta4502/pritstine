import React from "react";
import Image from "next/image";
import choose1 from "../_lib/choose1.png";
import choose2 from "../_lib/choose2.png";



const WhyChooseUs = ({title="",desc="",img1="",img2="",bulletPoints=[]}) => {
  return (
    <>
      <div className="container mx-auto flex-wrap flex justify-between md:mt-[9.4rem] md:mb-[14rem] mt-20  ">
        <div className=" w-full xl:w-2/4 md:w-[50%] xl:pl-10  xl:pt-20 md:pt-0">
          <h3 className="text-primary mb-5 line-clamp-3 md:text-[30px] xl:text-[48px] xl:leading-[45px] md:leading-9">{title}</h3>
          <p className="pb-10">
            {desc}
          </p>
          <div className="space-y-3 max-w-[600px] xl:space-y-3 md:space-y-2" >
            {bulletPoints.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-[8px] h-[8px] rounded bg-primary "></div>
                <span className="block ml-2 text-sm md:text-base leading-[22px] text-secondary font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className=" xl:w-[45%] md:w-[45%] relative w-full px-5 md:px-0">
          <Image src={img1||choose1} alt="why choose" width={605} height={510}
          className="xl:max-w-[605px] xl:h-[510px] md:max-w-[410px] md:h-[380px] md:mt-0 w-full max-w-[350px] h-[255px] md:px-0 pl-10 mt-10 object-cover"
          />
          <Image
            src={img2||choose2}
            alt="why choose"
            className="absolute xl:w-[500px] xl:h-[308px] w-[248px] md:w-[248px] h-[203px] md:h-[220px] top-[60%] xl:left-[-100px] md:left-[-50px] xl:top-[60%] md:top-[54%] rounded-[3px] object-cover"
            width={340} height={210}
          />
        </div>
      </div>
    </>
  );
};
export default WhyChooseUs;
