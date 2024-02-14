import Button from "@/components/UI/Button";
import React from "react";
import Image from "next/image";
import backgroundmesh from "../_lib/backgroundmesh.png";
// Dentistry in Dubai

const FreeConsult = (props) => {
  return (
    <>
      <div className="w-full bg-primary h-[345px] relative z-20 mt-20">
        <div className="flex justify-center  items-center pt-20 relative z-20">
          <div>
            <h3 className=" font-normal text-white pb-5">{props.heading}</h3>
            <span className="text-white text-center block">
              Your first step towards a beautiful smile
            </span>
            <Button className="mx-auto mt-10">Book Free Consultation</Button>
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
