"use client";
import React from "react";
import { TfiSearch } from "react-icons/tfi";
import useLayoutContext from "@/context/LayoutContext";

const NewsUpdate = ({ search = "", setSearch = () => "" }) => {
  const { defaultLang } = useLayoutContext();

  return (
    <>
      <div className="container ">
        <div
          className={`md:mt-40 mt-10 ${defaultLang === "en" ? "text-start" : "text-end"}`}
        >
          <h1
            className={`xl:text-[56px] md:text-[48px] text-[36px] xl:font-[700] font-[600] text-secondary `}
          >
            {defaultLang === "en" ? "News &" : "أخبار &"}
          </h1>
          <span
            className={`xl:text-[56px] md:text-[48px] text-[36px] font-[700] text-primary ${defaultLang === "en" ? "pl-[103px]" : "pr-[103px] mr-0"
              }`}
          >
            {defaultLang === "en" ? "Updates" : "أخبالتحديثات"}
          </span>
        </div>
        <div className="">
          <p className={`xl:max-w-[780px] md:max-w-[520px] mb-[68px] ${defaultLang === "en" ? "ms-auto pl-0 xl:max-w-[780px] md:max-w-[520px]" : "ms-0 text-end xl:pl-[80px] md:pl-0 pl-0"}`}>
            {defaultLang === "en"
              ? "The most up-to-date information, news, and insider details from the Pristine Care team. Interested in learning more about Pristine and     what the team is currently working on? You’ve come to the right place."
              : "أحدث المعلومات والأخبار والتفاصيل الداخلية من فريق Pristine Care. هل أنت مهتم بمعرفة المزيد عن Pristine وما الذي يعمل عليه الفريق حاليًا؟ لقد جئت إلى المكان المناسب."}
          </p>
        </div>
        <div className={`md:flex md:px-[100px] px-5 justify-between items-center mb-10 hidden  ${defaultLang === "en" ? "md:flex" : "md:flex-row-reverse"}`}>
          <h5 className="text-[24px] text-secondary font-[400]">{defaultLang === "en" ? "Latest News" : "أحدث الأخبار"}</h5>
          <div className={`flex justify-between items-center py-2 px-4  border-solid border-[1px] border-[#DCDCDC] rounded-[3px] w-[390px] ${defaultLang === "en" ? "flex" : "flex flex-row-reverse justify-between items-center"}`}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={defaultLang === "en" ? "Search" : "يبحث"}
              className={`focus:outline-none  ${defaultLang === "en" ? "text-start" : "text-end"}`}
            />
            <TfiSearch />
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsUpdate;
