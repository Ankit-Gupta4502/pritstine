
import React from "react";
import BlogDetails from "./_components/BlogDetails";
import FeaturedArticles from "@/components/Shared/FeaturedArticles";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { cookies } from "next/headers";
import axios from "axios";
import { format } from "date-fns"
import Link from "@/components/Shared/Link";
const getBlogDetail = async (slug) => {
  const cookieList = cookies()
  try {
    const lang = cookieList.get("lang")?.value ||"en"
    const { data } = await axios(`https://pristine.amazonpro.in/api/post_detail`, {
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


export async function generateMetadata({ params }) {
  const  data  = await getBlogDetail(params.blog)

  const meta = {
    keywords:data?.meta_keyword?.split?.(","),
    description:data?.meta_description,
    openGraph: {
      locale: data.language==="arab"?"ar":"en",
      type: "website",
      site_name: "Pristine Medical",
      images: ["/assets/images/logo.svg"],
      title:data?.meta_title,
    },
    alternates: {
      canonical: "",
    }
  }

  return meta
}

const getRelatedBlogs = async (slug) => {
  try {
    const cookieList = cookies()
    const lang = cookieList.get("lang")?.value
    const { data } = await axios(`https://pristine.amazonpro.in/api/related_post`, {
      params: {
        lang,
        slug
      }
    })
    return data
  } catch (error) {
    console.error(error.response);
    return { data: {} }
  }
}

const Page = async ({ params }) => {
  const defaultLang = cookies().get("lang")?.value || "en"
  const data = await getBlogDetail(params.blog)
  const { data: blogsList } = await getRelatedBlogs(params.blog)
  const isSlugTrue = (slug) => {
    if (typeof parseInt(slug) === "number" && parseInt(slug) > 0) {
      return true
    }
    if (isNaN(slug)) {
      return true
    }
    else false
  }

  return (
    <>
      <div className="container">
        <div className={`flex justify-between items-center mt-8 md:mb-24 mb-0  cursor-pointer ${defaultLang === "en" ? "flex" : "flex-row-reverse"}`}>
          {isSlugTrue(data?.previous_slug) && <Link href={`/blog/${data?.previous_slug}`} className="flex items-center text-[#7F7F7F] text-[16px] hover:text-secondary">
            <BsArrowLeftShort size={20} />
            {defaultLang === "en" ? "Back" : "التالي"}
          </Link>}

          {isSlugTrue(data?.next_slug) && <Link href={`/blog/${data?.next_slug}`} className="flex items-center text-[#7F7F7F] text-[16px] hover:text-secondary">
            {defaultLang === "en" ? "Next" : "خلف"}
            <BsArrowRightShort size={20} />
          </Link>}
        </div>
        <h1 className={`w-full md:leading-[61px]
        leading-[43px] xl:w-[820px] highlight-text text-[#071F34] text-[36px] md:text-[48px] xl:text-[56px] font-[700] ${defaultLang === "en" ? "text-start" : "text-end"}`} dangerouslySetInnerHTML={{ __html: data.title || "" }} />

        <span className={`text-[#7F7F7F] text-[16px] block md:mb-20 mt-3 mb-2 hover:text-secondary ${defaultLang === "en" ? "text-start" : "text-end"}`}>
          {defaultLang === "en" ? "Featured" : "متميز"}
        </span>
        <div className="w-full md:w-[60%] md:ms-auto ms-0  flex gap-[100px] md:gap-[260px] xl:gap-[300px] md:px-0 xl:px-10 md:mb-10 mb-0">
          <div className="">
            <p className="hover:text-secondary">DATE</p>{data?.date && format(new Date(data?.date), "dd LLLL yyyy")}
          </div>
          <div className="">
            <p className="hover:text-secondary">READING TIME</p>{data?.reading_time}
          </div>
        </div>
      </div>
      <BlogDetails tag={data?.tag} postContent={data?.post_content} />
      <div className="mt-[-80px]">
        <FeaturedArticles
        href="/blog"
          blogs={(Array.isArray(blogsList)?blogsList:[]).map((item) => ({ title: item.title, desc: item.summary, id: item._id, href: `/blog/${item.slug}`,image:`/basepath/${item?.image?.image}` }))}
          sectionTitle={defaultLang === "en" ? "Related Blogs" : "مقالات مميزة"}
          desc={defaultLang === "en" ? "We occasionally create interesting articles that you will undoubtedly like!" : "نقوم أحيانًا بإنشاء مقالات مثيرة للاهتمام ستعجبك بلا شك!"}
        />
      </div>
    </>
  );
};

export default Page;
