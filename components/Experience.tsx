import React from 'react'
import { workExperience } from '@/app/constants'
import { Button } from './MovingBoarders'
import Image from 'next/image'

const Experience = () => {
  return (
    <div id="experience"
        className=" max-w-containerSmall mx-auto mt-20 md:mt-40"
    >
        
        <div className='flex flex-col gap-10 text-center items-center'>
            <h1 className="font-semibold text-[30px] 
                lgl:text-[40px] font-titleFont"
            >
                Work Experience
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                <Button
                    key={card.id}
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius="1.75rem"
                    style={{
                    background: "rgb(4,7,29)",
                    backgroundColor:
                        "linear-gradient(90deg, rgba(100, 255, 218, 1) 0%, rgba(32, 100, 85, 1) 100%)",
                    borderRadius: `calc(1.75rem* 0.96)`,
                    }}
                    className="flex-1 text-black dark:text-white border-neutral-200 
                        dark:border-slate-800"
                >
                    <div className="flex lg:flex-row flex-col 
                        lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2"
                    >
                        <div className="relative lg:w-32 md:w-20 w-16">
                            <Image
                            src={card.thumbnail}
                            alt={card.title}
                            layout="intrinsic"
                            width={128}
                            height={128}
                            className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="lg:ms-5">
                            <h1 className="text-start text-textGreen text-xl md:text-2xl font-bold">
                            {card.title}
                            </h1>
                            <p className="text-start text-white-100 mt-3 font-semibold text-white">
                            {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))}
            </div>
        </div>

    </div>
  )
}

export default Experience