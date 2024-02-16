"use client"
import React from "react";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import { format } from "date-fns";
import Link from "@/components/Shared/Link";
const NewsCard = ({ data = [] }) => {
  const [mainCard] = data.slice(0, 1)
  const restCards = data.slice(1, data.length)
  console.log(mainCard, "mainCard");
  if (mainCard?.date) {
    console.log(format(new Date(mainCard.date), "LLLL dd, yyyy"))
  }
  return (
    <>
      <div className="container   justify-between   mt-[90px]">
        <div className="md:px-[100px] px-5 grid grid-cols-1 md:grid-cols-2 gap-10 " >

        <Link  href={`/news-room/${mainCard?.slug ? mainCard?.slug : ""}`} className="block group border-[0.70px] border-solid  border-[#E0E0E0] mb-10 xl:mb-0">
          <div className="h-[330px] relative overflow-hidden ">
            <Image
              src={mainCard?.image?.image ? `/basepath/${mainCard?.image?.image}` : "/assets/images/choose1.png"}
              className="w-full group-hover:scale-110 duration-300 object-cover"
              layout="fill"
              alt=""
            />
          </div>
          <div className="px-6 pb-[25px] rounded-bl-lg rounded-br-lg    bg-[#fff]">
            <span className="block mt-6 text-[#7F7F7F] text-[14px]">
              {
                mainCard?.date &&
                format(new Date(mainCard.date), "LLLL dd, yyyy")
              }
            </span>
            <h5 className="mt-3 group-hover:text-primary duration-300 " dangerouslySetInnerHTML={{ __html: mainCard?.title ? mainCard.title : "" }} />


            <p className="mt-[20px] line-clamp-3" dangerouslySetInnerHTML={{ __html: mainCard?.news_content ? mainCard?.news_content : "" }} />

            <div className="flex w-max ms-auto  justify-end mt-[26px] cursor-pointer text-[14px] text-[#7F7F7F] group-hover:text-secondary duration-300">
              READ MORE
              <RiArrowRightSLine size={20} />
            </div>
          </div>
        </Link>
        <div className="space-y-6">
          {
            restCards.map((item) => {
              return <Link href={`/news-room/${item?.slug ? item?.slug : ""}`} key={item._id}>
                <div className="flex cursor-pointer items-center relative group  gap-3 md:gap-5" >
                  <div className="sm:w-[230px] w-[150px] flex-shrink-0 overflow-hidden">
                    <Image
                      src={item?.image?.image ? `/basepath/${item?.image?.image}` : "/assets/images/choose1.png"}
                      alt="news group"
                      className="w-full h-[130px] group-hover:scale-110 duration-300 object-cover"
                      width={200}
                      height={200}
                    />
                  </div>
                  <h5 className="text-[20px] text-secondary font-[400] leading-[22px] group-hover:text-primary duration-300" dangerouslySetInnerHTML={{ __html: item?.title ? item.title : "" }} >

                  </h5>
                </div>
              </Link>
            })
          }


        </div>
        </div>

      </div>

    </>
  );
};
export default NewsCard;
