"use client"

import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Feedback = ({ formData, setFormData, prevStep , isPending, submitForm}) => {
    const [feedback, setFeedback] = useState({
        nameOfBusiness: "",
        feedbackOnTheProblems: "",
        suggestionsOrQuestions: ""
    })

    useEffect(() => {
        if (formData) {
            setFeedback(prevState => ({
                ...prevState,
                ...formData
            }));
        }
    }, [formData]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback((prevData) => ({ ...prevData, [name]: value }));
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const isFormValid = feedback.nameOfBusiness && feedback.feedbackOnTheProblems && feedback.suggestionsOrQuestions;
    return (
        <div>
            <form className='w-[90%] mx-auto space-y-[1rem]'>
                {/* Name of company | business | organization | startup. */}
                <div className="w-full">
                    <label htmlFor='nameOfBusiness' className="flex flex-col gap-y-[5px] text-[14px] font-medium">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 lg:text-[14px]">
                            Name of Company | Business | Organization | Startup. (optional)
                        </span>
                        <input
                            type="text"
                            id="nameOfBusiness"
                            name="nameOfBusiness"
                            placeholder="Please enter your email address..."
                            value={feedback?.nameOfBusiness}
                            onChange={handleChange}
                            className="w-[100%] border-[1px] border-zinc-400 py-[7px] px-[10px] bg-transparent rounded-[5px] text-[13px] font-medium placeholder:italic outline-none" 
                        />
                    </label>
                </div>
                {/* What are your thought on the problems */}
                <div className='w-full'>
                    <label htmlFor='feedbackOnTheProblems' className="flex flex-col gap-y-[5px] text-[14px] font-medium">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 lg:text-[14px]">
                            What are your thought on the problems, are these problems worth solving?
                        </span>
                        <textarea 
                            name="feedbackOnTheProblems" id="feedbackOnTheProblems"
                            cols="30" rows="6"
                            placeholder='Tell us your thought on the problems, are these problems worth solving?'
                            value={feedback?.feedbackOnTheProblems}
                            onChange={handleChange}
                            className="w-[100%] border-[1px] border-zinc-400 bg-transparent rounded-[5px] text-[13px] font-medium p-[10px] placeholder:italic outline-none"
                        />
                    </label>
                </div>
                {/* What are your thought on the problems */}
                <div className='w-full'>
                    <label htmlFor='suggestionsOrQuestions' className="flex flex-col gap-y-[5px] text-[14px] font-medium">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 lg:text-[14px]">
                            Do you have any question, additional problems or suggestions? 
                        </span>
                        <textarea 
                            name="suggestionsOrQuestions" id="suggestionsOrQuestions"
                            cols="30" rows="6"
                            placeholder='Do you have any question, additional problems or suggestions on how we will solve the problem? Please tell us.'
                            value={feedback?.suggestionsOrQuestions}
                            onChange={handleChange}
                            className="w-[100%] border-[1px] border-zinc-400 bg-transparent rounded-[5px] text-[13px] font-medium p-[10px] placeholder:italic outline-none"
                        />
                    </label>
                </div>
            </form>
            <div className='w-[100%] mt-[2rem] flex gap-x-[1rem] justify-end px-[1.5rem]'>
                <button
                    type='button'
                    onClick={prevStep} 
                    className='bg-zinc-200 py-[7px] px-[20px] rounded-[4px] text-[12px] font-medium'
                    disabled={isPending}
                >
                    Back
                </button>
                <button
                    type='button'
                    disabled={(!isFormValid || isPending)}
                    onClick={submitForm}
                    className={`flex items-center gap-x-[10px] py-[7px] px-[20px] rounded-[4px] text-[12px] font-medium ${(!isFormValid || isPending) ? 'cursor-not-allowed bg-zinc-300 text-zinc-500' : "bg-gradient-to-r from-[#327bbb] to-[#4c97d9] text-white"}`}
                >
                    {isPending ? (
                        <p className='flex items-center gap-x-[10px]'>
                            <AiOutlineLoading3Quarters className='text-[0.9rem] animate-spin' />
                            Joining
                        </p>
                        ) : 'Join the community'
                    }
                </button>
            </div>
        </div>
    )
}

export default Feedback