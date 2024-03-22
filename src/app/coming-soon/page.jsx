import EmailNotify from "@/components/Layout/EmailNotify";
import React from "react";

const ComingSoon = () => {
  return (
    <div className=" relative min-h-[calc(100vh-80px)]">
    
      <EmailNotify/>
      <video playsInline controls={false}  className=" absolute w-full h-full inset-0 object-cover" src="/assets/coming_soon.mp4" loop muted autoPlay preload="true"></video>
    </div>
  );
};

export default ComingSoon;

