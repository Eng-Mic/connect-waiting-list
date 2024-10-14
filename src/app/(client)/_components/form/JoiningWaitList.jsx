"use client"

import React, { useState } from 'react'
import StepIndicators from './StepIndicators';
import PersonalInfo from './PersonalInfo';
import Feedback from './Feedback';
import { useCreateMember } from '@/hooks/useMembers';
import { FaLinkedin, FaSquareXTwitter, FaWhatsapp } from 'react-icons/fa6';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { BsFacebook, BsYoutube } from 'react-icons/bs';

const JoiningWaitList = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});

    const { mutate: joinWaitlist, isPending, error } = useCreateMember();

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const resetForm = () => {
        setFormData({});
        setCurrentStep(1);
    };

    const submitForm = () => {
        console.log('Form Data:', formData);
        joinWaitlist(formData)
        if(!isPending) {
            setTimeout(() => {
                setModalOpen(true);
                resetForm();
            }, 4000);
        }
    };
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <PersonalInfo 
                        formData={formData} 
                        setFormData={setFormData} 
                        nextStep={nextStep} 
                    />
                );
            case 2:
                return (
                    <Feedback
                        formData={formData} 
                        setFormData={setFormData} 
                        prevStep={prevStep} 
                        isPending={isPending} 
                        submitForm={submitForm} 
                    />)
                ;
            // case 4:
            //     return (
            //         <InviteTeam 
            //             formData={formData} 
            //             setFormData={setFormData}
            //             prevStep={prevStep} 
            //             submitForm={submitForm} 
            //         />
            //     );
            default:
                return null;
        }
    };
    return (
        <div className='w-[100%] relative'>
            {!isPending ? modalOpen && (
                <div
                    onClick={() => {
                        setModalOpen(false);
                    }}
                    className = "fixed inset-0 bg-black opacity-40 z-30"
                />
            ) : null}
            <div className=" flex flex-col items-center justify-center text-center border-b-[1px] border-zinc-300 pb-[10px] mb-[10px] sm:mb-[1.5rem]">
                <h2 className="w-[80%] text-[1.35rem] font-semibold leading-[1.7rem] mb-[10px] sm:w-[60%]">
                    Join our journey and get early access.
                </h2>
                <p className="w-[80%] text-[15px] font-medium sm:w-[55%] md:w-[75%]">
                    Join our extensive waitlist today to spark connections and get notified when we lunch.
                </p>
            </div>

            <div className='max-h-[32rem] pt-[2rem] pb-[5rem] overflow-y-auto sm:max-h-fit md:pt-0 md:pb-0'>
                {renderStep()}

                <div className="mt-[2rem]">
                    <StepIndicators 
                        currentStep={currentStep} 
                        steps={['PersonalInfo', 'Feedback']} 
                    />
                </div>
            </div>

            {/* Thank you model */}
            {!isPending ? modalOpen && (
                <div className="bg-zinc-100 rounded-[5px] p-[1rem] fixed top-[6rem] left-0 right-0 mx-auto flex flex-col items-center justify-center z-30 md:w-[37rem] md:p-[3rem]">
                    <button
                        onClick={() => setModalOpen(false)}
                        className='absolute top-[1rem] right-[1.1rem] bg-zinc-200 py-[4px] px-[10px] rounded-[4px] text-[12.5px] font-medium'
                    >
                        close
                    </button>
                    <div className="pt-[3rem] pb-[1rem] flex flex-col items-center justify-center md:pt-0">
                        <p className="text-[1.2rem] font-semibold">
                            Thank you for joining our journey! 🎉
                        </p>

                        <p className='text-[14px] text-center mt-[1rem]'>
                            Please check your inbox. Stay tuned for more details in your inbox, and get ready to connect, collaborate, and grow with us!
                        </p>
                        <div className="w-[100%] my-[1rem] flex flex-col justify-center items-center gap-[10px]">
                            <p className='text-[14px] font-semibold'>Please Follow Us & Share.</p>
                            <div className="socials flex items-center gap-3 text-zinc-500">
                                <a target="_blank" rel="noreferrer" href='https://chat.whatsapp.com/LUhDROrOz8LFi5QM1V8GjU'>
                                    <FaWhatsapp className='text-[1.1rem] hover:text-zinc-800' />
                                </a>
                                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/company/theconnect-space/'>
                                    <FaLinkedin className='text-[1.1rem] hover:text-zinc-800' />
                                </a>
                                <a target="_blank" rel="noreferrer" href='https://www.instagram.com/theconnect_community/'>
                                    <AiFillInstagram className='text-[1.1rem] hover:text-zinc-800' />
                                </a>
                                {/* <AiFillYoutube className='text-[1rem] hover:text-zinc-800' /> */}
                                <a target="_blank" rel="noreferrer" href='https://x.com/TheConnect____'>
                                    <FaSquareXTwitter className='text-[1.1rem] hover:text-zinc-800'  />
                                </a>
                                <a target="_blank" rel="noreferrer" href='https://www.youtube.com/@Connect_Community'>
                                    <BsYoutube className='text-[1.1rem] hover:text-zinc-800'  />
                                </a>

                                {/* <BsFacebook className='text-[1rem] hover:text-zinc-800' /> */}
                            </div>
                        </div>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default JoiningWaitList