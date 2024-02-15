import React from "react";
import TeethCleaning from "./_components/TeethCleaning";
import ScrollText from "./_components/ScrollText";
import Hero from "@/components/Shared/Hero";
import StyledText from "@/components/Shared/StyledText";
import { MdChevronRight } from "react-icons/md";
import CleaningTreatment from "./_components/CleaningTreatment";
import FreeConsult from "./_components/FreeConsult";
import SignUp from "@/components/Shared/SignUp";
import Faq from "./_components/Faq";
import Tech from "./_components/Technique";
import OpenModalButton from "@/components/Shared/OpenModalButton";
import axios from "axios";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "@/components/Shared/Link";
const getsubCategoryDetail = async (slug) => {
  const cookiesList = cookies()
  const lang = cookiesList.get("lang").value || "en"
  try {
    const { data } = await axios(`https://pristine.amazonpro.in/api/service_details
    `, {
      params: {
        lang,
        slug
      }
    })
    return data
  } catch (error) {
    console.error(error);
    return { data: {} }
  }
}


const Page = async ({ params }) => {
  const cookiesList = cookies()
  const lang = cookiesList.get("lang").value || "en"
  const { data } = await getsubCategoryDetail(params.subcategory)
  console.log(data, "dataaaaa");
  const formatText = () => {
    return (
      <StyledText>
        <h2 className="text-secondary hero-text xl:text-[3rem] leading-9 md:leading-[52px]    lg:text-[3rem] text-[2rem] font-semibold" dangerouslySetInnerHTML={{ __html: data?.title || "" }} />
      </StyledText>
    );
  };
  return (

    <div className="bg-body">
      <Hero
        renderButton={() => <OpenModalButton label="Book Now"></OpenModalButton>}
        renderTitle={formatText}
        desc={lang === "en" ? "We specialize in helping patients with teeth cleaning and making their smile look great" : `
        نحن متخصصون في مساعدة المرضى في تنظيف الأسنان وجعل ابتسامتهم تبدو رائعة
        `}
      >
        <div className='relative'>
          <div className="bg-black/20 absolute inset-0 rounded-[24px]"></div>
          <img src={`/basepath/${data?.banner?.image}`}
            className='h-[60vh] md:min-h-[563px] min-h-[363px] w-full rounded-[24px] object-cover '
            alt='banner' />
          <div className="absolute   top-2/4  -translate-y-2/4  left-2/4 -translate-x-2/4  font-[700] xl:text-[56px] md:text-[40px] text-[24px] text-[#fff]">
            <span className="block text-center">

              {data?.service_name}
            </span>

            <div className="flex  font-normal  text-base space-x-2 items-center justify-center">
              <Link href="/">
                {lang === "en" ? "Home" : "بيت"}
              </Link>

              <span>
                <MdChevronRight size={20} />
              </span>

              <Link href={`/treatments/${params.category}`}>
                {data?.treatment?.treatment_name}
              </Link>

              <span>
                <MdChevronRight size={20} />
              </span>
              <Link href={`/treatments/${params.category}/${params.subcategory}`}>
                {data?.service_name}
              </Link>
            </div>
          </div>
        </div>
      </Hero>
      <TeethCleaning title={data?.content1_title || ""} desc={data?.content1 || ""} image={data?.content1_image?.image ? `/basepath/${data?.content1_image?.image}` : ""} />
      <ScrollText text={data?.marquee_title} />

      <CleaningTreatment
        bulletPoints={data?.content2_bullet_Pnt ? JSON.parse(data?.content2_bullet_Pnt) : []} title={data?.content2_title}
        subtitle={data?.content2_intro}
        desc={data?.content2_conclusion}
        img={data?.content2_image1?.image ? `/basepath/${data?.content2_image1?.image}` : ""} img2={data?.content2_image2?.image ? `/basepath/${data?.content2_image2?.image}` : ""}
      />

      <FreeConsult desc={data?.content3 || ""} />

      <Tech cards={data?.card} />

      <Faq defaultLang={lang} questions={Array.isArray(data?.faq) ? data.faq : []} />

      <SignUp />

    </div>

  );
};

export default Page;
