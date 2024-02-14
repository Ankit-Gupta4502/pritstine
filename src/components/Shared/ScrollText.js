"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
const AnimatedText = () => {
  return (
    <div className="my-16">
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
            reverseDirection: false,
          }}
          loop={true}
          speed={15000}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="!w-auto inline-block">
            <div className=" py-2 space-x-6  ">
              <span
                className='text-[40px] leading-[60px] font-["Poppins"]  uppercase font-medium inline-block md:text-[56px] md:leading-[84px]'
                style={{
                  WebkitTextStroke: "2px #CA9050",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                It’s advisable to get your teeth clean every 6 months just to
                prevent cavities.
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto inline-block">
            <div className=" py-2 space-x-6  ">
              <span
                className='text-[40px] leading-[60px] font-["Poppins"]  uppercase font-medium inline-block md:text-[56px] md:leading-[84px]'
                style={{
                  WebkitTextStroke: "2px #CA9050",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                It’s advisable to get your teeth clean every 6 months just to
                prevent cavities.
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AnimatedText;
