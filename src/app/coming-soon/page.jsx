import EmailNotify from "@/components/Layout/EmailNotify";
import React from "react";

const ComingSoon = () => {
  const str = [
    "c",
    "o",
    "m",
    "i",
    "n",
    "g",
    "  ",
    "s",
    "o",
    "o",
    "n"
  ]
  return (
    <div className=" min-h-[calc(100vh-100px)] grid place-items-center ">
      <div>
      <h5 className=" mb-10 font-['K2D'] text-center  text-secondary font-semibold text-2xl" >Our New Wesbite is </h5>
      <div className="   mx-auto w-max  [-webkit-box-reflect:below_-20px_linear-gradient(transparent,_rgba(202,144,80,.5))] flex">
        {str.map((item, ind) => {
          return (
            <span
              key={ind}
              style={{ animationDelay: `${0.2 * ind}s` }}
              className={` relative text-primary  text-7xl    animate-[waviy_2.5s_ease-in-out_infinite]     ${ ind===6?" mx-1 ":"" }`}
            >
              {item}
            </span>
          );
        })}
      </div>
      <h5 className=" mt-10 whit font-['K2D'] text-center  text-secondary font-semibold text-2xl" >Stay Tuned</h5>
      </div>
      <EmailNotify/>
    </div>
  );
};

export default ComingSoon;
