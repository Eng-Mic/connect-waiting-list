"use client"

import React from 'react'
import Stats from '../../_components/Stats'
// import { members } from '@/data'
import FilterMembers from '../../_components/FilterMembers'
import { useGetMembers } from '@/hooks/useMembers'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import useMemberStore from '@/store/membersStore'



const Dashboard = () => {
    const { isLoading, isError, error } = useGetMembers();
    const members = useMemberStore((state) => state.members);
    const membersArray = members?.members || [];
    
    if (isError) return <p>Error: {error.message}</p>;
    return (
        <div className='mt-[2rem]'>
            <div className="flex items-center justify-between">
                <h2 className='text-[1.5rem] font-semibold'>
                    Members
                </h2>
                <button className='text-[12px] py-[6px] px-[10px] rounded-[5px] bg-zinc-800 text-white'>
                    Create campaign
                </button>
            </div>
            {isLoading ? (
                <div className="w-full h-screen flex items-center justify-center">
                    <p className='flex items-center gap-x-[10px]'>
                        <AiOutlineLoading3Quarters className='text-[1.5rem] animate-spin' />
                    </p>
                </div>
            ) : (
                <>
                    <div className="mt-[1.5rem]">
                        <Stats members={membersArray} />
                    </div>
                    <div className="mt-[3rem]">
                        {membersArray ? (
                            <FilterMembers members={membersArray} />
                        ) : (
                            <div className="flex items-center justify-center">
                                <p className='text-[15px] font-medium'>
                                    No member yet.
                                </p>
                            </div>
                        )}
                        
                    </div>
                </>
            )}
        </div>
    )
}

export default Dashboard