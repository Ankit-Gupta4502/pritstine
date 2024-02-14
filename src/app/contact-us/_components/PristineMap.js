"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/UI/Button";
import useLayoutContext from "@/context/LayoutContext";

const PristineMap = () => {
 
  const {defaultLang} = useLayoutContext()

  const [showMap, setShowMap] = useState(false);

  const handleSetRoute = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const officeLatitude = 41.57089;
          const officeLongitude = -90.63012;

          window.open(
            `https://www.google.com/maps/dir/${latitude},${longitude}/${officeLatitude},${officeLongitude}`
          );
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  return (
    <>
      <div className="relative z-10">
        <Image
          src="/assets/images/map mesh.svg"
          alt="map mesh"
          className="md:w-full md:h-[100%] h-[100%] absolute md:top-0 top-[-0px] md:bottom-0 bottom-[-400px]"
          width={1000}
          height={500}
        />

        <div className="container relative z-20 md:mt-24 mt-5 md:mb-20 mb-5"> 
          <div className={`max-w-[510px] xl:pl-28 md:mb-10 pl-0 mb-5 ${defaultLang==="en"?"text-start":"text-end md:max-w-[700px] lg:max-w-[900px] xl:max-w-[100%]  xl:pr-28 pr-0"}`}>
            <h1 className="xl:text-[56px] md:text-[48px] text-[36px] text-secondary font-[700]">
             
              {defaultLang==="en"?"We are based":"نحن مقرون"}
            </h1>
            <span className={`xl:text-[56px] xl:ms-auto md:ms-[160px]  ms-[130px] block md:text-[48px] text-[36px] text-primary font-[700] xl:pl-28 pl-0 ${defaultLang==="en"?"text-start  w-max":" md:me-[160px]  me-[130px]  md:w-auto"}`}>
              
              {defaultLang==="en"?"in Dubai":"في دبي"}
            </span>
          </div>
          <div className="flex justify-center items-center relative">
            <Image
              src="/assets/images/Basemap.png"
              alt="base map"
              className="xl:w-[480px] xl:h-[450px] md:w-[450px] md:h-[300px]  object-cover"
              width={300}
              height={400}
            />
            <Button
              className="absolute xl:bottom-14 md:bottom-10 bottom-5 xl:right-[25%] md:right-[15%] right-[0%]"
              onClick={handleSetRoute}
            >
             
              {defaultLang==="en"?" SET ROUTE":"تحديد المسار"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PristineMap;
