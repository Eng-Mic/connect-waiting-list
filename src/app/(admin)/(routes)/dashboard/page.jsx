"use client"

import React from 'react'
import Stats from '../../_components/Stats'
// import { members } from '@/data'
import FilterMembers from '../../_components/FilterMembers'
import { useGetMembers } from '@/hooks/useMembers'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import useMemberStore from '@/store/membersStore'



const Dashboard = () => {
    const { isLoading, isError, error, refetchMembers  } = useGetMembers();
    const members = useMemberStore((state) => state.members);

    // console.log(members)
    
    if (isError) return <p>Error: {error.message}</p>;
    return (
        <div className='mt-[2rem]'>
            <div className="flex items-center justify-between">
                <h2 className='text-[1.5rem] font-semibold'>
                    Members
                </h2>
                {/* <button className='text-[12px] py-[6px] px-[10px] rounded-[5px] bg-zinc-800 text-white'>
                    Create campaign
                </button> */}
            </div>
            {isLoading ? (
                <div className="w-full h-screen flex items-center justify-center">
                    <p className='flex items-center gap-x-[10px]'>
                        <AiOutlineLoading3Quarters className='text-[1.5rem] animate-spin' />
                    </p>
                </div>
            ) : members.length > 0 ? (
                <>
                    <div className="mt-[1.5rem]">
                        <Stats members={members} />
                    </div>
                    <div className="mt-[3rem]">
                        <FilterMembers members={members} />
                    </div>
                </>
            ) : (
                <div className="flex items-center justify-center h-[50vh]">
                    <p className='text-[15px] font-medium'>
                        No member yet.
                    </p>
                </div>
            )}
        </div>
    )
}

export default Dashboard