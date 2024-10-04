import React from 'react'

const Stats = ({ members }) => {
     // Ensure members is always an array
    const safeMembers = Array.isArray(members) ? members : [];

    const totalMembers = safeMembers && safeMembers?.length;
    const totalInvestors = safeMembers && safeMembers?.filter((member) => member?.joinAs === "Investor").length;
    const totalEntrepreneurs = safeMembers && safeMembers?.filter((member) => member?.joinAs === "Entrepreneur").length;
    const others = safeMembers && totalMembers - (totalInvestors + totalEntrepreneurs);
    
    
    return (
        <>
            <div className="grid grid-cols-2 gap-[10px] md:flex md:flex-row md:items-center">
                {/* Total Members */}
                <div className="border-[1px] border-zinc-200 p-[8px] rounded-md md:w-[13rem] md:p-[1rem]">
                    <div className="h-[3rem]">
                        <p className='text-[10px] font-medium uppercase mb-[10px] text-zinc-500'>
                            Total Members
                        </p>
                        <h2 className='text-[1.4rem] font-semibold leading-3 flex items-center gap-2 py-1 md:py-0'>
                            { members ? totalMembers : 0 }
                        </h2>
                    </div>
                </div>
                {/* Investors */}
                <div className="border-[1px] border-zinc-200 p-[8px] rounded-md md:w-[13rem] md:p-[1rem]">
                    <div className="h-[3rem]">
                        <p className='text-[10px] font-medium uppercase mb-[10px] text-zinc-500'>
                            Investors
                        </p>
                        <h2 className='text-[1.4rem] font-semibold leading-3 flex items-center gap-2 py-1 md:py-0'>
                            { members ? totalInvestors : 0 }
                        </h2>
                    </div>
                </div>
                {/* Entrepreneurs */}
                <div className="border-[1px] border-zinc-200 p-[8px] rounded-md md:w-[13rem] md:p-[1rem]">
                    <div className="h-[3rem]">
                        <p className='text-[10px] font-medium uppercase mb-[10px] text-zinc-500'>
                            Entrepreneurs
                        </p>
                        <h2 className='text-[1.4rem] font-semibold leading-3 flex items-center gap-2 py-1 md:py-0'>
                            { members ? totalEntrepreneurs : 0}
                        </h2>
                    </div>
                </div>
                {/* Others */}
                <div className="border-[1px] border-zinc-200 p-[8px] rounded-md md:w-[13rem] md:p-[1rem]">
                    <div className="h-[3rem]">
                        <p className='text-[10px] font-medium uppercase mb-[10px] text-zinc-500'>
                            Others
                        </p>
                        <h2 className='text-[1.4rem] font-semibold leading-3 flex items-center gap-2 py-1 md:py-0'>
                            { members ? others : 0 }
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats