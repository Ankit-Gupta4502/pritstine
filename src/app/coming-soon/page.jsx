"use client"
import EmailNotify from "@/components/Layout/EmailNotify";
import React, { useEffect } from "react";

const ComingSoon = () => {
  const phase = [ 'I', 'l', 'l', 'u', 'm', 'i', 'n', 'a', 't', 'e', '', 'Y', 'o', 'u', 'r', '', 'S', 'm', 'i', 'l', 'e', '', 'a', 'n', 'd', '', 'G', 'l', 'o', 'w' ]
  

  useEffect(()=>{
   const nodes =  document.querySelectorAll(".animate-text")
   console.log(nodes);
   nodes.forEach((node)=>{
    node.addEventListener("animationend",()=>{
      console.log("working");
      node.style.opacity = "1"
    })
   })
  },[])


  return (
    <div className=" relative min-h-[calc(100vh-80px)] flex justify-center flex-col  items-center ">
      <div className="relative z-30  w-full -mt-10">
        <div className="overflow-hidden w-full">
          <h1
            style={{
              WebkitTextStroke: "1px #fff",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className=" leading-loose text-4xl  py-3 text-center   mix-blend-screen  whitespace-nowrap   font-semibold md:h-40   md:text-9xl  relative z-10"
          >
            Coming Soon
          </h1>
        </div>
        <div className="  tracking-[-3px] mx-auto text-center mt-10">
          {phase.map((item, ind) => {
            return (
              <span
                key={ind}
                style={{animationDelay:`${0.1*ind+.5}s`}}
                className={` animate-text opacity-0 animate-[fade_.5s_ease-in] font-['K2D']   text-white font-semibold text-4xl  ${!item?" mx-2 ":""} `}
              >
                {" "}
                {item}{" "}
              </span>
            );
          })}
        </div>
        <h5 className=" mt-10  font-['K2D'] text-center  text-white font-semibold text-2xl">
          Stay Tuned
        </h5>
      </div>

      <video
        className="object-cover  z-10  w-full h-full absolute   "
        autoPlay
        muted
        loop
        preload="true"
      >
        <source src="/assets/coming_soon.mp4" />
      </video>
      <EmailNotify />
    </div>
  );
};

export default ComingSoon;
