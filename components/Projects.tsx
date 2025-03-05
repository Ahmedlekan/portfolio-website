import bookbanner from "@/public/images/bookbanner.png"
import ecommerce from "@/public/images/ecommerce.png"
import Link from "next/link";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";


const Projects = () => {
  return (
    <section id="project" className=" max-w-containerSmall mx-auto mt-20 md:mt-40"
    >
        <SectionTitle title="Projects"/>

        <div className="w-full flex flex-col items-center 
            justify-center gap-14 mt-10"
        >
        
            {/* ============ project One Start here ================== */}
                <div className="flex flex-col xl:flex-row gap-6">
                    <Link
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="https://mern-bookstore-6ysr.onrender.com"
                        target="_blank"
                        >
                        <div className="relative w-full h-64 xl:h-auto">
                            <Image
                            className="w-full h-full object-cover rounded-lg"
                            src={bookbanner}
                            alt="bookbannerImg"
                            />
                            <div
                            className="absolute inset-0 bg-textGreen/10 rounded-lg 
                                top-0 left-0 group-hover:bg-transparent duration-300"
                            ></div>
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
                            <h3 className="text-2xl font-bold">📚 MERN Bookstore</h3>
                        </div>
                        
                        <p className="bg-[#112240] text-sm md:text-base p-2 
                            md:p-6 rounded-md text-justify"
                        >
                            A full-stack bookstore application built using the MERN stack
                            This project allows users to browse, search, and purchase books online
                            with authentication, cart management, and an admin dashboard for managing
                            inventor.
                        </p>
                        
                        <ul className="text-xs md:text-sm font-titleFont 
                        tracking-wide flex gap-2 md:gap-5 justify-between 
                        text-textDark"
                        >
                            <li>React</li>
                            <li>Typescript</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MongoDb</li>
                            <li>Stripe</li>
                        </ul>

                        <div className="text-2xl flex gap-4">
                            <Link
                                className="hover:text-textGreen duration-300"
                                href="https://github.com/Ahmedlekan"
                                target="_blank"
                            >
                                <TbBrandGithub />
                            </Link>
                            <Link
                                className="hover:text-textGreen duration-300"
                                href="https://mern-bookstore-6ysr.onrender.com"
                                target="_blank"
                            >
                                <RxOpenInNewWindow />
                            </Link>
                        </div>

                    </div>
                </div>
            {/* ============ project one end here ================== */}

            {/* ============ project Two Start here ================== */}
            <div className="flex flex-col xl:flex-row gap-6">
                    <Link
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="https://mern-ecommerce-2i1o.onrender.com/"
                        target="_blank"
                        >
                        <div className="relative w-full h-64 xl:h-auto">
                            <Image
                            className="w-full h-full object-cover rounded-lg"
                            src={ecommerce}
                            alt="ecommerceImg"
                            />
                            <div
                            className="absolute inset-0 bg-textGreen/10 rounded-lg 
                                top-0 left-0 group-hover:bg-transparent duration-300"
                            ></div>
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
                            <h3 className="text-2xl font-bold">MERN Ecommerce</h3>
                        </div>
                        
                        <p className="bg-[#112240] text-sm md:text-base p-2 
                            md:p-6 rounded-md text-justify"
                        >
                            The website allows users to browse products, add them to the cart, and complete the 
                            checkout process. The platform also includes a dynamic admin dashboard, 
                            where admin can manage products, view order history, 
                            and handle user accounts.
                        </p>
                        
                        <ul className="text-xs md:text-sm font-titleFont 
                        tracking-wide flex gap-2 md:gap-5 justify-between 
                        text-textDark"
                        >
                            <li>React</li>
                            <li>Typescript</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MongoDb</li>
                            <li>Stripe</li>
                        </ul>

                        <div className="text-2xl flex gap-4">
                            <Link
                                className="hover:text-textGreen duration-300"
                                href="https://github.com/Ahmedlekan"
                                target="_blank"
                            >
                                <TbBrandGithub />
                            </Link>
                            <Link
                                className="hover:text-textGreen duration-300"
                                href="https://mern-ecommerce-2i1o.onrender.com/"
                                target="_blank"
                            >
                                <RxOpenInNewWindow />
                            </Link>
                        </div>

                    </div>
                </div>
            {/* ============ project Two end here ================== */}
            
            

        </div>
        
    </section>
  )
}

export default Projects