
import React from "react";
import Image from "next/image";
import backgroundmesh from "../../_lib/backgroundmesh.png";
import OpenModalButton from "@/components/Shared/OpenModalButton";
import { cookies } from "next/headers";

const FreeConsult = ({ desc }) => {
  const cookiesList = cookies()
  const defaultLang = cookiesList.get("lang").value || "en"
  return (
    <>
      <div className="w-full bg-primary xl:h-[345px] relative z-20 mt-20 h-[450px] md:h-[400px]">
        <div className="flex justify-center  items-center pt-20 relative z-20">
          <div className="text-center xl:max-w-[700px] md:max-w-[670px]">
            <h3 className=" font-normal text-white pb-5">
              {defaultLang === "en" ? `World-class Dental and Healthcare Facility in Dubai` : "كيف تبدأ؟"}
            </h3>
            <span className="text-white text-center block">
              {desc}
            </span>
            <OpenModalButton
              label={` ${defaultLang === "en"
                  ? "Book Free Consultation"
                  : "احجز استشارة مجانية"
                }`}
              className="mx-auto mt-10"
            ></OpenModalButton>
          </div>
        </div>
        <Image
          src={backgroundmesh}
          className="absolute bottom-0 z-10"
          alt="backgroundmesh"
        />
      </div>
    </>
  );
};
export default FreeConsult;
