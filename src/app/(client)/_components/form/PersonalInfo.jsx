"use client"

import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const joinAs = [
  {
    id: 1,
    name: 'Entrepreneur',
    description: 'Join the Connect community to access resources that help bring your venture to life. Get guidance, funding opportunities, and collaboration with like-minded entrepreneurs. Participate in pitch events, connect with investors, and build the foundation for sustainable growth.'
  },
  {
    id: 2,
    name: 'Investor',
    description: 'As an investor, you gain access to a curated selection of startups and ventures, offering opportunities to diversify your portfolio. Engage directly with founders, receive exclusive content on trends and market opportunities, and grow your investment portfolio through promising startups.'
  },
  {
    id: 3,
    name: 'Partner',
    description: 'Partners can collaborate with entrepreneurs to provide services, mentorship, or products that will help ventures grow. Get visibility within a network of startups and founders looking for strategic partnerships, and showcase your company’s offerings to a dedicated community.'
  },
  {
    id: 4,
    name: 'Educator',
    description: 'Educators play a pivotal role in shaping the next generation of entrepreneurs. By joining Connect, you can share your expertise, contribute to training programs, and support startups by offering insights in business, technology, and more. Be part of a community that values learning and innovation.'
  }
]

const PersonalInfo = ({ formData, setFormData, nextStep }) => {
    const [personalInfo, setPersonalInfo] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        joinAs: "",
        yourStory: ""
    });
    const [collapseJoinAs, setCollapseJoinAs] = useState(false)
    useEffect(() => {
        if (formData) {
            setPersonalInfo(prevState => ({
                ...prevState,
                ...formData
            }));
        }
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo((prevData) => ({ ...prevData, [name]: value }));
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleJoinAsChange = (role) => {
        setPersonalInfo((prevData) => ({ ...prevData, joinAs: role }));
        setFormData({ ...formData, joinAs: role });
    };
    // console.log(personalInfo);
    const isFormValid = personalInfo.fullName && personalInfo.email && personalInfo.phoneNumber && personalInfo.joinAs && personalInfo.yourStory;
    return (
        <div className=''>
            <form className="w-[90%] mx-auto space-y-[1rem]">
                {/* Full name */}
                <div className="w-full">
                    <label htmlFor='fullName' className="flex flex-col gap-y-[5px] text-[14px] font-medium">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 lg:text-[14px]">
                            Full name
                        </span>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Tell us your full name please"
                            value={personalInfo?.fullName}
                            onChange={handleChange}
                            className="w-[100%] border-[1px] border-zinc-400 py-[7px] px-[10px] bg-transparent rounded-[5px] text-[13px] font-medium placeholder:italic outline-none" 
                        />
                    </label>
                </div>
                {/* Email */}
                <div className="w-full">
                    <label htmlFor='email' className="flex flex-col gap-y-[5px] text-[14px] font-medium">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 lg:text-[14px]">
                            Email Address
                        </span>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Please enter your email address..."
                            value={personalInfo?.email}
                            onChange={handleChange}
                            className="w-[100%] border-[1px] border-zinc-400 py-[7px] px-[10px] bg-transparent rounded-[5px] text-[13px] font-medium placeholder:italic outline-none" 
                        />
                    </label>
                </div>
                {/* Phone number */}
                <div className="w-full">
                    <label htmlFor='phoneNumber' className="flex flex-col gap-y-[5px] text-[14px] font-medium">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 lg:text-[14px]">
                            Phone number
                        </span>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Please enter your phone number"
                            value={personalInfo?.phoneNumber}
                            onChange={handleChange}
                            className="w-[100%] border-[1px] border-zinc-400 py-[7px] px-[10px] bg-transparent rounded-[5px] text-[13px] font-medium placeholder:italic outline-none" 
                        />
                    </label>
                </div>
                {/* Join as role */}
                <div>
                    <p className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-zinc-700 mb-[5px] lg:text-[14px]">
                        You are?
                    </p>
                    <button 
                        type='button' 
                        onClick={() => 
                            setCollapseJoinAs(!collapseJoinAs)
                        }
                        className="w-full flex items-center justify-between py-[8px] px-[10px] border-[1px] border-zinc-400 rounded-[5px] lg:text-[13px]"
                    >
                        <p className='capitalize'>
                            {personalInfo?.joinAs ? personalInfo?.joinAs : "Select Join as" }
                        </p>
                        <IoIosArrowDown />
                    </button>
                    {collapseJoinAs && (
                        <div className='border-[1px] border-zinc-200 rounded-[5px] mt-[5px] transition-all ease-in-out duration-300'>
                            <div className="">
                                {joinAs.map((role) => (
                                    <button
                                        type='button'
                                        key={role?.id}
                                        onClick={() => {
                                            handleJoinAsChange(role?.name);
                                            setCollapseJoinAs(false)
                                        }}
                                        className='w-full text-left 
                                        text-[13px] border-b-[1px] py-[7px] px-[13px] capitalize hover:bg-zinc-100'
                                    >
                                        {role?.name}
                                    </button>
                                ))}
                            </div>
                            <div className="my-[10px] px-[10px]">
                                <label className='flex flex-col gap-y-[5px] text-[13px] font-medium'>
                                    Not in the list above?
                                    <input
                                        type="text"
                                        // value={setSelectedJoinAs}
                                        onChange={(e) => handleJoinAsChange(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                // setSelectedJoinAs(e.target.value); // Sets the value when Enter is pressed
                                                setCollapseJoinAs(false); // Optionally close the dropdown
                                            }
                                        }}
                                        placeholder="Tell us your role here, and click enter"
                                        className="w-[100%] border-[1px] border-zinc-400 py-[7px] px-[10px] bg-transparent rounded-[5px] text-[13px] font-medium placeholder:italic outline-none"
                                    />
                                </label>
                            </div>
                        </div>
                    )}
                </div>
                {/* Tell us your story */}
                <div>
                    <label htmlFor='yourStory' className="flex flex-col gap-y-[5px] text-[14px] font-medium">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 lg:text-[14px]">
                            What&apos;s your story?
                        </span>
                        <textarea 
                            name="yourStory" id="yourStory"
                            cols="30" rows="6"
                            placeholder='Tell us your story, why this venture?'
                            value={personalInfo?.yourStory}
                            onChange={handleChange}
                            className="w-[100%] border-[1px] border-zinc-400 bg-transparent rounded-[5px] text-[13px] font-medium p-[10px] placeholder:italic outline-none"
                        />
                    </label>
                </div>
            </form>
            
            <div className='w-[100%] mt-[2rem] flex justify-end px-[1.5rem]'>
                <button
                    disabled={(!isFormValid)}
                    onClick={nextStep}
                    className={`flex items-center gap-x-[10px] py-[7px] px-[20px] rounded-[4px] text-[12px] font-medium ${(!isFormValid) ? 'cursor-not-allowed bg-zinc-300 text-zinc-500' : "bg-gradient-to-r from-[#327bbb] to-[#4c97d9] text-white"}`}
                >
                    Continue
                    &rarr;
                </button>
            </div>
        </div>
    )
}

export default PersonalInfo