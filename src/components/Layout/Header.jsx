"use client";
import Link from "../Shared/Link";
import React, { useEffect, useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import CategoriesNav from "./CategoriesNav";
import Sidebar from "./Sidebar";
import { LanguageModal } from "./LanguageModal";
import useLayoutContext from "@/context/LayoutContext";
import NoSSR from "@/utils/NoSSR";
import { setCookie } from "nookies";
import { usePathname, useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [langMode, setLangMode] = useState(false);
  const hoverButton = useRef(null);
  const { defaultLang, setDefaultLang } = useLayoutContext();
  const [isClicked, setIsClicked] = useState(false);
  const { refresh } = useRouter();
  const queryClient = useQueryClient();
  const path = usePathname();
  useEffect(() => {
    document.body.style.overflow =
      isActive || isSidebarOpen ? "hidden" : "visible";
  }, [isActive, isSidebarOpen]);

  const handleRefresh = (lang) => {
    axios.defaults.params = { lang };
    queryClient.invalidateQueries({
      refetchType: "all",
    });
  };

  const isHide = false

  return (
    <div className=" bg-secondary  md:bg-secondary/80 relative  ">
      <div
        className={`container  py-[9px]  flex  justify-between items-center ${
          defaultLang === "en" ? "flex" : "flex-row-reverse overflow-hidden"
        }`}
      >
        <div
          className={`absolute z-[5] w-[295px] h-full bg-secondary   top-0 bottom-0 ${
            defaultLang === "en"
              ? "-left-[10px]"
              : "md:-right-0 hidden md:block"
          }`}
        ></div>
        <div className="relative z-10">
          <Link href={isHide ? "#" : "/"}>
            <Image
              alt="logo"
              src="/assets/images/pristine_logo.svg"
              priority
              width={196}
              quality={100}
              height={62}
            />
          </Link>
        </div>

        {!isHide && (
          <div
            className={`flex items-center duration-200  ${
              defaultLang === "en"
                ? "flex space-x-12"
                : "flex-row-reverse space-x-0"
            }`}
          >
            <div className="xl:flex hidden duration-200  space-x-12 items-center">
              <Link href="/" className="text-white">
                Home
              </Link>
              <Link href="/news-room" className="text-white">
                {defaultLang === "en" ? "Newsroom" : "غرفة الأخبار"}
              </Link>
              <div
                className="flex  z-20 relative space-x-2 items-center"
                onMouseLeave={() => {
                  setIsActive(false);
                  setIsClicked(false);
                }}
                onMouseOver={() => !isClicked && setIsActive(true)}
                ref={hoverButton}
              >
                <div>
                  <span
                    role="button"
                    className="text-white  relative z-30  cursor-pointer "
                  >
                    {defaultLang === "en" ? "Treatments" : "العلاجات"}
                  </span>
                </div>
                <span
                  className={`text-white duration-300 relative z-30 ${
                    isActive ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <LuChevronDown />
                </span>
                <div className="absolute w-full h-[3.75rem] cursor-pointer  -bottom-[27px] bg-inherit z-10 " />
                <CategoriesNav
                  setIsClicked={setIsClicked}
                  setIsActive={setIsActive}
                  isActive={isActive}
                />
              </div>

              <Link href="/offers" className="text-white">
                {defaultLang === "en" ? "Offers" : "معلومات عنا"}
              </Link>

              <Link href="/about-us" className="text-white">
                {defaultLang === "en" ? "About Us" : "معلومات عنا"}
              </Link>

              <Link href="/blog" className="text-white">
                {defaultLang === "en" ? "Blog" : "مدونة"}
              </Link>
            </div>
            {/* 
          <div
            className={`hidden md:flex items-center  ${defaultLang === "en" ? "md:flex space-x-7" : "md:flex-row-reverse md:pr-10"
              }`}
          >
            <Link href="/contact-us">
              <button className={` hover:bg-white hover:text-secondary duration-200  px-8 py-[10px] text-white  border-solid border-[1px] rounded-[3px] border-white ${defaultLang === "en" ? "" : "md:ml-10"}`}>

                {defaultLang === "en" ? "Contact Us" : "اتصل بنا"}
              </button>
            </Link>
            <div>
              <NoSSR>
                {!langMode && (
                  <div
                    role="button"
                    className=" cursor-pointer py-2 px-3 space-x-2 flex items-center bg-white rounded-[20px]"
                    onClick={() => !langMode && setLangMode(true)}
                  >
                    <div className="  flex items-center   text-primary">
                      <span className=" capitalize ">{defaultLang}</span>
                      {langMode && (
                        <span className="capitalize">
                          {defaultLang === "en" ? "Arabic" : "English"}
                        </span>
                      )}
                    </div>
                    {!langMode && <FiChevronDown />}
                  </div>
                )}

                {langMode && (
                  <div className="   flex items-center bg-white rounded-[20px] overflow-hidden ">
                    <div className=" me-1 px-3  group   duration-500    overflow-hidden">
                      <span
                        role="button"
                        onClick={() => {
                          setDefaultLang("en")
                          setLangMode(false)
                          setCookie(null, 'lang', "en", {
                            path: "/",
                            maxAge: 365 * 24 * 60 * 60
                          })
                          if (defaultLang !== "en") {
                            refresh()
                            handleRefresh("en")
                          }

                        }}
                        className={`block py-2 group-hover:text-primary  duration-500 w-4 group-hover:w-full ${defaultLang === "en" ? "text-primary" : ""
                          }`}
                      >

                        {defaultLang === "en" ? "English" : "أون"}
                      </span>
                    </div>
                    <div className="  px-3 group    duration-500 ps-1 overflow-hidden  border-l border-gray">
                      <span
                        role="button"
                        onClick={() => {
                          setDefaultLang("arab")
                          setLangMode(false)
                          setCookie(null, 'lang', "arab", {
                            path: "/",
                            maxAge: 365 * 24 * 60 * 60
                          })
                          if (defaultLang !== "arab") {
                            refresh()
                            handleRefresh("arab")
                          }

                        }}
                        className={`
                    block py-2 group-hover:text-primary  duration-500 w-4 group-hover:w-full ${defaultLang === "arab" ? "text-primary" : ""
                          }
                    `}
                      >

                        {defaultLang === "en" ? "Arabic" : "عربي"}
                      </span>
                    </div>
                  </div>
                )}

                {langMode && (
                  <span className="text-[12px] bottom-[2px]  w-max absolute block mt-2 text-white">

                    {defaultLang === "en" ? "Choose Language" : ""}
                  </span>
                )}
              </NoSSR>
            </div>

            <LanguageModal />

            <div className="xl:hidden block w-[45px]"></div>
          </div> */}

            <div
              className={`absolute z-50  xl:hidden text-secondary h grid place-items-center   bg-white  w-[70px] h-full  ${
                defaultLang === "en" ? "right-0" : "left-0"
              }`}
              onClick={() => setIsSidebarOpen(true)}
            >
              <RxHamburgerMenu />
            </div>
          </div>
        )}
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default Header;
