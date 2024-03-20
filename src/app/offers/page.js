
import React from "react";
import Image from "next/image";
import OfferCard from "./_components/OfferCard";
import { cookies } from "next/headers"
import axios from "axios";
const getOffers = async () => {
  const cookie = cookies()
  const currLang = cookie.get("lang")?.value || "en"
  try {
    const { data } = await axios(`https://pristine.dphexabells.com/api/offer`, {
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
  const cookieList = cookies()
  const currLang = cookieList.get('lang')?.value || "en"
  const { data = [] } = await getOffers()
  console.log(data, "offers");
  return (
    <>
      <div className="relative z-10">
        <Image
          src="/assets/images/mesh2.png"
          alt="background mesh"
          className="w-full h-[100%] absolute top-0 bottom-0 xl:block md:hidden hidden"
          width={500}
          height={500}
        />
        <div className="container  max-w-[1170px] xl:mb-[150px] md:mb-[120px] mb-5">
          <h1 className={`xl:text-[56px] md:text-[48px] text-[36px] text-primary font-[700] xl:mt-[150px] md:mt-[120px] mt-10 ${currLang === "en" ? "text-start" : "text-end"}`}>
            {currLang === "en" ? "Offer" : "عروض"}

          </h1>
          {!!data.length ? <div className="grid  mx-auto xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {
              data.map((item) => {
                return <OfferCard id={item._id} bulletPoints={item?.bullet_pnt ? JSON.parse(item.bullet_pnt) : []} image={item?.image?.image ? `/basepath/${item?.image?.image}` : ""} title={item.title} key={item._id} />
              })
            }
          </div>
            : <span className=" block text-center mt-5 " > No Offers Found </span>

          }
        </div>
      </div>
    </>
  );
};
export default Page;
