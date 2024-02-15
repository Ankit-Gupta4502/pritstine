"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { LuTwitter } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { LuInstagram } from "react-icons/lu";
import Button from "@/components/UI/Button";
import { CiCircleInfo } from "react-icons/ci";
import useLayoutContext from "@/context/LayoutContext";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
const Form = () => {
  const { defaultLang } = useLayoutContext();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: ""
  })

  const [errors, setErrors] = useState({})

  const { isPending,  mutate } = useMutation({
    mutationKey: "submitForm",
    mutationFn: () => axios.post("/api/contact_us", {
      full_name: formData.fullName,
      email: formData.email,
      phone_number: formData.phone,
      message: formData.message
    }).then(({ data }) => data),
    onSuccess: (value) => {
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        message: ""
      })
      setErrors({})
      toast.success(`Thank you. Your message has been successfully received. We'll get back to you as soon as possible.`,{
        duration:3000
      })
    },
    onError:(error)=>{
      if (error?.response?.data?.errors) {
        setErrors(error.response.data.errors)
      }
    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFocus = (name) =>{
    const prevErr = structuredClone(errors)
    delete prevErr[name]
    setErrors(prevErr)
  }



  return (
    <>
      <div
        className={`container xl:px-[120px] md:px-10 px-5 md:flex block xl:gap-32 gap-20 md:mt-40 mt-5 md:mb-40 mb-5 ${defaultLang === "en" ? "md:flex" : "flex-row-reverse"
          }`}
      >
        <div className="md:w-[55%] w-full space-y-3">
          <h5
            className={`text-[20px] text-secondary font-[400] ${defaultLang === "en" ? "text-start" : "text-end"
              }`}
          >
            {defaultLang === "en"
              ? " WE’RE OPEN TO TALK TO GOOD PEOPLE. JUST SAY HELLO AND WE’LL START A PRODUCTIVE COOPERATION"
              : "نحن منفتحون للتحدث مع الأشخاص الطيبين. فقط قُل مرحبًا وسنبدأ تعاونًا مثمرًا"}
          </h5>
          <h5
            className={`text-[20px] text-secondary font-[400] ${defaultLang === "en" ? "text-start" : "text-end"
              }`}
          >
            {defaultLang === "en"
              ? " CALL US: (971) 672-8789 (10:00 Am - 10:00 Pm)"
              : "اتصل بنا: (971) 672-8789 (10:00 صباحًا - 10:00 مساءً)"}
          </h5>
          <h5
            className={`text-[20px] text-secondary font-[400] ${defaultLang === "en" ? "text-start" : "text-end"
              }`}
          >
            {defaultLang === "en"
              ? "SAY HI: pristinemedicalcenter@.com"
              : "قل مرحبًا: pristinemedicalcenter@.com"}
          </h5>
          <h5
            className={`text-[20px] text-secondary font-[400] ${defaultLang === "en" ? "text-start" : "text-end"
              }`}
          >
            {defaultLang === "en"
              ? "FIND US : 1210 w 49th Street Suite 200 Bur Dubai"
              : "ابحث عنا: 1210 واط شارع 49، جناح 200، بر دبي"}
          </h5>
          <div className={`flex space-x-4 !mt-7 ${defaultLang==="en"?"":"justify-end"} `}>
                    <a href="#">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#CA9050] hover:bg-[#fff] group rounded-full transition-transform transform hover:scale-90 origin-top-left ">
                        <LuTwitter size={24} className="w-19 h-19 text-white group-hover:text-[#CA9050]" />
                      </div>
                    </a>

                    <a href="#">
                      <div className={`flex items-center justify-center w-10 h-10 bg-[#CA9050] hover:bg-[#fff] group rounded-full transition-transform transform hover:scale-90 origin-top-left `}>
                        {" "}
                        <AiOutlineYoutube size={24} className="w-19  h-19 text-[#fff] group-hover:text-[#CA9050]" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#CA9050] hover:bg-[#fff] group rounded-full transition-transform transform hover:scale-90 origin-top-left">
                        {" "}
                        <FiFacebook size={24} className="w-19  h-19 text-[#fff] group-hover:text-[#CA9050]" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#CA9050] hover:bg-[#fff] group rounded-full transition-transform transform hover:scale-90 origin-top-left">
                        {" "}
                        <LuInstagram size={24} className="w-19  h-19 text-[#fff] group-hover:text-[#CA9050]" />
                      </div>
                    </a>
                  </div>
        </div>
        <div className="md:w-[45%] w-full mt-10 md:mt-0 xl:md-0">
          <div className=" space-y-10">
            <div>


              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={defaultLang === "en" ? "FULL NAME" : "الاسم الكامل"}
                className="w-full border-solid border-b-[1px] border-secondary placeholder:text-secondary text-secondary text-[18px] focus:outline-none"
                required
                onFocus={()=>handleFocus("full_name")}
                style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}
              />
              {errors.full_name && <span className=" block text-rose-600 " >
                {errors.full_name}
              </span>}
            </div>

            <div>

              <input
                type="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={
                  defaultLang === "en"
                    ? "EMAIL ADDRESS"
                    : "عنوان البريد الإلكتروني"
                }
                className="w-full border-solid border-b-[1px] border-secondary placeholder:text-secondary text-secondary text-[18px] focus:outline-none"
                required
                onFocus={()=>handleFocus("email")}
                style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}
              />
              {errors.email && <span className=" block text-rose-600 " >
                {errors.email}
              </span>}
            </div>
            <div>
              <input
                type="text"
                placeholder={
                  defaultLang === "en" ? "PHONE NUMBER" : "رقم التليفون"
                }
                name="phone"
                value={formData.phone}
                onChange={(e) => !isNaN(e.target.value) && handleChange(e)}
                className="w-full border-solid border-b-[1px] border-secondary placeholder:text-secondary text-secondary text-[18px] focus:outline-none"
                required
                onFocus={()=>handleFocus("phone_number")}
                style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}
              />
              {errors.phone_number && <span className=" block text-rose-600 " >
                {errors.phone_number}
              </span>}
            </div>
            <div>


              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={defaultLang === "en" ? "MESSAGE" : "رسالة"}
                className="w-full border-solid border-b-[1px] border-secondary placeholder:text-secondary text-secondary text-[18px] focus:outline-none"
                required
                onFocus={()=>handleFocus("message")}
                style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}
              />

              {errors.message && <span className=" block text-rose-600 " >
                {errors.message}
              </span>}
            </div>
            <Button onClick={() => {
              mutate()
              setErrors({})
            }} disabled={isPending} >{defaultLang === "en" ? "SUBMIT" : "SUBMIT"}</Button>
          </div>
          <div
            className={`flex gap-2 mt-[20px] items-start ${defaultLang === "en" ? "flex" : "flex-row-reverse"
              }`}
          >
            <CiCircleInfo size={35} className="mt-[-10px]" />
            <p className="mt-[-5px]">
              {defaultLang === "en"
                ? "All the fields are required. By sending the form you agree to the Terms & Conditions and Privacy Policy."
                : "كل المجالات مطلوبة. بإرسال النموذج فإنك توافق على الشروط والأحكام وسياسة الخصوصية."}
              <span className="text-secondary"></span>{" "}
              <span className="text-secondary"></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
