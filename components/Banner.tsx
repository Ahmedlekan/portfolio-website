import { motion } from "framer-motion";
import Link from "next/link";
import memoImage from "../public/images/memoji-computer.png"
import { FaArrowDown } from "react-icons/fa";
import grainImage from "../public/images/grain.jpg"
import StarIcon from "../public/icons/star.svg"
import SparkleIcon from "../public/icons/sparkle.svg"

import Image from "next/image";
import Orbit from "./Orbit";

const Banner = () => {
  return (

    <div className=" max-w-containerSmall mx-auto py-20 md:pt-28 
      md:mb-60 relative z-0 overflow-x-clip"
    >

      <div className=" absolute inset-0 
        [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"
      >

        <div className=" absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})`}}
        ></div>
        <div className=" size-[620px] hero-ring"></div>
        <div className=" size-[820px] hero-ring"></div>
        <div className=" size-[1020px] hero-ring"></div>
        <div className=" size-[1220px] hero-ring"></div>
        <Orbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className=" size-28 text-emerald-300" />
        </Orbit>
        <Orbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className=" size-12 text-emerald-300" />
        </Orbit>
        <Orbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className=" size-8 text-emerald-300" />
        </Orbit>
        <Orbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className=" size-8 text-emerald-300/20" />
        </Orbit>
        <Orbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className=" size-5 text-emerald-300/20" />
        </Orbit>
        <Orbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className=" size-10 text-emerald-300/20" />
        </Orbit>
        <Orbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className=" size-14 text-emerald-300/20" />
        </Orbit>
        <Orbit size={720} rotation={85} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="3s"> 
          <SparkleIcon className=" size-3 text-emerald-300/20" />
        </Orbit>
        <Orbit size={520} rotation={-41} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="3s">
          <StarIcon className=" size-5 rounded-full text-emerald-300" shouldSpin spinDuration="6s"/>
        </Orbit>
        <Orbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <SparkleIcon className=" size-5 rounded-full text-emerald-300" shouldSpin spinDuration="6s"/>
        </Orbit>

      </div>

      <div className="">

        <div className="flex flex-col items-center">
          <Image src={memoImage} alt="memo Image" className=" size-[100px]" />

          <div className=" bg-gray-950 border border-gray-800 
            px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            
            <div className=" bg-green-500 h-2 w-2 rounded-full relative">
              <div className=" bg-green-500 absolute h-2 w-2 rounded-full animate-ping-large"></div>
            </div>
            
            <div>Available for projects</div>
          </div>
        </div>

        <div className=" max-w-containersmx mx-auto">
          <h1 className=" mt-8 text-2xl md:text-3xl lg:5xl text-center font-serif tracking-wide">
            Transforming Concepts into Seamless User Experiences
          </h1>

          <p className=" mt-4 text-center text-white/60">
            Hi! I&apos;m Ahmed, a Software Developer based in Canada. 
          </p>
        </div>

        <div className=" flex flex-col items-center justify-center 
          gap-4 md:flex-row mt-4"
        >
          <button className=" inline-flex items-center gap-2 border 
            border-white/20 px-6 h-12 rounded-xl hover:text-textGreen 
              cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <span className=" font-semibold">Explore my world</span>
            <FaArrowDown  size={25} />
          </button>

          <button className=" inline-flex items-center gap-2 border cursor-pointer 
          border-white bg-white text-gray-900 px-6 h-12 rounded-xl"
            id="contact"
          >
            <span>👋</span>
            <span className=" font-semibold">Lets connect</span>
          </button>
        </div>

      </div>
      
    </div>
  );
};

export default Banner;