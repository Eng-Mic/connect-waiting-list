"use client"

import { useSendContactEmail } from '@/hooks/useContactMailer';
import { cn } from '@/lib/utils';
import React, { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const ContactForm = () => {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const { mutate: sendContactEmail, isPending } = useSendContactEmail();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactInfo((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contactInfo);
        sendContactEmail(contactInfo);
        // Resetting the form
        setContactInfo({ name: '', email: '', subject: '', message: '' });
    };
    const isFormValid = contactInfo.name && contactInfo.email && contactInfo.subject && contactInfo.message;
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-y-[5px]'>
                <p className="text-[1.2rem] font-semibold">
                    Still have questions?
                </p>
                <p className='mx-auto text-[14.5px] font-medium text-center md:w-[70%]'>
                    You can submit your question or request through our contact form. Please provide as much detail as possible so that we can assist you effectively.
                </p>
            </div>
            <div className="mt-[2.5rem] md:max-w-[90%] mx-auto">
                <div className="w-[100%] flex flex-col gap-[1rem] sm:flex-row md:justify-between">
                    {/* Our Email */}
                    <div className="w-[100%] border-[1px] border-zinc-400 rounded-[5px] p-[15px]">
                        <p className='text-[14px] font-semibold mb-[5px]'>
                            Our Email
                        </p>
                        <p className='text-[14px]'>
                            connectletcollaborate@gmail.com
                        </p>
                    </div>
                    {/* Our Phone */}
                    <div className="w-[100%] border-[1px] border-zinc-400 rounded-[5px] p-[15px]">
                        <p className='text-[14px] font-semibold mb-[5px]'>
                            Our Mobile Number
                        </p>
                        <p className='text-[14px]'>
                            +23279 596-449
                        </p>
                    </div>
                </div>

                <form action="" className='mt-[1rem] space-y-[16px]'>
                    <div className="flex flex-col gap-[1rem] sm:flex-row md:items-center">
                        <input 
                            type="text" 
                            name='name'
                            placeholder="Tell your name"
                            value={contactInfo?.name}
                            onChange={handleChange}
                            className='w-[100%] border-[1px] border-zinc-400 rounded-[5px] px-[15px] py-[6px] text-[13px] bg-transparent placeholder:italic outline-none' 
                        />
                        <input 
                            type="email" 
                            name='email'
                            placeholder="Enter your email address" 
                            value={contactInfo?.email}
                            onChange={handleChange}
                            className='w-[100%] border-[1px] border-zinc-400 rounded-[5px] px-[15px] py-[6px] text-[13px] bg-transparent placeholder:italic outline-none'
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name='subject'
                            placeholder="please state the subject"
                            value={contactInfo?.subject}
                            onChange={handleChange}
                            className='w-[100%] border-[1px] border-zinc-400 rounded-[5px] px-[15px] py-[6px] text-[13px] bg-transparent placeholder:italic outline-none' 
                        />
                    </div>
                    {/* Message */}
                    <div className="">
                        <textarea 
                            name="message"
                            rows="6"
                            placeholder='Tell us your question, request or enquiry'
                            value={contactInfo?.message}
                            onChange={handleChange}
                            className='w-[100%] border-[1px] border-zinc-400 rounded-[5px] px-[15px] py-[6px] text-[13px] bg-transparent placeholder:italic outline-none'
                         />
                    </div>
                    <div className="flex justify-center">
                        <button 
                            type='submit'
                            className={cn("text-[12px] px-[15px] py-[5px] rounded-[4px] font-medium", !isFormValid || isPending ? 'cursor-not-allowed bg-zinc-300 text-zinc-500' : "bg-gradient-to-r from-[#327bbb] to-[#4c97d9] text-white")}
                            disabled={(!isFormValid || isPending)}
                            onClick={handleSubmit}
                        >
                            {isPending ? (
                                <p className='flex items-center gap-x-[10px]'>
                                    <AiOutlineLoading3Quarters className='text-[0.9rem] animate-spin' />
                                    Sending
                                </p>
                            ) : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm