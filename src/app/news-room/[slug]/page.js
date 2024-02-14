
import React from "react";
import Image from "next/image";
import FeaturedArticles from "@/components/Shared/FeaturedArticles";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { cookies } from "next/headers"
import axios from "axios";
import { format } from "date-fns"
import Link from "@/components/Shared/Link";
const getNewsDetail = async (slug) => {
  const lang = cookies().get("lang")?.value || "en"
  try {
    const { data } = await axios("https://pristine.amazonpro.in/api/news_detail", {
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

const getRelatedArticles = async (slug) => {
  const lang = cookies().get("lang")?.value || "en"
  try {
    const { data } = await axios("https://pristine.amazonpro.in/api/related_news", {
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
  const defaultLang = cookies().get("lang")?.value || "en"
  const { data = {} } = await getNewsDetail(params.slug)
  const { data: relatedArticles = [] } = await getRelatedArticles(params.slug)


  const isSlugTrue = (slug) => {
    if (typeof parseInt(slug) === "number" && parseInt(slug) > 0) {
      return true
    }
    if (isNaN(slug)) {
      return true
    }
    else false
  }
  const filteredArticles = () => {
    return (Array.isArray(relatedArticles) ? relatedArticles : []).filter((it) => it.slug !== params.slug).map((item) => ({ title: item.title, desc: item.news_content, id: item._id, href: `/news-room/${item.slug}` }))
  }
  return (
    <>
      <div className="container">
        <div className={`flex justify-between items-center mt-8 md:mb-24 mb-6 cursor-pointer ${defaultLang === "en" ? "flex" : "flex-row-reverse"}`}>

          {isSlugTrue(data?.previous_slug) && <Link href={`/news-room/${data?.previous_slug}`} className={`flex items-center text-[#7F7F7F] text-[16px] hover:text-secondary`}>

            <BsArrowLeftShort size={20} />



            {defaultLang === "en" ? "Back" : "التالي"}
          </Link>}

          {isSlugTrue(data?.next_slug) &&
            <Link href={``} className={`flex items-center text-[#7F7F7F] text-[16px] hover:text-secondary`}>

              {defaultLang === "en" ? "Next" : "خلف"}

              <BsArrowRightShort size={20} />
            </Link>}

        </div>
        <h1 className="xl:text-[56px] md:text-[48px] text-[36px] text-secondary font-[700] mb-[60px] md:leading-[60px] leading-[40px] highlight-text " dangerouslySetInnerHTML={{ __html: data?.title || "" }} />


        <div className="w-full md:w-[60%] md:ms-auto ms-0  flex gap-[100px] md:gap-[260px] xl:gap-[300px] md:px-0 xl:px-10 mb-10">
          <div className="">
            <p className="hover:text-secondary">DATE</p>

            {data?.date && format(new Date(data.date), "dd LLLL yy")}
          </div>
          <div className="">
            <p className="hover:text-secondary">READING TIME</p>{data?.time}
          </div>
        </div>

        <div className="xl:mt-20 md:mt-[60px] mt-10 md:mb-[35px] mb-5">
          <Image
            src={data.image?.image ? `/basepath/${data.image?.image}` : "/assets/images/newsbanner.png"}
            alt="news banner"
            className="w-full md:h-[450px] object-cover"
            width={500}
            height={500}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: data?.news_content || "" }} />
      </div>
      <div className="border border-[#DCDCDC] mt-[60px] mb-[60px]"></div>
      <div className="mt-[-80px]">
        <FeaturedArticles
          blogs={filteredArticles()}
          sectionTitle={defaultLang === "en" ? "Related Articles" : "مقالات مميزة"}
          desc={defaultLang === "en" ? "We occasionally create interesting articles that you will undoubtedly like!" : "نقوم أحيانًا بإنشاء مقالات مثيرة للاهتمام ستعجبك بلا شك!"}

        />
      </div>
    </>
  );
};
export default Page;
