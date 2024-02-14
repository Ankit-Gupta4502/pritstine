"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
const AnimatedText = ({text=""}) => {
  return (
    <div className="">
      <div className="bg-body relative z-20">
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
            reverseDirection: false,
          }}
          loop={true}
          speed={20000}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="!w-auto ">
            <div className=" py-2 space-x-6  ">
              <span
                className='text-[40px] leading-[60px] font-["Poppins"]  uppercase font-medium inline-block md:text-[56px] md:leading-[84px]'
                style={{
                  WebkitTextStroke: "2px #CA9050",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
              {text}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className=" py-2 space-x-6  ">
              <span
                className='text-[40px] leading-[60px] font-["Poppins"]  uppercase font-medium inline-block md:text-[56px] md:leading-[84px]'
                style={{
                  WebkitTextStroke: "2px #CA9050",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
            {text}
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AnimatedText;
