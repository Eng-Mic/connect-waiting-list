"use client"

import { faqs } from '@/data'
import React, { useState } from 'react'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-y-[3px]'>
                <p className='text-[1.2rem] font-semibold'>
                    FAQs
                </p>
                <p className='text-[15px] font-medium'>
                    Everything you need to know
                </p>
            </div>
            <div className="mt-[3rem] space-y-4 md:max-w-[90%] mx-auto">
                {faqs.map((faq, index) => (
                    <div key={faq.id} className="border-b border-zinc-200 pb-[8px]">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h2 className="text-[15.5px] font-semibold">
                                {faq.question}
                            </h2>
                            <span className="text-xl text-zinc-700">
                                {activeIndex === index ? '-' : '+'}
                            </span>
                        </div>
                        <div
                            className={`mt-2 overflow-hidden transition-all ease duration-200 ${activeIndex === index ? 'max-h-screen bg-zinc-50 p-[1rem] rounded-[5px]' : 'max-h-0'}`}
                        >
                            <p className="text-zinc-800 text-[14.4px] font-medium whitespace-pre-line">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FAQ