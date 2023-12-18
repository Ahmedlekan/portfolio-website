import OtherCard from "./OtherCard";
import { motion } from "framer-motion";

const OtherProjects = () => {
  return (
    <div className="max-w-contentContainer mx-auto mdl:px-10 xl:px-2 py-10 md:py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <OtherCard
          title="Educare Engligh Learning Academy"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://www.educareenglishlearningacademy.com/"
        />
        <OtherCard
          title="Cyber Security Blog with live comments section"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://www.noormohmmad.com/"
        />
        <OtherCard
          title="ReactBD web development company"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://reactbd.com/"
        />
        <OtherCard
          title="Amazon Clone with login, cart-option and payment intrigation."
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://amazonclone.reactbd.com/"
        />
        <OtherCard
          title="JSON data (example data api for test projects)"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Nextjs", "Tailwind CSS", "next-router"]}
          link="https://jsondata.reactbd.com/"
        />
        <OtherCard
          title="Dynamic Responsive Portfolio"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://portfolioone.reactbd.com/"
        />

            {/* {showMore && (
            <>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                >
                <OtherCard
                    title="OREBI e-commerce Shopping store"
                    des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                laudantium velit qui sint non, voluptates quo a veritatis."
                    listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                    link="https://orebishopping.reactbd.com/"
                />
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                >
                <OtherCard
                    title="Noor Online Shopping Store"
                    des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                laudantium velit qui sint non, voluptates quo a veritatis."
                    listItem={["Reactjs", "Tailwind CSS", "redux-toolkit"]}
                    link="https://noorshop.netlify.app/"
                />
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                >
                <OtherCard
                    title="Personalized Blog"
                    des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                laudantium velit qui sint non, voluptates quo a veritatis."
                    listItem={["Nextjs", "Tailwind CSS", "next-auth", "firebase"]}
                    link="https://my-blog-delta-eight.vercel.app/"
                />
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                >
                <OtherCard
                    title="Shoppers Online Shopping Market"
                    des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                laudantium velit qui sint non, voluptates quo a veritatis."
                    listItem={["Nextjs", "react-slick", "redux-toolkit"]}
                    link="https://shoppersyt.vercel.app/"
                />
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                >
                <OtherCard
                    title="Single Page Personalized Portfolio"
                    des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                laudantium velit qui sint non, voluptates quo a veritatis."
                    listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                    link="https://portfoliotwo.reactbd.com/"
                />
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                >
                <OtherCard
                    title="Nextjs Dynamic Portfolio"
                    des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                laudantium velit qui sint non, voluptates quo a veritatis."
                    listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                    link="https://portfoliothree.reactbd.com/"
                />
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                >
                <OtherCard
                    title="Bazaar - A Modern Shopping app"
                    des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                laudantium velit qui sint non, voluptates quo a veritatis."
                    listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                    link="https://bazar.reactbd.com/"
                />
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                >
                <OtherCard
                    title="Blog101 Application"
                    des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                laudantium velit qui sint non, voluptates quo a veritatis."
                    listItem={["Nextjs", "Tailwind CSS", "next-auth"]}
                    link="https://blog101.reactbd.com/"
                />
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                >
                <OtherCard
                    title="Todo application"
                    des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                laudantium velit qui sint non, voluptates quo a veritatis."
                    listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                    link="https://youtubetodo.vercel.app/"
                />
                </motion.div>
            </>
                )} */}
      </div>

      {/* <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div> */}

    </div>
  );
};

export default OtherProjects;