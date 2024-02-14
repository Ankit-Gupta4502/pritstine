"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import useLayoutContext from '@/context/LayoutContext';
const AnimatedText = () => {
const  {defaultLang} = useLayoutContext() 
  return (
    <div className="mt-16 xl:mb-36  md:mb-[135px] mb-[99px] overflow-x-hidden overflow-y-visible pt-8">
      <div className="bg-primary z-20  relative -rotate-2 ">
        <Swiper
          spaceBetween={50}
          slidesPerView="auto"
          //   slideClass='!w-auto'
          onAfterInit={(swiper) =>
            (swiper.slidesEl.style.transitionTimingFunction = "linear")
          }
          effect="fade"
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M10.8146 0.277676L14.0299 7.9319L21.9335 10.4734L14.2793 13.6888L11.7377 21.5924L8.52237 13.9381L0.618809 11.3966L8.27303 8.18123L10.8146 0.277676Z"
                    fill="#071F34"
                  />
                </svg>
              </span>
              <span className=' xl:text-[75px] text-3xl  md:xl:text-[75px] text-3xl  md:text-[53px] xl:leading-[100px] md:leading-[71px] leading-[41px]  uppercase font-["Poppins"] font-medium  text-white '>
                {defaultLang==="en"?"Sawbones":"عظام"}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M10.8146 0.277676L14.0299 7.9319L21.9335 10.4734L14.2793 13.6888L11.7377 21.5924L8.52237 13.9381L0.618809 11.3966L8.27303 8.18123L10.8146 0.277676Z"
                    fill="#071F34"
                  />
                </svg>
              </span>
              <span className='xl:text-[75px] text-3xl  md:text-[53px] xl:leading-[100px] md:leading-[71px] leading-[41px]  uppercase font-["Poppins"] font-medium  text-white '>
                
                {defaultLang==="en"?"Medico":"ميديكو"}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex w-max items-center py-2 space-x-6  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M10.8146 0.277676L14.0299 7.9319L21.9335 10.4734L14.2793 13.6888L11.7377 21.5924L8.52237 13.9381L0.618809 11.3966L8.27303 8.18123L10.8146 0.277676Z"
                    fill="#071F34"
                  />
                </svg>
              </span>
              <span className='xl:text-[75px] text-3xl  md:text-[53px] xl:leading-[100px] md:leading-[71px] leading-[41px]  uppercase font-["Poppins"] font-medium  text-white '>
                
                {defaultLang==="en"?"Healer":"المعالج"}
              </span>
            </div>
          </SwiperSlide>


          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M10.8146 0.277676L14.0299 7.9319L21.9335 10.4734L14.2793 13.6888L11.7377 21.5924L8.52237 13.9381L0.618809 11.3966L8.27303 8.18123L10.8146 0.277676Z"
                    fill="#071F34"
                  />
                </svg>
              </span>
              <span className=' xl:text-[75px] text-3xl  md:xl:text-[75px] text-3xl  md:text-[53px] xl:leading-[100px] md:leading-[71px] leading-[41px]  uppercase font-["Poppins"] font-medium  text-white '>
                
                {defaultLang==="en"?"Sawbones":"دافع حبوب منع الحمل"}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M10.8146 0.277676L14.0299 7.9319L21.9335 10.4734L14.2793 13.6888L11.7377 21.5924L8.52237 13.9381L0.618809 11.3966L8.27303 8.18123L10.8146 0.277676Z"
                    fill="#071F34"
                  />
                </svg>
              </span>
              <span className='xl:text-[75px] text-3xl  md:text-[53px] xl:leading-[100px] md:leading-[71px] leading-[41px]  uppercase font-["Poppins"] font-medium  text-white '>
                
                {defaultLang==="en"?"Medico":"التزام"}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex w-max items-center py-2 space-x-6  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M10.8146 0.277676L14.0299 7.9319L21.9335 10.4734L14.2793 13.6888L11.7377 21.5924L8.52237 13.9381L0.618809 11.3966L8.27303 8.18123L10.8146 0.277676Z"
                    fill="#071F34"
                  />
                </svg>
              </span>
              <span className='xl:text-[75px] text-3xl  md:text-[53px] xl:leading-[100px] md:leading-[71px] leading-[41px]  uppercase font-["Poppins"] font-medium  text-white '>
                
                {defaultLang==="en"?"Healer":"غاية"}
              </span>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

      <div className="bg-white relative z-20">
        <Swiper
          spaceBetween={50}
          slidesPerView="auto"
          onAfterInit={(swiper) =>
            (swiper.slidesEl.style.transitionTimingFunction = "linear")
          }
          effect="fade"
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          loop={true}
          speed={2000}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M15.9834 0.259766L20.0348 11.2084L30.9834 15.2598L20.0348 19.3111L15.9834 30.2598L11.932 19.3111L0.983398 15.2598L11.932 11.2084L15.9834 0.259766Z"
                    fill="#CA9050"
                  />
                </svg>
              </span>
              <span className='xl:text-[75px] text-3xl  md:text-[53px] xl:leading-[100px] md:leading-[71px] leading-[41px] font-["Poppins"] uppercase font-medium  text-black '>
                
                {defaultLang==="en"?"Honesty":"أمانة"}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M15.9834 0.259766L20.0348 11.2084L30.9834 15.2598L20.0348 19.3111L15.9834 30.2598L11.932 19.3111L0.983398 15.2598L11.932 11.2084L15.9834 0.259766Z"
                    fill="#CA9050"
                  />
                </svg>
              </span>
              <span className='xl:text-[75px] text-3xl  md:text-[53px] xl:leading-[100px] md:leading-[71px] leading-[41px] font-["Poppins"] uppercase  font-medium  text-black '>
                
                {defaultLang==="en"?"care":"رعاية"}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex w-max items-center py-2 space-x-6  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M15.9834 0.259766L20.0348 11.2084L30.9834 15.2598L20.0348 19.3111L15.9834 30.2598L11.932 19.3111L0.983398 15.2598L11.932 11.2084L15.9834 0.259766Z"
                    fill="#CA9050"
                  />
                </svg>
              </span>
              <span className='xl:text-[75px] text-3xl  md:text-[53px] xl:leading-[100px] md:leading-[71px] leading-[41px] font-["Poppins"] uppercase  font-medium  text-black '>
                
                {defaultLang==="en"?"Health":"صحة"}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M15.9834 0.259766L20.0348 11.2084L30.9834 15.2598L20.0348 19.3111L15.9834 30.2598L11.932 19.3111L0.983398 15.2598L11.932 11.2084L15.9834 0.259766Z"
                    fill="#CA9050"
                  />
                </svg>
              </span>
              <span className='xl:text-[75px] text-3xl  md:text-[53px] xl:leading-[100px] md:leading-[71px] leading-[41px] font-["Poppins"] uppercase font-medium  text-black '>
                
                {defaultLang==="en"?"Compassion":"عطف"}
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M10.8146 0.277676L14.0299 7.9319L21.9335 10.4734L14.2793 13.6888L11.7377 21.5924L8.52237 13.9381L0.618809 11.3966L8.27303 8.18123L10.8146 0.277676Z"
                    fill="#071F34"
                  />
                </svg>
              </span>
              <span className='xl:text-[75px] text-3xl  md:text-[53px] xl:leading-[100px] md:leading-[71px] leading-[41px] font-["Poppins"] uppercase font-medium  text-black '>
                
                {defaultLang==="en"?"Honesty":"وثيقة"}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M10.8146 0.277676L14.0299 7.9319L21.9335 10.4734L14.2793 13.6888L11.7377 21.5924L8.52237 13.9381L0.618809 11.3966L8.27303 8.18123L10.8146 0.277676Z"
                    fill="#071F34"
                  />
                </svg>
              </span>
              <span className='xl:text-[75px] text-3xl  md:text-[53px] xl:leading-[100px] md:leading-[71px] leading-[41px] font-["Poppins"] uppercase  font-medium  text-black '>
              {defaultLang==="en"?"care":"رعاية"}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex w-max items-center py-2 space-x-6  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M10.8146 0.277676L14.0299 7.9319L21.9335 10.4734L14.2793 13.6888L11.7377 21.5924L8.52237 13.9381L0.618809 11.3966L8.27303 8.18123L10.8146 0.277676Z"
                    fill="#071F34"
                  />
                </svg>
              </span>
              <span className='xl:text-[75px] text-3xl  md:text-[53px] xl:leading-[100px] md:leading-[71px] leading-[41px] font-["Poppins"] uppercase  font-medium  text-black '>
              {defaultLang==="en"?"Health":"صحة"}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M10.8146 0.277676L14.0299 7.9319L21.9335 10.4734L14.2793 13.6888L11.7377 21.5924L8.52237 13.9381L0.618809 11.3966L8.27303 8.18123L10.8146 0.277676Z"
                    fill="#071F34"
                  />
                </svg>
              </span>
              <span className='xl:text-[75px] text-3xl  md:text-[53px] xl:leading-[100px] md:leading-[71px] leading-[41px] font-["Poppins"] uppercase font-medium  text-black '>
              {defaultLang==="en"?"Compassion":"عطف"}
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AnimatedText;
