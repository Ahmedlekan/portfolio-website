"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { SkillData } from "@/constants/constant";

const Skills = () => {
  return (
    <div
    id="skills"
      className="max-w-contentContainer mx-auto flex 
      justify-center items-center my-20"
    >
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-[30px] 
          lgl:text-[40px] font-titleFont">
            Skills{" "}
            <span className="text-textGreen">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>

          <p className="text-gray-400 text-[20px]">
            Using the latest tech this world has to offer
          </p>
        </div>
        
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center space-y-2 text-center px-2">
                <skill.icon className="text-5xl text-textGreen" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center space-y-2 text-center px-2">
                <skill.icon className="text-5xl text-textGreen" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;

