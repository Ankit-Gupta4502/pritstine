import EmailNotify from "@/components/Layout/EmailNotify";
import React from "react";

const ComingSoon = () => {
  return (
    <div className=" relative min-h-[calc(100vh-80px)]">
      <EmailNotify />
      <video
        playsInline
        controls={false}
        className=" absolute w-full h-full inset-0 object-cover"
        loop
        muted
        autoPlay
        preload="true"
      >
        {/* desktop default */}
        <source src="/assets/coming_soon.mp4" type="video/mp4" />

        {/* mobile video */}
        <source
          src="/assets/coming_soon.mp4"
          type="video/mp4"
          media="(max-width:833px)"
        />
      </video>
    </div>
  );
};

export default ComingSoon;
