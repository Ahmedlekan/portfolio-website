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
      justify-center items-center mt-20"
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
                <p className="text-xs sm:text-sm text-white break-words">{skill.name}</p>
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
                <p className="text-xs sm:text-sm text-white break-words">{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;



































// import React from 'react'
// import SectionTitle from './SectionTitle'

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="max-w-containerSmall mx-auto py-10 lgl:py-12 flex flex-col gap-8"
//     >
//       <SectionTitle title="Skills & Expereince" titleNo="02" />

//         <div className="flex flex-col lgl:flex-row gap-16 relative">

//             <div className=" basis-2/3 text-base text-textDark font-medium flex flex-col gap-4">
//                 <p>
//                     I have a good experience in front-end development including technologies
//                     like <span className='text-textGreen'>
//                         HTML5, CSS3, Tailwind, Sass javaScript, TypeScript, React, Nextjs, React Native,
//                         Git
//                     </span> etc.
//                 </p>
//                 <p>
//                     I'm not a designer but i have a good sense pf aesthetics, and 
//                     experience in responsive design, mobile-first web design. I put special
//                     effort into optimizing my code and providing the best user experience.                    
//                 </p>
//             </div>


//             <div className="basis-1/2 h-50 relative">        
//                 <div className="pt-[10%] ml-[25%]">
        
//                 </div>
//             </div>

//         </div>
//     </section>
//   )
// }

// export default Experience