"use client";
import React from "react";
import useLayoutContext from "@/context/LayoutContext";
import biLang from "@/locales/Privacy-policy/Privacy-policy";

const PrivacyPolicy = () => {
  const { defaultLang } = useLayoutContext();
  return (
    <div className=" container  max-w-[1350px] space-y-12 pb-20 pt-20 md:pt-[7rem]">
      <div
        className={`flex items-start flex-col   ${
          defaultLang === "en" ? "md:flex-row" : " md:flex-row-reverse "
        } `}
      >
        <div
          className={`md:w-[20%] ${defaultLang==="en"?"":"text-right w-full"}`}
          dangerouslySetInnerHTML={{ __html: biLang[defaultLang].title }}
        ></div>

        <div className={`flex-1 mt-1 md:mt-8 lg:mt-12 xl:mt-20  ps-8 md:ps-0 max-w-[900px] ${defaultLang==="en"?"":"pr-[35px] md:pr-0"}`} >
          <p style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>
            {biLang[defaultLang]["desc1.1"]}
          </p>
          <p
            className="mt-3"
            style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}
          >
            {biLang[defaultLang]["desc1.2"]}
          </p>
        </div>
      </div>

      <div className={`flex items-start flex-col md:flex-row  ${
          defaultLang === "en" ? "md:flex-row" : " md:flex-row-reverse"
        } `}>
        <div className={`md:w-[20%] ${defaultLang==="en"?"":"text-right w-full"}`}>
          <p className={`text-[18px] text-secondary xl:ml-2 lg:ml-4 -translate-x-[8px] md:-translate-x-0 ${defaultLang==="en"?"ml-0":"xl:pr-[20px] lg:pr-[5px] md:pr-[0px]  ml-auto"}`} 
          style={{ direction: defaultLang === "en" ? "ltr" : "rtl"  }}
          >
          
            {biLang[defaultLang]["title2"]}
          </p>
        </div>
        <div className={`flex-1 mt-4 ps-8 md:ps-0 max-w-[900px] ${defaultLang==="en"?"":"pr-[35px] md:pr-0"}`}>
          <p style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>{biLang[defaultLang]["desc2"]}</p>
        </div>
      </div>

      <div className={`flex items-start flex-col md:flex-row  ${
          defaultLang === "en" ? "md:flex-row" : " md:flex-row-reverse "
        } `}>
        <div className={`md:w-[20%] ${defaultLang==="en"?"":"text-right w-full"}`}>
          <p className={`text-[18px] text-secondary xl:ml-2 lg:ml-4 -translate-x-[8px] md:-translate-x-0 ${defaultLang==="en"?"ml-0":"xl:pr-[20px] lg:pr-[5px] md:pr-[0px]  ml-auto"}`} 
          style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>
            {biLang[defaultLang]["title3"]}
          </p>
        </div>
        <div className= {`flex-1 mt-4 ps-8 md:ps-0 max-w-[900px] ${defaultLang==="en"?"":"pr-[35px] md:pr-0"}`} >
          <p style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>{biLang[defaultLang]["desc3"]} </p>
        </div>
      </div>

      <div className={`flex items-start flex-col md:flex-row  ${
          defaultLang === "en" ? "md:flex-row" : " md:flex-row-reverse"
        } `}>
        <div className={`md:w-[20%] ${defaultLang==="en"?"":"text-right w-full"}`}>
          <p className={`text-[18px] text-secondary xl:ml-2 lg:ml-4 -translate-x-[8px] md:-translate-x-0 ${defaultLang==="en"?"ml-0":"xl:pr-[20px] lg:pr-[5px] md:pr-[0px]  ml-auto"}`} 
           style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>
            {biLang[defaultLang]["title4"]}
          </p>
        </div>
        <div className={`flex-1 mt-4 ps-8 md:ps-0 max-w-[900px] ${defaultLang==="en"?"":"pr-[35px] md:pr-0"}`} >
          <p style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>{biLang[defaultLang]["desc4.1"]}</p>
          <p className="mt-3" style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>{biLang[defaultLang]["desc4.2"]}</p>
        </div>
      </div>

      <div className={`flex items-start flex-col md:flex-row  ${
          defaultLang === "en" ? "md:flex-row" : " md:flex-row-reverse "
        } `}>
        <div className={`md:w-[20%] ${defaultLang==="en"?"":"text-right w-full"}`}>
          <p className={`text-[18px] text-secondary xl:ml-2 lg:ml-4 -translate-x-[8px] md:-translate-x-0 ${defaultLang==="en"?"ml-0":"xl:pr-[20px] lg:pr-[5px] md:pr-[0px]  ml-auto"}`}  style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>
            {biLang[defaultLang]["title5"]}
          </p>
        </div>
        <div className={`flex-1 mt-4 ps-8 md:ps-0 max-w-[900px] ${defaultLang==="en"?"":"pr-[35px] md:pr-0"}`} >
          <p style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>{biLang[defaultLang]["desc5.1"]}</p>
          <p className="mt-3" style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>{biLang[defaultLang]["desc5.2"]}</p>
        </div>
      </div>

      <div className={`flex items-start flex-col   ${
          defaultLang === "en" ? "md:flex-row" : " md:flex-row-reverse "
        } `}>
        <div className={`md:w-[20%] ${defaultLang==="en"?"":"text-right w-full"}`}>
          <p className={`text-[18px] text-secondary xl:ml-2 lg:ml-4 -translate-x-[8px] md:-translate-x-0 ${defaultLang==="en"?"ml-0":"xl:pr-[20px] lg:pr-[5px] md:pr-[0px]  ml-auto"}`}  style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>
            {biLang[defaultLang]["title6"]}
          </p>
        </div>
        <div className={`flex-1 mt-4 ps-8 md:ps-0 max-w-[900px] ${defaultLang==="en"?"":"pr-[35px] md:pr-0"}`}>
          <p style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>{biLang[defaultLang]["desc6.1"]}</p>
          <p className="mt-3" style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>{biLang[defaultLang]["desc6.2"]}</p>
        </div>
      </div>

      <div className={`flex items-start flex-col md:flex-row  ${
          defaultLang === "en" ? "md:flex-row" : " md:flex-row-reverse "
        } `}>
        <div className={`md:w-[20%] ${defaultLang==="en"?"":"text-right w-full"}`}>
          <p className={`text-[18px] text-secondary xl:ml-2 lg:ml-4 -translate-x-[8px] md:-translate-x-0 ${defaultLang==="en"?"ml-0":"xl:pr-[20px] lg:pr-[5px] md:pr-[0px]   ml-auto"}`}  style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>
            {biLang[defaultLang]["title7"]}
          </p>
        </div>
        <div className= {`flex-1 mt-4 ps-8 md:ps-0 max-w-[900px] ${defaultLang==="en"?"":"pr-[35px] md:pr-0"}`}>
          <p style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>{biLang[defaultLang]["desc7"]}</p>
        </div>
      </div>

      <div className= {`flex items-start flex-col md:flex-row  ${
          defaultLang === "en" ? "md:flex-row" : " md:flex-row-reverse "
        } `}>
        <div className={`md:w-[20%] ${defaultLang==="en"?"":"text-right w-full"}`}>
          <p className={`text-[18px] text-secondary xl:ml-2 lg:ml-4 -translate-x-[8px] md:-translate-x-0 ${defaultLang==="en"?"ml-0":"xl:pr-[20px] lg:pr-[5px] md:pr-[0px]  ml-auto"}`}    style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>
            {biLang[defaultLang]["title8"]}
          </p>
        </div>
        <div className={`flex-1 mt-4 ps-8 md:ps-0 max-w-[900px] ${defaultLang==="en"?"":"pr-[35px] md:pr-0"}`}>
          <p style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}>{biLang[defaultLang]["desc8"]}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
