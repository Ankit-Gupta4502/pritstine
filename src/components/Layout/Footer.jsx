"use client";
import Image from "next/image";
import Link from "../Shared/Link";
import React from "react";
import { LuTwitter } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { LuInstagram } from "react-icons/lu";
import useLayoutContext from "@/context/LayoutContext";
import { usePathname } from "next/navigation";
const Footer = () => {
  const { defaultLang } = useLayoutContext();
  const path = usePathname();
  if (path.includes("/coming-soon") || path === "/") {
    return null;
  }
  return (
    <>
      <div
        className={`name bg-secondary pb-5 pt-10 max-w-[1512px] mx-auto w-full ${
          defaultLang === "en" ? "mx-auto" : "md:px-20 px-5"
        }
      `}
        style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}
      >
        <div className="lg:pl-10 md:pl-5 space-x-5 lg:space-x-0">
          <h2 className="text-white text-[32px] text-[400] leading-[35.2px] mx-5 lg:mx-0">
            {defaultLang === "en"
              ? "Let’s get healthier & happier together"
              : "دعونا نحصل على صحة جيدة معا"}
          </h2>
          <div className="mt-5">
            <span className="text-[#7F7F7F]">
              {defaultLang === "en"
                ? "Looking for experienced doctors? We’d love to help you."
                : "هل تبحث عن أطباء ذوي خبرة؟ نحن نحب أن نساعدك."}
            </span>
          </div>
          <div className="buttons mt-5">
            <Link href="/contact-us">
              <button className="bg-[#FFF] hover:bg-[#CA9050] transition-all duration-200 rounded px-7 py-2 hover:text-[#FFF]">
                <span className="text-[16px] font-[400] leading-[22.4px]">
                  {defaultLang === "en" ? "Contact Us" : "اتصل بنا"}
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Links Sections */}
        <div className="flex flex-col md:flex-row items-center md:pl-10 justify-start mx-5 md:mx-0 md:pr-5 lg:mx-0">
          <div className="logo md:w-1/3  md:mt-40 md:mb-5 w-full mt-10">
            <Image
              alt="logo"
              src="/assets/images/logo.svg"
              width={196}
              height={62}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 md:my-8 md:w-2/3">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-row md:flex-row md:w-2/3 md:my-0 my-12">
                <div className="md:w-1/2 md:flex-shrink-0 w-1/2">
                  <div>
                    <span className="text-[#CA9050] text-[24px] font-[400] leading-[26.4px] inline">
                      {defaultLang === "en" ? "Go to" : "اذهب إلى"}
                    </span>
                    <ul className="mt-5">
                      <li className="transition-transform w-max transform hover:translate-x-2 group">
                        <Link href="/">
                          <p className="text-[#FFF] inline group-hover:text-[#CA9050]">
                            {defaultLang === "en" ? "Home" : "بيت"}
                          </p>
                        </Link>
                      </li>
                      <li className="mt-5 w-max transition-transform transform hover:translate-x-2 group">
                        <Link href="/treatments/pristine-medical-is-the-premier-dental-clinic-in-dubai">
                          <p className="text-[#FFF] inline group-hover:text-[#CA9050]">
                            {defaultLang === "en" ? "Treatments" : "العلاجات"}
                          </p>
                        </Link>
                      </li>
                      <li className="mt-5 w-max transition-transform transform hover:translate-x-2 group">
                        <Link href="/treatments/pristine-medical-is-the-premier-dental-clinic-in-dubai/preserve-your-natural-tooth">
                          <p className="text-[#FFF] inline group-hover:text-[#CA9050]">
                            {defaultLang === "en" ? "Services" : "خدمات"}
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2 md:flex-shrink-0 w-1/2">
                  <div>
                    <span className="text-[#CA9050] text-[24px] font-[400] leading-[26.4px] inline">
                      {defaultLang === "en" ? "Find us" : "تجدنا"}
                    </span>
                    <p className="text-[#FFF] md:w-2/3 mt-5 w-full">
                      {defaultLang === "en"
                        ? "1210 w 49th Street Suite 200 Bur Dubai"
                        : "1210ث شارع 49 جناح 200 بر دبي"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 flex-shrink-0">
                <div>
                  <Link href="/contact-us">
                    <span className="text-[#CA9050] text-[24px] font-[400] leading-[26.4px] inline ">
                      {defaultLang === "en" ? "Contact Us" : "اتصل بنا"}
                    </span>
                  </Link>
                  <div
                    className={`flex items-center mt-5 ${
                      defaultLang === "en"
                        ? "flex"
                        : "flex-row-reverse items-center w-max"
                    }`}
                  >
                    <Image
                      src="/assets/images/footer/email-icon.svg"
                      width={20}
                      height={16}
                      alt="Email icon"
                    />
                    <Link href="mailto:pristinemedicalcenter@.com">
                      {" "}
                      <p
                        className={`text-[#FFF]  inline ${
                          defaultLang === "en"
                            ? "ms-3 pl-0"
                            : "md:pl-5 pl-2 ms-0 "
                        }`}
                      >
                        {defaultLang === "en"
                          ? "pristinemedicalcenter@.com"
                          : "المركز الطبي البكر@.com"}
                      </p>
                    </Link>
                  </div>
                  <div
                    className={`flex items-center mt-5 ${
                      defaultLang === "en"
                        ? "flex"
                        : "flex-row-reverse items-center w-max "
                    }`}
                  >
                    <Image
                      src="/assets/images/footer/phone-icon.svg"
                      width={16}
                      height={16}
                      alt="Phone icon"
                    />
                    <Link href="tel:+19716728789">
                      <p
                        className={`text-[#FFF]  inline ${
                          defaultLang === "en" ? "ms-3" : " ms-0 ml-2 md:ml-5"
                        }`}
                      >
                        {defaultLang === "en"
                          ? "(971) 672-8789"
                          : "(971) 672-8789"}
                      </p>
                    </Link>
                  </div>
                  <div className={`flex space-x-4 mt-5`}>
                    <Link href="#">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#CA9050] hover:bg-[#fff] group rounded-full transition-transform transform hover:scale-90 origin-top-left">
                        <LuTwitter
                          size={24}
                          className="w-19 h-19 text-white group-hover:text-[#CA9050]"
                        />
                      </div>
                    </Link>

                    <Link href="#">
                      <div
                        className={`flex items-center justify-center w-10 h-10 bg-[#CA9050] hover:bg-[#fff] group rounded-full transition-transform transform hover:scale-90 origin-top-left ${
                          defaultLang === "en" ? "" : "mr-3"
                        }`}
                      >
                        {" "}
                        <AiOutlineYoutube
                          size={24}
                          className="w-19  h-19 text-[#fff] group-hover:text-[#CA9050]"
                        />
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#CA9050] hover:bg-[#fff] group rounded-full transition-transform transform hover:scale-90 origin-top-left">
                        {" "}
                        <FiFacebook
                          size={24}
                          className="w-19  h-19 text-[#fff] group-hover:text-[#CA9050]"
                        />
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#CA9050] hover:bg-[#fff] group rounded-full transition-transform transform hover:scale-90 origin-top-left">
                        {" "}
                        <LuInstagram
                          size={24}
                          className="w-19  h-19 text-[#fff] group-hover:text-[#CA9050]"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Sections  */}
        <hr className="mt-5 text-[#494949]" />
        <div className="flex md:flex-row flex-col justify-between items-center mt-5 ml-3">
          <div className="md:ms-8 order-2 md:order-1 md:w-auto w-full mt-3 text-left">
            <p className="text-[#FFF] text-[14px]">
              {" "}
              {defaultLang === "en"
                ? "Copyright © 2024 Pristine Medical. All Rights Reserved. Developed by Hexabells Technologies"
                : "© مركز البكر الطبي 2022️ "}
            </p>
          </div>
          <div className="order-1 md:order-2 w-full md:w-auto lg:ml-0 lg:mr-8">
            <div className="flex space-x-3 lg:space-x-4 items-center justify-left md:mx-5">
              <Link href="/privacy-policy">
                {" "}
                <p className="text-[#FFF] hover:translate-y-2 duration-150 text-[14px]">
                  {defaultLang === "en" ? "Privacy Policy" : "البنود و الظروف"}
                </p>
              </Link>
              {/* <Link href="/sitemap">
                <p className="text-[#FFF] hover:translate-y-2 duration-150 text-[14px]">
                  
                  {defaultLang==="en"?"Sitemap":"خريطة الموقع"}
                  </p>
              </Link> */}
              <Link href="/terms-and-conditions">
                <p className="text-[#FFF] hover:translate-y-2 duration-150 text-[14px]">
                  {defaultLang === "en"
                    ? "Terms & Conditions"
                    : "سياسة الخصوصية"}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
