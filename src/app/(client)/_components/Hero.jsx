"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Line from '/public/line.png'
import JoiningWaitList from './form/JoiningWaitList'

const Hero = () => {
    const [waitListModel, setWaitListModel] = useState(false)
    return (
        <>
            {waitListModel ? (
                <div
                    onClick={() => {
                        setWaitListModel(false);
                    }}
                    className = "fixed inset-0 bg-black opacity-40 z-30 md:hidden"
                />
            ) : null}
            <div className="relative mb-[10px]">
                {/* Hero primary text */}
                <h1 className="text-[2.4rem] font-semibold sm:text-[2.5rem]">
                    Imagine a space
                </h1>
                <Image
                    src={Line}
                    alt='border line'
                    // width={1200} height={800}
                    // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                    loading="lazy"
                    className='w-[17rem] absolute bottom-[-5px] right-[-1rem] md:w-[15rem] md:right-[-2.5rem] md:bottom-[-2px]'
                />
            </div>
            {/* Hero secondary text */}
            <p className="text-center text-[1.3rem] font-medium tracking-tight sm:w-[65%] md:w-[45%]">
                Where your 
                <span className="px-[6px]">
                    ideas
                </span> 
                matter, your 
                <span className="px-[6px]">
                    investments
                </span> 
                yield exponential returns. 
            </p>
            {/* Hero join the waitlist btn */}
            <button
                role='button'
                onClick={() => setWaitListModel(true)}
                className='bg-gradient-to-r from-[#327bbb] to-[#4c97d9] text-white text-[14px] px-[15px] py-[6px] rounded-[4px] font-medium mt-[1.5rem] md:hidden'
            >
                Join the waitlist
            </button>

            {waitListModel && (
                <div className="w-[95%] bg-white px-[12px] py-[6rem] rounded-[5px] flex-col items-center fixed top-[10px] right-0 left-0 mx-auto z-30 transition-all ease-in-out duration-300 sm:px-[2rem] sm:py-[7rem] md:hidden">
                    <div className='relative'>
                        <button
                            type='button'
                            onClick={() => setWaitListModel(false)}
                            className='text-[14px] font-medium py-[7px] px-[10px] rounded-[4px] bg-zinc-50 absolute top-[-4.5rem] right-[10px] md:hidden'
                        >
                            Close
                        </button>
                        <JoiningWaitList />
                    </div>
                </div>
            )}
        </>
    )
}

export default Hero