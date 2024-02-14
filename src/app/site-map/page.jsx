import React from "react";
import SiteCard from "./_components/SiteCard";
import { cookies } from "next/headers";
import axios from "axios";
const getSitmaps = async () => {
  const cookie = cookies()
  const currLang = cookie.get("lang")?.value || "en"
  try {
    const { data } = await axios(`https://pristine.amazonpro.in/api/sitemapt`, {
      params: {
        lang: currLang
      }
    })
    return data
  } catch (error) {
    console.error(error);
    return { data: [] }
  }
}
const Page = async () => {
  const data  = await getSitmaps()
  console.log(data,"sitemaps");
  return (
    <>
      <h1 className="container xl:text-[56px] md:text-[48px] text-[36px] text-primary font-[600] md:mt-[110px] mt-[50px]  font-[K2D] ">Sitemap</h1>
      <div className="container">

        <div className="grid xl:px-24 md:px-24 px-0 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-2 mb-[100px] font-[K2D]">
          {Array.from({ length: 4 }, (_, index) => (
            <SiteCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
