import React from "react";
import heroImg from "./_lib/images/about_hero.png";
import heroMission from "./_lib/images/heroMission.png";
import heroVission from "./_lib/images/heroVission.png";

import Image from "next/image";
import { cookies } from "next/headers";
import axios from "axios";
import TeamMember from "./_components/TeamMember";
import TeamMemberDetailWrapper from "./_components/TeamMemberDetailWrapper";
const getTeams = async () => {
  try {
    const cookie = cookies();
    const currLang = cookie.get("lang")?.value || "en"; 
    const { data } = await axios(
      `https://pristine.amazonpro.in/api/team_list`,
      {
        params: {
          lang: currLang,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
    return { data: [] };
  }
};

const AboutUs = async () => {
  const { data = [] } = await getTeams();
  const cookie = cookies();
  const currLang = cookie.get("lang")?.value || "en";
  return (
    <>
      <div className="container mx-auto md:mt-[9.4rem] md:mb-[2rem] mt-20">
        <div style={{ direction: currLang === "en" ? "ltr" : "rtl" }}>
          <div className="flex items-start flex-col md:flex-row ">
            <div className="md:w-[20%]">
              <h1 className="text-2xl xl:-translate-x-[45px] xl:text-[46px] lg:-translate-x-[42px] md:translate-x-[-25px] sm:translate-x-[5px] w-max ms-auto font-bold mb-1 -mt-16 text-[30px] lg:text-[36px] leading-normal ">
                {currLang === "en" ? " About Us" : "معلومات عنا"}
              </h1>
            </div>

            <div className="flex-1 mt-1 md:mt-8 lg:mt-12 xl:mt-0  ps-8 md:ps-0 max-w-[900px]">
              <p className="pb-8">
                {currLang === "en"
                  ? "Pristine Medical Center was established in September 2017, located  in the heart of eastern Dubai in Deira, – The Al Rigga As the year   pass, Al Rigga has become one of the most prestigious areas for  residential and commercial development. Pristine Medical Center   gained credibility and trust in a very short period of time. we have    been compared to major UAE healthcare and aesthetic companies.    Pristine Medical Center is an aspired healthcare and aesthetic   provider in Dubai. PMC is known medical center in UAE, specializing    in wide range of dentistry, dermatology, laser hair removal and  HydraFacial. Our services have created special marks in each field.   We have built an incomparably dedicated team that provides a variety   of quality care measures and exceptional medical care."
                  : "تأسس مركز بريستين الطبي في سبتمبر 2017، ويقع في قلب شرق دبي في ديرة، - الرقة. مع مرور العام، أصبحت الرقة واحدة من أرقى المناطق للتطوير السكني والتجاري. اكتسب مركز بريستين الطبي المصداقية والثقة خلال فترة زمنية قصيرة جدًا. لقد تمت مقارنتها بشركات الرعاية الصحية والتجميل الكبرى في دولة الإمارات العربية المتحدة. مركز بريستين الطبي هو مقدم الرعاية الصحية والجمالية الطموح في دبي. PMC هو مركز طبي معروف في الإمارات العربية المتحدة، وهو متخصص في مجموعة واسعة من طب الأسنان والأمراض الجلدية وإزالة الشعر بالليزر وهيدرافيشل. لقد أنشأت خدماتنا علامات خاصة في كل مجال. لقد قمنا ببناء فريق متخصص لا مثيل له يوفر مجموعة متنوعة من تدابير الرعاية عالية الجودة والرعاية الطبية الاستثنائية."}
              </p>
            </div>
          </div>

          <div className="pb-[1rem] flex items-center justify-center ">
            <Image
              alt=""
              src={heroImg}
              width={798}
              height={430}
              className=" xl:w-[750px] md:w-[600px] xl:h-[400px] w-[350px] md:h-[270px] h-[200px] top-[70%] lg:left-[-10%] sm:left-[20%] md:left-[2%] xl:top-[70%] md:top-[54%]  rounded-[3px] "
            />
          </div>

          <div className="flex max-w-[1356px] ms-auto md:flex-row flex-col justify-between  mt-[50px] lg:mt-[120px] mb-36  items-center ">
            <div className="min-h-full">
              <div className="xl:max-w-[700px] lg:max-w-[530px] md:max-w-[400px]">
                <h4 className="text-primary xl:text-[48px]  text-[36px] leading-[43px]  font-normal xl:leading-[52px] pb-7">
              
                
                  {currLang==="en"?"Our Mission":"مهمتنا"}
                </h4>
                <div className="xl:max-w-[100%] lg:max-w-[100%] md:max-w-[350px]">
                  <p className="text-[18px] pb-10">
                  
                    {currLang==="en"?"Our mission is to ensure that we build a place where we there is nothing but a relationship of care, comfort and     affection with our customers. We want to attract our   patients towards our clinic for the relationship they feel    with our clinic, for the care and respect they get from our   doctors. We want to provide them an environment where   there’s no insecurity towards being judged or lack of    privacy. We put the convenience of our customers at the top  of our priority list because making you smile without any worries is our mission and aim."
                :"مهمتنا هي التأكد من أننا نبني مكانًا لا يوجد فيه سوى علاقة رعاية وراحة ومودة مع عملائنا. نريد أن نجذب مرضانا إلى عيادتنا بسبب العلاقة التي يشعرون بها مع عيادتنا، وبسبب الرعاية والاحترام الذي يتلقونه من أطبائنا. نريد أن نوفر لهم بيئة لا يوجد فيها انعدام الأمن تجاه الحكم عليهم أو انعدام الخصوصية. نضع راحة عملائنا على رأس قائمة أولوياتنا لأن جعلك تبتسم دون أي قلق هو مهمتنا وهدفنا."}
                  </p>
                </div>
              </div>

              <div className="xl:max-w-[700px] lg:max-w-[366px] md:max-w-[400px]">
                <h4 className="text-primary xl:text-[48px]  md:text-[36px] leading-[43px]  font-normal xl:leading-[52px] pb-7">
                 
                  {currLang==="en"?"Our Vision":"رؤيتنا"}
                </h4>
                <div className="lg:max-w-[90%] md:max-w-[350px]">
                  <p className="text-[18px] ">
                    {currLang==="en"?"Our vision is to bring smiles on the faces of our valued customers and continue providing them with comfortable   environment and joyful experience with us."
                  :"رؤيتنا هي رسم البسمة على وجوه عملائنا الكرام ومواصلة تزويدهم ببيئة مريحة وتجربة ممتعة معنا."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:mt-0 mt-10  md:w-[45%] relative w-full px-5 md:px-0">
              <Image
                src={heroMission}
                alt="about us"
                width={605}
                height={510}
                className="xl:max-w-[515px] ms-auto xl:h-[410px] md:max-w-[300px] md:h-[340px] md:mt-0 w-full max-w-[350px] h-[235px] md:px-0 pl-10 mt-10 object-cover"
              />
              <Image
                src={heroVission}
                alt="about us"
                className={`absolute xl:w-[420px] xl:h-[250px] md:w-[250px] md:h-[180px]  w-[219px]  h-[145px] top-[73%]    xl:top-[70%] md:top-[70%]  rounded-[3px] ${currLang==="en"?"md:left-[-10%] xl:left-[-12%] sm:left-[20%]  lg:left-[5%] ":"md:left-[30%] xl:left-[32%] left-[-5%]  lg:left-[25%] "} `}
                width={340}
                height={210}
              
              />
            </div>
          </div>
        </div>
        <div className="pt-5 xl:pt-[5rem]">
          <div>
            <h4 className="text-primary  flex items-center justify-center xl:text-[45px]  md:text-[32px] leading-[43px]  font-normal xl:leading-[52px] pb-[30px]">
             
              {currLang==="en"?"MEET THE TEAM":"قابل الفريق"}
            </h4>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-start pb-6">
            <div className="mb-2 sm:mb-0">
              <p className="text-base xl:max-w-[500px] lg:max-w-[355px] md:max-w-[308px] xl:text-[16px] md:text-[16px] text-center md:text-left">
              
                {currLang==="en"?"At Pristine we collaborate with patients and each other as one team":"في Pristine نحن نتعاون مع المرضى ومع بعضنا البعض كفريق واحد"
                }
              </p>
            </div>
            <div className="flex flex-row sm:flex justify-between xl:w-[53%] md:w-[56%] w-full pt-5">
              <div className="flex justify-between items-center sm:mb-4">
                <p>
                  <span className="text-primary xl:text-[43px] lg:text-[36px] text-[30px] leading leading-[43px] font-bold align-top font-[K2D]">
                    {data.length}
                  </span>
                  {"  "}
                  
                  {currLang==="en"?"DOCTORS":"الأطباء"}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#071F34] mb-2 xl:mr-[3.5rem] lg:mr-[1.5rem] md:mr-[2rem]">
                  {" "}
                  {currLang==="en"?"Leadership":"الجميع"}
                </p>
                <p className="pl-2 pr-2">{currLang==="en"?"All":"قيادة"}</p>
              </div>
            </div>
          </div>

          <div>
            <hr className="w-full border-b border-[#dcd9d9] mt-3 mb-10" />
          </div>
        </div>
      </div>
      <div className=" pb-16 ">
        <TeamMemberDetailWrapper data={data} />
      </div>
    </>
  );
};

export default AboutUs;
