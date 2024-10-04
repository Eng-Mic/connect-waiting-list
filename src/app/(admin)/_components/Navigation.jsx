"use client"

import React, { useState } from 'react'
import ConnectLogo from '../../../public/logo.png'
import Image from 'next/image'
import { MdEmail, MdOutlineCampaign } from 'react-icons/md'
import { BsBellFill } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { IoMdArrowDropdown, IoMdMenu, IoMdSettings } from 'react-icons/io'
import { BiLogOut } from 'react-icons/bi'
import { GrOverview } from 'react-icons/gr'
import { FaListUl } from 'react-icons/fa6'
import ProfileSetting from './ProfileSetting'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import useAuthStore from '@/store/authStore'

const Navigation = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [toggleProfile, setToggleProfile] = useState(false);

    const [mobileMenu, setMobileMenu] = useState(false);

    const { user } = useAuthStore();

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };
  return (
    <div className="relative">
        {isHovered || toggleProfile ? (
            <div
                onClick={() => {
                    setToggleProfile(false);
                }}
                className = "fixed inset-0 bg-black opacity-40 z-20"
            />
        ) : null}
    
        <nav className='w-full flex items-center justify-between pt-[1rem] pb-[10px] mb-[1rem] bg-[#fbfbfb] border-b-[1px] border-zinc-300'>
            {/* Logo */}
            <>
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
            </>
            <ul className={cn("items-center gap-2 text-[13px] text-zinc-700 md:flex md:w-fit", mobileMenu ? 'w-full bg-zinc-100 p-[1.5rem] flex flex-col rounded-[5px] absolute top-[3rem] right-0' : 'hidden')}>
                {/* User */}
                <div className='w-full flex items-center gap-x-[10px] border-b-[1px] border-zinc-300 pb-[10px] mb-[10px] px-[1rem] md:hidden'>
                    <FiUser className='text-[1.5rem]' />
                    <div>
                        <p className='text-[13px] font-medium flex items-center gap-x-[5px]'>
                            {user?.userName}
                        </p>
                        <p className='text-[10.5px]'>
                            {user?.email}
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <li className='flex items-center gap-2 font-medium py-[0.75rem]  text-slate-800 capitalize md:px-4'>
                        <FaListUl className='text-[1rem]' />
                        Waitlist
                    </li>
                    <li className='flex items-center gap-2 font-medium py-[0.75rem] text-slate-800 capitalize md:px-4'>
                        <MdOutlineCampaign className='text-[1.4rem]' />
                        Campaigns
                    </li>
                    {/* Settings */}
                    <li className='py-[0.75rem]'>
                        <p 
                            role='button'
                            onClick={() => {
                                setToggleProfile(true)
                                setMobileMenu(false)
                            }}
                            className='flex items-center gap-2 capitalize text-zinc-600 md:hidden'
                        >
                            <IoMdSettings className='text-[1rem]' />
                            Profile Settings
                        </p>
                        
                    </li>
                </div>
                {/* Logout */}
                <li className='w-full flex items-center justify-center gap-x-[10px] bg-zinc-700 text-white text-[11px] py-[8px] rounded-[4px] mt-[1.5rem] md:hidden'>
                    <BiLogOut className='text-[1rem]' />
                    <p>
                        Logout
                    </p>
                </li>
            </ul>
            {/* user */}
            <div className="hidden items-center gap-4 md:flex">
                <div
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    className="hidden relative flex-col items-center justify-center cursor-pointer h-[3rem] z-30 md:flex"
                >
                    <div className="flex items-center gap-x-[3px]">
                        <FiUser className='text-[1rem]' />
                        <div className='flex items-center text-[13px] gap-x-[5px] font-medium'>
                            <p>
                                {user?.userName}
                            </p> 
                            <IoMdArrowDropdown className='text-[1rem]' />
                        </div>
                    </div>

                    {/* Settings Modal :: Display when hover upon  */}
                    {isHovered && (
                        <div className="bg-zinc-50 w-[16rem] absolute top-[2.5rem] right-0 p-[1rem] rounded-[5px] z-30">
                            <section className='flex items-center gap-x-[10px] border-b-[1px] border-zinc-300 pb-[10px] mb-[10px]'>
                                <FiUser className='text-[1.5rem]' />
                                <div>
                                    <p className='text-[13px] font-medium flex items-center gap-x-[5px]'>
                                        {user?.userName}
                                    </p>
                                    <p className='text-[10.5px]'>
                                        {user?.email}
                                    </p>
                                </div>
                            </section>

                            {/* Settings */}
                            <section className='px-2'>
                                <p 
                                    role='button'
                                    onClick={() => setToggleProfile(true)}
                                    className='flex items-center gap-2 text-[12.5px] capitalize text-zinc-600'
                                >
                                    <IoMdSettings className='text-[1rem]' />
                                    Profile Settings
                                </p>
                                
                            </section>
                            
                            {/* Logout */}
                            <section className='flex items-center justify-center gap-x-[10px] bg-zinc-700 text-white text-[11px] py-[8px] rounded-[4px] mt-[1.5rem]'>
                                <BiLogOut className='text-[1rem]' />
                                <p>
                                    Logout
                                </p>
                            </section>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <IoMdMenu
                onClick={() => setMobileMenu(!mobileMenu)}
                className='text-[1.35rem] cursor-pointer md:hidden'
            />
        </nav>

        {toggleProfile && 
            <div className="h-fit bg-zinc-100 pt-[4rem] pb-[2.5rem] px-[1.5rem] rounded-[5px] fixed top-[2rem] right-0 left-0 mx-auto z-30 md:max-w-[60%] sm:px-[2.5rem]">
                <div className="relative">
                    <button 
                        onClick={() => setToggleProfile(false)}
                        className='text-[12px] bg-zinc-200 py-[5px] px-[10px] rounded-[5px] absolute top-[-3rem] right-0 md:right-[-1.5rem]'
                    >
                        close
                    </button>
                    <ProfileSetting />
                </div>
            </div>
        }
    </div>
  )
}

export default Navigation