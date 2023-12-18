import amazonImg from "@/public/images/amazonImg.png"
import Link from "next/link";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";


const Projects = () => {
  return (
    <section id="project" className="max-w-contentContainer mx-auto mdl:px-10 
    xl:px-7 py-10 md:py-24"
    >
        <SectionTitle title="Projects"/>

        <div className="w-full flex flex-col items-center justify-center gap-28 
        mt-10">
        
        {/* ============ project One Start here ================== */}
            <div className="flex flex-col xl:flex-row gap-6">
                <Link
                    className="w-full xl:w-1/2 h-auto relative group"
                    href="https://nextamazon.reactbd.com/"
                    target="_blank"
                >
                    <div>
                    <Image
                        className="w-full h-full object-contain"
                        src={amazonImg}
                        alt="amazonImg"
                    />
                        <div className="absolute w-full h-full bg-textGreen/10 
                        rounded-lg top-0 left-0 group-hover:bg-transparent 
                        duration-300"
                        >
                        </div>
                    </div>
                </Link>
            
                <div className="w-full xl:w-1/2 flex flex-col gap-6 
                lgl:justify-between items-end text-right xl:-ml-16 z-10"
                >
                    <div>
                        <p className="font-titleFont text-textGreen text-sm 
                        tracking-wide"
                        >
                            Featured Project
                        </p>
                        <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
                    </div>
                    
                    <p className="bg-[#112240] text-sm md:text-base p-2 
                    md:p-6 rounded-md"
                    >
                        An Amazon clone website for visualizing personalized Amazon
                        website. View your products, Add your account with{" "}
                        <span className="text-textGreen">O-auth</span> and then 
                        make the purchage using 
                        <span className="text-textGreen">stripe</span>.
                    </p>
                    
                    <ul className="text-xs md:text-sm font-titleFont 
                    tracking-wide flex gap-2 md:gap-5 justify-between 
                    text-textDark"
                    >
                        <li>Nextjs</li>
                        <li>Typescript</li>
                        <li>Prisma</li>
                        <li>PlanetScale</li>
                        <li>Vercel Deployment</li>
                    </ul>

                    <div className="text-2xl flex gap-4">
                        <Link
                            className="hover:text-textGreen duration-300"
                            href="https://github.com/noorjsdivs"
                            target="_blank"
                        >
                            <TbBrandGithub />
                        </Link>
                        <Link
                            className="hover:text-textGreen duration-300"
                            href="https://youtu.be/WzMtRfzkP-Q"
                            target="_blank"
                        >
                            <AiOutlineYoutube />
                        </Link>
                        <Link
                            className="hover:text-textGreen duration-300"
                            href="https://nextamazon.reactbd.com/"
                            target="_blank"
                        >
                            <RxOpenInNewWindow />
                        </Link>
                    </div>

                </div>
            </div>
            {/* ============ project one end here ================== */}

        {/* ============ project three start here ================== */}
            <div className="flex flex-col xl:flex-row gap-6">
                <Link
                    className="w-full xl:w-1/2 h-auto relative group"
                    href="https://nextamazon.reactbd.com/"
                    target="_blank"
                >
                    <div>
                        <Image
                            className="w-full h-full object-contain"
                            src={amazonImg}
                            alt="amazonImg"
                        />
                        <div className="absolute w-full h-full bg-textGreen/10 
                        rounded-lg top-0 left-0 group-hover:bg-transparent 
                        duration-300">
                        </div>
                    </div>
                </Link>
            
                <div className="w-full xl:w-1/2 flex flex-col gap-6 
                lgl:justify-between items-end text-right xl:-ml-16 z-10"
                >
                    <div>
                        <p className="font-titleFont text-textGreen text-sm 
                        tracking-wide"
                        >
                            Featured Project
                        </p>
                        
                        <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
                    </div>
                    <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 
                        rounded-md">
                        An Amazon clone website for visualizing personalized Amazon
                        website. View your products, Add your account with{" "}
                        <span className="text-textGreen">O-auth</span> and then 
                        make the purchage using 
                        <span className="text-textGreen">stripe</span>.
                    </p>
                    
                    <ul className="text-xs md:text-sm font-titleFont tracking-wide 
                    flex gap-2 md:gap-5 justify-between text-textDark"
                    >
                        <li>Nextjs</li>
                        <li>Typescript</li>
                        <li>Prisma</li>
                        <li>PlanetScale</li>
                        <li>Vercel Deployment</li>
                    </ul>
                    
                    <div className="text-2xl flex gap-4">
                        <Link
                            className="hover:text-textGreen duration-300"
                            href="https://github.com/noorjsdivs"
                            target="_blank"
                        >
                            <TbBrandGithub />
                        </Link>
                        <Link
                            className="hover:text-textGreen duration-300"
                            href="https://youtu.be/WzMtRfzkP-Q"
                            target="_blank"
                        >
                            <AiOutlineYoutube />
                        </Link>
                        <Link
                            className="hover:text-textGreen duration-300"
                            href="https://nextamazon.reactbd.com/"
                            target="_blank"
                        >
                            <RxOpenInNewWindow />
                        </Link>
                    </div>

                </div>
            </div>

        </div>
        
    </section>
  )
}

export default Projects