"use client";
import React from "react";
import { TfiSearch } from "react-icons/tfi";
import useLayoutContext from "@/context/LayoutContext";

const SearchBar = ({ search = "", setSearch = () => "" }) => {
  const { defaultLang } = useLayoutContext()
  return (
    <>
      <div className={`items-center flex justify-between mt-40 mb-[100px] ${defaultLang === "en" ? "flex" : "flex-row-reverse"}`}>
        <h1>
          {defaultLang === "en" ? "Blogs" : "المدونات"}
        </h1>
        <div className={`md:flex items-center justify-between border-[1px] w-[390px]  border-solid border-[#DCDCDC] px-4  rounded-[3px] hidden ${defaultLang === "en" ? "md:flex" : "md:flex-row-reverse"}`}>
          <input
            type="text"
            value={search}
            style={{ direction: defaultLang === "en" ? "ltr" : "rtl" }}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={defaultLang === "en" ? "Search" : "يبحث"}
            className={`focus:outline-none py-2 ${defaultLang === "en" ? "text-start" : "text-end"}`}
          />
          <div className="cursor-pointer">
            <TfiSearch />
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
