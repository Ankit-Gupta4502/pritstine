import React from "react";
import Image from "next/image";
import statImg1 from "@/app/treatments/[category]/_lib/choose1.png";
import statImg from "@/app/treatments/[category]/_lib/choose2.png";

const CleaningTreatment = ({desc="",bulletPoints=[],subtitle="",title="",img=1,img2=''}) => {
  const ListItem = ({ text }) => {
    return (
      <li
        className={`relative before:block before:content-[''] before:w-2 before:h-2 before:bg-primary before:rounded-full before:absolute before:-left-4 before:top-2`}
      >
        {text}
      </li>
    );
  };
  return (
    <>
      <div className="container xl:pb-[50px]">
        <div className="flex max-w-[1356px] ms-auto md:flex-row flex-col justify-between  mt-[100px]  mb-14   items-start ">
          <div className="flex items-center justify-center min-h-full">
            <div className="flex-1 xl:max-w-[700px] lg:max-w-[366px] md:max-w-[400px]">
              <h4 className="text-primary xl:text-[48px]  text-[36px] leading-[43px]  font-normal xl:leading-[52px] ">
                {title}
              </h4>
              <div className=" mt-5">
                <p className=" text-[18px]  mt-3 ">
                 {subtitle}
                </p>
              </div>
              <div className=" max-w-[650px] " >
                <ul className='text-[16px] text-[#071F34] font-normal leading-[22.4px] font-["Nunito_Sans"] list-none pl-4 space-y-2 my-7'>
                  {
                    bulletPoints.map((item,index)=>{
                      return <ListItem key={index*5} text={item} />
                    })
                  }
                  
               
                </ul>
              </div>
              <div className="lg:max-w-[528px] md:max-w-[350px]">
                <p className="text-[18px] ">
                 {desc}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:mt-0 mt-10  md:w-[45%] relative w-full px-5 md:px-0">
            <Image
              src={img}
              alt="why choose"
              width={605}
              height={510}
              className="xl:max-w-[505px] ms-auto xl:h-[410px] md:max-w-[300px] md:h-[340px] md:mt-0 w-full max-w-[350px] h-[255px] md:px-0 pl-10 mt-10 object-cover"
            />
            <Image
              src={img2}
              alt="why choose"
              className="absolute object-cover xl:w-[420px] xl:h-[290px] md:w-[250px] md:h-[203px]  w-[248px]  h-[153px] top-[70%] lg:left-[-10%] sm:left-[20%] md:left-[-5%] xl:top-[70%] md:top-[70%]  rounded-[3px]"
              width={340}
              height={210}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CleaningTreatment;
