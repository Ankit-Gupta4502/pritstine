
import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { cookies } from "next/headers";
import Link from "@/components/Shared/Link";
const serviceImages = [
  {src: require("../_lib/teethcleaning.png").default, alt: "Teeth Cleaning" },
  {src: require("../_lib/teethcleaning.png").default, alt: "Teeth Cleaning" },
  {src: require("../_lib/teethcleaning.png").default, alt: "Teeth Cleaning" },
  { src: require("../_lib/teethcleaning.png").default, alt: "Teeth Cleaning" },
  { src: require("../_lib/teethcleaning.png").default, alt: "Teeth Cleaning" },
  { src: require("../_lib/teethcleaning.png").default, alt: "Teeth Cleaning" },
  { src: require("../_lib/teethcleaning.png").default, alt: "Teeth Cleaning" },

];


const Services = ({services=[],categorySlug}) => {
  const cookieList = cookies()
  const defaultLang = cookieList.get("lang")?.value || "en"
  return (
    <>
      <h3 className={`container mb-[60px] text-primary mt-28 ${defaultLang==="en"?"text-left":"text-right"}`}> {defaultLang==="en"?"Our Dental Services":"خدمات طب الأسنان لدينا"}</h3>
      <div className="container grid md:grid-cols-2 grid-cols-1 lg:gap-[40px] md:gap-[30px] gap-[20px]">
        {services.map((service, index) => (
          <div key={index} className="relative group overflow-hidden">
            <div className="relative xl:h-[400px] lg:h-[400px] md:h-[294px] h-[320px] xl:w-[690px] md:w-[442px] w-full">

            <Image src={`/basepath/${service?.banner?.image}`} layout="fill" alt={service?.service_name} className=" object-cover" />
            </div>
            <div className="flex -bottom-[42%]  md:bottom-[-34%] space-y-3 pb-[20px] duration-200    ease-linear  group-hover:bottom-0 items-center justify-content-center bg-gradient-to-b from-0% to-[100%]   from-transparent to-[rgba(0,0,0,.7)] flex-col absolute left-0 right-0">
              <h5 className="text-white font-medium">{service.service_name}</h5>
              <p className="text-white max-w-[285px] text-center">
              We specialize in helping patients with dental hygiene and making their smiles look great
              </p>
              <Link href={`/treatments/${categorySlug}/${service?.slug}`} className="flex space-x-4 justify-center items-center">
                <div  className="bg-white text-secondary w-[36px] rounded-full grid place-items-center h-[36px]">
                  <IoIosArrowRoundForward />
                </div>
                <p className="text-white text-sm">Treatment</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
