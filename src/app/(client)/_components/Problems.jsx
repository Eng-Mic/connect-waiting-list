import React from 'react'
import { PiDotFill } from 'react-icons/pi'

const Problems = () => {
    return (
        <>
            {/* Problems head */}
            <div className="border-b-[1px] border-zinc-300 pb-[10px] mb-[20px]">
                <h2 className="text-[1.35rem] font-semibold">
                    Problems
                </h2>
                <p className="text-[15px] font-medium">
                    What we will be solving as a community.
                </p>
            </div>
            {/* Problems body */}
            <div className="space-y-[1.2rem]">
                {/* Limited access */}
                <div>
                    {/* Heading */}
                    <div className="flex items-center gap-x-[10px] mb-[10px]">
                        <p className="text-[1.2rem] font-semibold">01.</p>
                        <p className="text-[1.1rem] font-semibold">
                            Limited Access to Funding
                        </p>
                    </div>
                    {/* Points */}
                    <div className="text-[15px] font-medium pl-[1rem] space-y-[10px]">
                        {/* Point */}
                        <div className="flex items-start gap-x-[5px]">
                            <div className="min-h-fit">
                                <PiDotFill className="text-[1.2rem]" />
                            </div>
                            <p>
                                More than 94% of entrepreneurs and startups in Sierra Leone struggle to secure funding.
                            </p>
                        </div>
                        {/* Point */}
                        <div className="flex items-start gap-x-[5px]">
                            <div className="min-h-fit">
                                <PiDotFill className="text-[1.2rem]" />
                            </div>
                            <p>
                                This is largely due to a disconnect among key players within the entrepreneurial ecosystem (startups, investors, founders, entrepreneurs, mentors, and etc.)
                            </p>
                        </div>
                    </div>
                </div>

                {/* High failure rate */}
                <div>
                    {/* Heading */}
                    <div className="flex items-center gap-x-[10px] mb-[10px]">
                        <p className="text-[1.2rem] font-semibold">02.</p>
                        <p className="text-[1.1rem] font-semibold">
                            High Failure Rates
                        </p>
                    </div>
                    {/* Point */}
                    <div className="text-[15px] font-medium pl-[1rem] space-y-[10px]">
                        {/* Point */}
                        <div className="flex items-start">
                            <div className="min-h-fit">
                                <PiDotFill className="text-[1.2rem]" />
                            </div>
                            <p>
                                90% of startups, social initiatives, and entrepreneurial ventures close due to various factors such as:
                            </p>
                        </div>
                        {/* Point */}
                        <div className="pl-[1.5rem] space-y-[10px]">
                            {/* Point */}
                            <div className="flex items-start">
                                <div className="min-h-fit">
                                    <PiDotFill className="text-[1.2rem]" />
                                </div>
                                <p>
                                    <span className="font-semibold">Dishonesty</span> in relationships with partners, supporters, and investors.
                                </p>
                            </div>
                            {/* Point */}
                            <div className="flex items-start">
                                <div className="min-h-fit">
                                    <PiDotFill className="text-[1.2rem]" />
                                </div>
                                <p>
                                    <span className="font-semibold">Inconsistent funding</span>, making it hard to maintain momentum.
                                </p>
                            </div>
                            {/* Point */}
                            <div className="flex items-start">
                                <div className="min-h-fit">
                                    <PiDotFill className="text-[1.2rem]" />
                                </div>
                                <p>
                                    <span className="font-semibold">Insufficient training</span> in critical areas like business, entrepreneurship, and digital skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wider Economic and Social Impact  */}
                <div>
                    {/* Heading */}
                    <div className="flex items-center gap-x-[10px] mb-[10px]">
                        <p className="text-[1.2rem] font-semibold">03.</p>
                        <p className="text-[1.1rem] font-semibold">
                            Wider Economic and Social Impact
                        </p>
                    </div>
                    {/* Points */}
                    <div className="text-[15px] font-medium pl-[1rem] space-y-[10px]">
                        <div className="space-y-[10px]">
                            <div className="flex items-start">
                                <div className="min-h-fit">
                                    <PiDotFill className="text-[1.2rem]" />
                                </div>
                                <p>
                                    The economic damage from these failures extends beyond individuals and companies to society at large, wasting not only financial resources but also:
                                </p>
                            </div>
                            <div className="flex items-start pl-[1.5rem]">
                                <div className="min-h-fit">
                                    <PiDotFill className="text-[1.2rem]" />
                                </div>
                                <p>
                                    The time, passion, and skills of people invested in these ventures.
                                </p>
                            </div>
                        </div>
                        {/* Point */}
                        <div className="flex items-start">
                            <div className="min-h-fit">
                                <PiDotFill className="text-[1.2rem]" />
                            </div>
                            <p>
                                These failures result in lost opportunities for economic growth, job creation, and innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Problems