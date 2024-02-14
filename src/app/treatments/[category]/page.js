import React from 'react'
import AboutUs from './_components/AboutUs'
import FreeConsult from './_components/FreeConsult'
import Services from './_components/Services'
import WhyChooseUs from './_components/WhyChooseUs'
import SignUp from '@/components/Shared/SignUp'
import Hero from '@/components/Shared/Hero'
import axios from 'axios'
import StyledText from '@/components/Shared/StyledText'
import Image from 'next/image'
import OpenModalButton from '@/components/Shared/OpenModalButton'
import { cookies } from 'next/headers'
// Choose the best care for your unique needs

const getCategoryDetail = async (slug) => {
  const cookieList = cookies()
  try {
    const lang = cookieList.get("lang")?.value || "en"
    const { data } = await axios(`https://pristine.amazonpro.in/api/all_services`, {
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
  const { data } = await getCategoryDetail(params.category)
  const currlang = cookies().get("lang")?.value || "en"
  console.log(data, "https://pristine.amazonpro.in/api/all_services");
  const formateText = () => {
    return <StyledText>
      <h2 className="text-secondary hero-text xl:text-[3rem] leading-9 md:leading-[52px]    lg:text-[3rem] pb-5 text-[2rem] font-semibold" dangerouslySetInnerHTML={{ __html: data?.title || "" }} />
    </StyledText>
  }
  return (
    <>
      <Hero
        renderTitle={formateText}
        renderButton={() => <OpenModalButton />
        }

        desc={currlang === "en" ? "We offer dental services at a highly innovative level, with a guarantee for all treatments." : "نحن نقدم خدمات طب الأسنان بمستوى مبتكر للغاية، مع ضمان لجميع العلاجات."}
      >

        <div className='relative'>
          <img src={data?.banner?.image ? `/basepath/${data?.banner?.image}` : "/assets/images/desntist banner.png"}
            className='h-[60vh] md:min-h-[563px] min-h-[363px] w-full rounded-[24px] object-cover '
           
            alt='banner' />
          <div className="absolute  top-2/4  -translate-y-2/4  left-2/4 -translate-x-2/4  font-[700] xl:text-[56px] md:text-[40px] text-[18px] text-[#fff]">
            {data?.treatment_name}
          </div>
        </div>

      </Hero>
      <AboutUs desc={data?.content1} image={data?.content1_image?.image ? `/basepath/${data?.content1_image?.image}` : ""} title={data?.content1_title} />
      <FreeConsult subTitle={data?.content2} />
      <Services categorySlug={params.category} services={data?.service || []} />
      <WhyChooseUs
      
        img1={data?.content3_image1?.image ?
          `/basepath/${data?.content3_image1?.image}` : ""}
        img2={ `/basepath/${data?.content3_image2?.image}` }

        bulletPoints={data?.content3_bullet_Pnt ? JSON.parse(data?.content3_bullet_Pnt) : []} desc={data?.content3_intro} title={data?.content3_title} />
      <SignUp />

    </>
  )
}

export default Page