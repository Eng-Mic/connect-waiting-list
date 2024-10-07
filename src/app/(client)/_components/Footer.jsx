import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaLinkedin, FaSquareXTwitter, FaWhatsapp } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-[1rem] md:flex-row md:justify-between'>
            <p className='text-[12.5px] font-medium text-zinc-500'>
                &copy;{new Date().getFullYear()} Connect. All rights reserved.
            </p>
            <div className="socials flex items-center gap-3 text-zinc-500">
                <FaWhatsapp className='text-[1rem] hover:text-zinc-800' />
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/company/theconnect-space/'>
                    <FaLinkedin className='text-[1rem] hover:text-zinc-800' />
                </a>
                <a target="_blank" rel="noreferrer" href='https://www.instagram.com/theconnect_community/'>
                    <AiFillInstagram className='text-[1rem] hover:text-zinc-800' />
                </a>
                {/* <AiFillYoutube className='text-[1rem] hover:text-zinc-800' /> */}
                <a target="_blank" rel="noreferrer" href='https://x.com/TheConnect____'>
                    <FaSquareXTwitter className='text-[1rem] hover:text-zinc-800'  />
                </a>
                {/* <BsFacebook className='text-[1rem] hover:text-zinc-800' /> */}
            </div>
        </div>
    )
}

export default Footer