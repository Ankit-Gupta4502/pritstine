"use client"
import React, { useState } from "react";
import Image from "next/image";
import backgroundmesh from "./images/backgroundmesh.png";
import { BsArrowRightShort } from "react-icons/bs";
import useLayoutContext from '@/context/LayoutContext';
import { useMutation } from "@tanstack/react-query"
import axios from "axios";
import toast from "react-hot-toast";
const SignUp = () => {
  const { defaultLang } = useLayoutContext()
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const { mutate, isPending } = useMutation({
    mutationFn: () => axios.post("/api/newsletter", {}, {
      params: {
        email_id: email
      }
    }).then(({ data }) => data),
    onSuccess: (resp) => {
      toast.success("Signed up for newsletter")
      setEmail("")
    },
    mutationKey: ["newsletter"]
  })

  const handleValidation = () => {
    if (/^[a-zA-Z0-9.%+-][a-zA-Z0-9.%+-]{2,}@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email)) {
      setError("")
      return true
    } else {
      setError("Please enter a valid email address")
      return false
    }

  }
  return (
    <div className="bg-primary relative" >
      <div className="absolute bottom-0  z-10 left-0">
        <Image src={backgroundmesh} alt="bacgroundmesh" />
      </div>
      <div className={`container relative z-20 flex flex-col  w-full h-[358px] md:justify-between    justify-center md:items-center xl:pr-40 xl:pl-20 mt-[130px] xl:mt-0 ${defaultLang === "en" ? "md:flex-row items-start" : "md:flex-row-reverse md:justify-between"}`}>

        <div>
          <h3 className={`text-white  mb-6 ${defaultLang === "en" ? "w-[80%]" : "w-[100%]"}`}>{defaultLang === "en" ? `Subscribe to our Newsletter For Exclusive Updates.
`: "سجل للحصول على اخر اخبارنا"}</h3>
          <p className=" text-white">{defaultLang === "en" ? "Rest assured, we'll not send more than two emails per week" : "سنقوم بمشاركة رسالتين فقط في الأسبوع"}</p>
        </div>
        <div className="xl:w-full max-w-[385px]" >
          <div className={`items-center   mt-5 md:mt-0   border-b-[1px] ${error ? "border-rose-600" : "border-white"} border-solid ${defaultLang === "en" ? "flex justify-between" : "flex flex-row-reverse justify-between text-end"}`}>
            <div className="bg-primary text-white">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError("")
                }}
                placeholder={defaultLang === "en" ? "Enter your email" : "أدخل بريدك الإلكتروني"}
                className="bg-primary placeholder:text-white text-white border-none focus:outline-none xl:w-full"
                style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}
              />


            </div>

            <button disabled={isPending} onClick={() => handleValidation() && mutate()} className={`flex text-white cursor-pointer items-center`}>{defaultLang === "en" ? "SUBMIT" : "يُقدِّم"}
              <BsArrowRightShort size={20} />
            </button>

          </div>
          {error && <span className=" block text-rose-600 " >
            {error}
          </span>}
        </div>
      </div>
    </div>
  );
};
export default SignUp;
