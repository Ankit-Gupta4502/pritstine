import EmailNotify from "@/components/Layout/EmailNotify";
import React from "react";

const ComingSoon = () => {
  const str = [
    "O",
    "p",
    "e",
    "n",
    "i",
    "n",
    "g",
    "  ",
    "S",
    "h",
    "o",
    "r",
    "t",
    "l",
    "y"
  ]
  return (
    <div className=" relative min-h-[calc(100vh-100px)] grid  justify-center ">
      <div className=" relative z-30 pt-16" >
      <h5 className=" mb-10 font-['K2D'] italic text-center  text-white font-semibold text-3xl " >Designing Your Aesthetic & Health Clinic </h5>
      <div className="      mx-auto w-max   flex">
        {str.map((item, ind) => {
          return (
            <span
              key={ind}
              style={{ animationDelay: `${0.2 * ind+.2}s` }}
              className={` font-bold relative text-white  text-7xl    animate-[waviy_2.5s_ease-in-out_infinite]     ${ ind===6?" mx-1 ":"" }`}
            >
              {item}
            </span>
          );
        })}
      </div>
      </div>

      <h5 className="  relative z-20 italic mt-32 whit font-['K2D'] text-center  text-white font-semibold text-2xl" >Stay Tuned</h5>
      <EmailNotify/>

      <video className=" absolute inset-0 object-cover" src="/assets/coming_soon.mp4" loop muted autoPlay preload="true"></video>
    </div>
  );
};

export default ComingSoon;

