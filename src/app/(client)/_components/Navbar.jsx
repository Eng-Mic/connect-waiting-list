"use client"

import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import ConnectLogo from '/public//logo.png'
import { IoMdMenu } from 'react-icons/io';
import JoiningWaitList from './form/JoiningWaitList';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
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

            <nav className="w-full bg-[#fbfbfb] flex items-center justify-between border-b-[1px] border-zinc-300 pb-[12px] mb-[1rem] relative">
                <div>
                    <Link href='/' className="">
                        <Image
                            src={ConnectLogo}
                            alt='Connect logo'
                            // width={1200} height={800}
                            // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                            loading="lazy"
                            className='w-[5rem]'
                        />
                    </Link>
                </div>
                
                <div className={cn("transition-all ease-in-out duration-300 md:flex md:static md:w-fit md:py-0 md:bg-transparent", mobileMenu ? 'w-full bg-zinc-100 py-[15px] flex items-center justify-center rounded-[5px] absolute top-[2.8rem] right-0' : 'hidden')}>
                    <ul className="flex items-center gap-x-[1rem] md:gap-x-[10px]">
                        <li className='text-[14px] font-medium'>
                            <Link href='#faqs'>FAQs</Link>
                        </li>
                        <div className='w-[1.5px] h-[15px] bg-zinc-500' />
                        <li className='text-[14px] font-medium'>
                            <Link href='#contact'>Contact</Link>
                        </li>
                        <div className='w-[1.5px] h-[15px] bg-zinc-500' />
                        <button
                            role='button'
                            className='hidden bg-gradient-to-r from-[#327bbb] to-[#4c97d9] text-white text-[12px] px-[15px] py-[5px] rounded-[4px] font-medium md:flex'
                        >
                            <Link href='/'>Join the waitlist</Link>
                        </button>
                        <button
                            role='button'
                            onClick={() => {
                                setWaitListModel(true);
                                setMobileMenu(false);
                            }}
                            className='bg-gradient-to-r from-[#327bbb] to-[#4c97d9] text-white text-[12px] px-[15px] py-[5px] rounded-[4px] font-medium md:hidden'
                        >
                            Join the waitlist
                        </button>
                    </ul>
                </div>

                <IoMdMenu
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className='text-[1.35rem] cursor-pointer md:hidden'
                />
            </nav>

            {waitListModel && (
                <div className="w-[95%] bg-zinc-100 px-[12px] py-[6rem] rounded-[5px] flex-col items-center fixed top-[10px] right-0 left-0 mx-auto z-30 transition-all ease-in-out duration-300 sm:px-[2rem] sm:py-[7rem] md:hidden">
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

export default Navbar