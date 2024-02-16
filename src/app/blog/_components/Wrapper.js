"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import BlogCard from "@/components/Shared/BlogCard";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import useLayoutContext from "@/context/LayoutContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useDebounce from "@/hooks/useDebounce";
const Wrapper = () => {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const debouncedValue = useDebounce(search)
    const { defaultLang } = useLayoutContext()
    const { data, isPending } = useQuery({
      queryKey: ["blogs", debouncedValue, page],
      queryFn: () => axios(`/api/post_list`, {
        params: {
          search: debouncedValue,
          page,
          limit: 6
        }
      }).then(({ data }) => data.data)
    })
  
  
  return (
    <div className="container max-w-[1170px] xl:px-0 mb-10">
    <SearchBar search={search} setSearch={setSearch} />
    {

      isPending ? <div
        className="block  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current mx-auto border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span
        >
      </div> :
        !!data?.data?.length ?
          <div className="grid  mx-auto xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {
              data?.data?.map((item) => {
                return <BlogCard title={item.title || ""} href={`/blog/${item?.slug}`} desc={item.summary || ""} key={item._id} image={item?.image?.image ? `/basepath/${item?.image?.image}` : ""} />
              })}


          </div> : <span className=" block  text-center " > No Blogs Found  </span>
    }

    <div className="flex justify-center space-x-10 mt-10 cursor-pointer text-[16px] text-[#7F7F7F]">
      {page > 1 && <div className="flex hover:text-secondary duration-200 items-center">
        <RiArrowLeftSLine size={20} />

        {defaultLang === "en" ? "Previous" : "التالي"}
      </div>}
      {data?.last_page > page && <div className="flex hover:text-secondary duration-200  items-center">
        {defaultLang === "en" ? "Next" : "سابق"}
        <RiArrowRightSLine size={20} />
      </div>}
    </div>
  </div>
  )
}

export default Wrapper