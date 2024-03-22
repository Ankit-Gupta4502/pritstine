import EmailNotify from "@/components/Layout/EmailNotify";
import React from "react";

const ComingSoon = () => {
  return (
    <div className=" relative min-h-[calc(100vh-80px)]">
      <EmailNotify />
      <video
        playsInline
        controls={false}
        className=" absolute w-full h-full  inset-0 object-cover md:block hidden"
        loop
        muted
        autoPlay
        preload="true"
      >
        {/* desktop default */}
        <source src="/assets/Comming.mp4" type="video/mp4" media=""/>

        {/* mobile video */}
        {/* <source
          src="/assets/opening.mp4"
          type="video/mp4"
          media=""
        /> */}
      </video>
      <video
        playsInline
        controls={false}
        className=" absolute w-full h-full p-0 inset-0 object-none md:hidden block"
        loop
        muted
        autoPlay
        preload="true"
      >
        {/* desktop default */}
        {/* <source src="/assets/Comming.mp4" type="video/mp4" media="md:block hidden"/> */}

        {/* mobile video */}
        <source
          src="/assets/opening3.mp4"
          type="video/mp4"
          media=""
          width={100}
          height={100}
        />
      </video>
    </div>
  );
};

export default ComingSoon;
