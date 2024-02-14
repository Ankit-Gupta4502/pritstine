
import Hero from "@/components/Shared/Hero";
import StyledText from "@/components/Shared/StyledText";
import MainCategory from "@/components/Home/MainCategory";
import TryUs from "@/components/Home/TryUs";
import AnimatedText from "@/components/Home/AnimatedText";
import TheTeam from "@/components/Home/TheTeam";
import SuccessulTreatmens from "@/components/Home/SuccessfulTreatments";
import SignUp from "@/components/Shared/SignUp";
import FeaturedArticles from "@/components/Shared/FeaturedArticles";
import OurExperience from "@/components/Home/OurExperience";
import OpenModalButton from "@/components/Shared/OpenModalButton";
import { cookies } from "next/headers";
import axios from "axios";
const getTeams = async () => {
  const cookie = cookies()
  const currLang = cookie.get("lang")?.value || "en"
  try {
    const { data } = await axios(`https://pristine.amazonpro.in/api/team_list`, {
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

const getTreatments = async () => {
  const cookie = cookies()
  const currLang = cookie.get("lang")?.value || "en"
  try {
    const { data } = await axios(`https://pristine.amazonpro.in/api/review`, {
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


const getFeaturedArticles = async () => {
  const cookie = cookies()
  const currLang = cookie.get("lang")?.value || "en"
  try {
    const { data } = await axios(`https://pristine.amazonpro.in/api/featured_article`, {
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
export default async function Home() {
  const currlang = cookies().get("lang")?.value || "en"
  // const teams = await getTeams()
  // const treatments = await getTreatments()
  // const { data = [] } = await getFeaturedArticles()
  const formatText = () => {
    return (
      <StyledText>
        <h2 className={`text-secondary  xl:text-[3rem] leading-9 md:leading-[52px]    lg:text-[3rem] text-[2rem] font-semibold ${currlang === "en" ? "" : " text-right "} `}>
          {currlang === "en" ? "Transform your" : "غير ابتسامتك"}
          <span className={`${currlang === "en" ? "mx-[16px]" : "mx-[16px]"}  after:content-[""] after:absolute after:w-[90%] after:left-0 after:h-[30%] after:bg-primary after:opacity-[.4] after:bottom-2    w-max  text-primary  relative font-bold `}>
            {currlang === "en" ? "smile" : "مع"}
            <span className="absolute lg:top-3  top-2 lg:right-[-9px] -right-[15px] " >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.96223 0.00402961L11.7454 6.17374L17.9126 8.96248L11.7429 11.7457L8.95417 17.9129L6.17099 11.7432L0.00378289 8.95442L6.17349 6.17123L8.96223 0.00402961Z" fill="#CA9050" />
              </svg>
            </span>
          </span>
          {currlang === "en" ? "with Pristine" : "بريستين"}
        </h2>
      </StyledText>
    );
  };
  return (
    <>
      <Hero
        renderButton={() => <OpenModalButton />}
        renderTitle={formatText}
        desc={currlang === "en" ? "We offer dental services at a highly innovative level, with a guarantee for all treatments." : "نحن نقدم خدمات طب الأسنان بمستوى مبتكر للغاية، مع ضمان لجميع العلاجات."}
      >
        <video className="md:h-[60vh] h-[50vh] w-full object-cover md:min-h-[563px] rounded-[24px] " src="/assets/hero_video.mp4" autoPlay loop muted controls />
      </Hero>
      <TryUs />
      <MainCategory />
      <OurExperience />
      <AnimatedText />
      <TheTeam teams={ []} />
      <SuccessulTreatmens treatments={Array.isArray([]) ? [] : []} />
      <FeaturedArticles blogs={(Array.isArray([]) ? [] : []).map((item) => ({ title: item.title, desc: item.news_content, id: item._id, href: `/news-room/${item.slug}`, image: item?.image?.image ? `/basepath/${item?.image?.image}` : "" }))} sectionTitle={currlang === "en" ? "Featured Articles" : `مقالات مميزة
`} desc={currlang === "en" ? "We occasionally create interesting articles that you will undoubtedly like!" : "نقوم أحيانًا بإنشاء مقالات مثيرة للاهتمام ستعجبك بلا شك!"} />
      <SignUp />
    </>
  );
}
