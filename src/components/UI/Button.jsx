import React from "react";
import { twMerge } from "tailwind-merge";
const Button = ({ children, className = "", iconClass = "", ...rest }) => {
  const classes = twMerge(
   
    " group overflow-hidden disabled:opacity-75 rounded-[3px] space-x-3   flex items-center px-6 py-[14px] text-white bg-secondary  ",
    className
  );
  const iconClasses = twMerge(
 
    " w-[26px] block relative text-white  overflow-hidden",
    iconClass
  );
  return (
    <button  className={classes} {...rest}>
      <div className="relative">
        <span className="block w-max absolute group-hover:top-2/4 -top-full -translate-y-[100%] group-hover:-translate-y-2/4  duration-300">
          {children}
        </span>
        <span className="block w-max  group-hover:translate-y-[150%]  duration-300  ">
          {children}
        </span>
      </div>

      <span className={iconClasses}>
        <span className=" top-2/4   -translate-y-2/4 group-hover:-translate-x-2/4 group-hover:left-2/4 -left-full -translate-x-full  duration-300  absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
          >
            <g clipPath="url(#clip0_1144_4611)">
              <path
                d="M17.5792 17.5L16.0438 16.0255L19.5501 12.5775H8V10.4452H19.5501L16.0209 6.9518L17.5563 5.5L23.6522 11.5113L17.5792 17.5Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1144_4611">
                <rect width="31.3043" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className="group-hover:translate-x-full block  duration-300 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
          >
            <g clipPath="url(#clip0_1144_4611)">
              <path
                d="M17.5792 17.5L16.0438 16.0255L19.5501 12.5775H8V10.4452H19.5501L16.0209 6.9518L17.5563 5.5L23.6522 11.5113L17.5792 17.5Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1144_4611">
                <rect width="31.3043" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </span>
    </button>
  );
};

export default Button;
