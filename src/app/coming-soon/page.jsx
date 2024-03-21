import EmailNotify from "@/components/Layout/EmailNotify";
import React from "react";

const ComingSoon = () => {
  
  return (
    <div className=" relative min-h-[calc(100vh-80px)]">
      <span className="text-2xl top-[calc(50vh+80px)] z-30 text-white absolute left-10 font-semibold block ">
        Stay tuned
      </span>
      <EmailNotify/>
      <video className=" absolute w-full h-full inset-0 object-cover" src="/assets/coming_soon.mp4" loop muted autoPlay preload="true"></video>
    </div>
  );
};

export default ComingSoon;

