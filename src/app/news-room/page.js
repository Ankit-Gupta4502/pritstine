"use client";
import React, { useState } from "react";
import Image from "next/image";
import NewsUpdate from "./_components/NewsUpdate";
import NewsCard from "./_components/NewsCard";
import BlogCard from "@/components/Shared/BlogCard";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import useLayoutContext from "@/context/LayoutContext";
import useDebounce from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Page = () => {
  const { defaultLang } = useLayoutContext()
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const debouncedValue = useDebounce(search)
  const { data = [], isPending, error } = useQuery({
    queryKey: ["newsRoom", debouncedValue],
    queryFn: () => axios("/api/news", {
      params: {
        search: debouncedValue
      }
    })
      .then(({ data }) => data.data)
  })
  const { data: latestPost = [], isPending: loading } = useQuery(
    {
      queryKey: ["latestPosts", page],
      queryFn: () => axios("/api/latest_news", {
        params: {
          limit: 6,
          page
        }
      })
        .then(({ data }) => data)
    }
  )


  if (error) {
    return "something went wrong"
  }
  return (
    <>
      <div className="relative z-10">
        <Image
          src="/assets/images/mesh2.png"
          alt="background mesh"
          className="w-full h-[50%] absolute top-0 bottom-0 xl:block md:hidden hidden"
          width={500}
          height={500}
        />

        <div className="relative  z-20">
          <NewsUpdate search={search} setSearch={setSearch} />

          {
            isPending ?
              <div
                className="block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current mx-auto border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
                >
              </div>
              :

              data.length ?

                <NewsCard data={data} />
                : <span className=" block  text-center  " >
                  No Data Found
                </span>

          }
        </div>
        <div className="container   md:mt-[100px] mt-10">
          <div className="md:px-[100px] px-5" >
            <h5 className={`text-2xl text-secondary font-[400] ${defaultLang === "en" ? "text-start" : "text-end"}`}>
              {defaultLang === "en" ? "Latest Posts" : "آخر المشاركات"}
            </h5>
          </div>
          {loading ?
            <div
              className="block  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current mx-auto border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span
              >
            </div> :
            <div className="container  grid  mx-auto xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:px-[100px] px-5 gap-10 mt-16">

              {

                (Array.isArray(latestPost.data) ? latestPost.data : []).map((item) => {
                  return <BlogCard href={`/news-room/${item.slug}`} title={item.title} key={item?._id} desc={item?.news_content} image={item?.image?.image ? `/basepath/${item?.image?.image}` : ""} />
                })
              }

            </div>}
        </div>
        <div className="flex justify-center space-x-10 mt-10 cursor-pointer text-[16px] text-[#7F7F7F] mb-10">
          {page > 1 && <div onClick={() => setPage(prev => prev - 1)} className="flex hover:text-secondary duration-200 items-center">
            <RiArrowLeftSLine size={20} />
            {defaultLang === "en" ? "Previous" : "التالي"}
          </div>}
          {latestPost.last_page > page && <div onClick={() => setPage(prev => prev + 1)} className="flex hover:text-secondary duration-200  items-center">
            {defaultLang === "en" ? "Next" : "سابق"}
            <RiArrowRightSLine size={20} />
          </div>}
        </div>
      </div>
    </>
  );
};
export default Page;
