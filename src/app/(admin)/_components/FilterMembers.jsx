"use client"

import React, { useState } from 'react'
import { BsEye, BsFillTrash3Fill } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'
import { cn } from '@/lib/utils'
import Member from './Member'
import { useDeleteMember } from '@/hooks/useMembers'

const joinAs = ["Default", "Entrepreneur", "Investor", "Others"]
const FilterMembers = ({ members }) => {
    const [expanded, setExpanded] = useState(false);
    const [member, setMember] = useState({})
    const [joinAsFilter, setJoinAsFilter] = useState(false);
    const [activeJoinAs, setActiveJoinAs] = useState('default');

    const { mutate: deleteMember } = useDeleteMember();
    
    const filteredMembers = activeJoinAs === 'default'
        ? members
        : activeJoinAs === 'others' 
            ? members.filter(member => 
                member.joinAs.toLowerCase().replace(/\s+/g, '-') !== 'entrepreneur' && member.joinAs.toLowerCase().replace(/\s+/g, '-') !== 'investor'
            ) 
            : members.filter(member => 
                member.joinAs.toLowerCase().replace(/\s+/g, '-') === activeJoinAs
            );
    const deleteAMember = (id) => {
        deleteMember(id);
    }
    return (
        <div className='relative'>
            {expanded ? (
                <div
                    onClick={() => {
                        setExpanded(false);
                    }}
                    className = "fixed inset-0 bg-black opacity-40 z-20"
                />
            ) : null}
            <div className="grid grid-cols-2 gap-x-[1rem] capitalize border-b-[1px] border-zinc-500 font-medium text-[14px] px-[5px] md:grid-cols-5 md:gap-x-[1.5rem] md:text-[15px]">
                {['full name', 'email', 'phone number', 'join As', 'business | org. name']?.map((head, index) => (
                    <div
                        role='button'
                        onClick={() => setJoinAsFilter(!joinAsFilter)}
                        className={cn("relative py-[5px]", head === 'join As' ? 'cursor-pointer hover:bg-zinc-200 rounded-[4px] px-[10px]' : index === 1 ||index === 2 || index === 4 ? 'hidden md:flex' : '')} key={index}
                    >
                        <h2 className='flex items-center justify-between'>
                            {head}
                            {head === 'join As' && <IoMdArrowDropdown />}
                        </h2>
                        {joinAsFilter && head === 'join As' && (
                            <div className="w-[11.8rem] flex flex-col gap-[10px] border-[1px] border-zinc-400 bg-zinc-100 py-[10px] px-[5px] rounded-[5px] absolute top-[2rem] right-0 z-10">
                                {joinAs?.map((join, index) => (
                                    <div
                                        onClick={() => {
                                            setActiveJoinAs(join.toLowerCase().replace(/\s+/g, '-'))
                                            setJoinAsFilter(false)
                                        }}
                                        key={index}
                                        className={cn("border-b-[1px] border-zinc-300 py-[5px] text-[13px] text-zinc-700 px-[10px] hover:bg-zinc-200 transition-all ease-in-out duration-300 last:border-0", activeJoinAs && activeJoinAs === join.toLowerCase().replace(/\s+/g, '-') ? 'bg-zinc-300 rounded-[4px]' : '')}
                                    >
                                        {join}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {filteredMembers.length > 0 && filteredMembers?.map((member) => (
                <div className="group/member hover:bg-zinc-100 transition-all ease-in-out duration-300 relative" key={member?._id}>
                    <div
                        role='button'
                        onClick={() => {
                            setExpanded(true)
                            setMember(member)
                        }}
                        className="grid grid-cols-2 gap-x-[1rem] border-b-[1px] border-zinc-400 font-medium text-[13px] py-[15px] px-[5px] cursor-pointer last:border-0 md:grid-cols-5 md:gap-x-[1.5rem] md:text-[14px]" 
                    >
                        <div className="line-clamp-1">
                            {member?.fullName}
                        </div>
                        <div className="hidden line-clamp-1 md:flex">
                            {member?.email}
                        </div>
                        <div className="hidden md:flex">
                            {member?.phoneNumber}
                        </div>
                        <div className="line-clamp-1 px-[10px]">
                            {member?.joinAs}
                        </div>
                        <div className="hidden md:line-clamp-1">
                            {member?.nameOfBusiness}
                        </div>
                        
                    </div>
                    <div className="hidden items-center gap-x-[15px] px-[15px] text-[1rem] h-full absolute top-0 right-0 bg-gradient-to-r from-zinc-100 to-zinc-300 opacity-0 group-hover/member:opacity-100 transition md:flex">
                        <BsEye
                            role='button'
                            onClick={() => {
                                setExpanded(true)
                                setMember(member)
                            }}
                            className='cursor-pointer'
                        />
                        <BsFillTrash3Fill
                            role='button'
                            onClick={() => deleteAMember(member?._id)}
                            className='cursor-pointer'
                        />
                    </div>
                </div>
            ))}

            {expanded && (
                <div className="w-[100%] min-h-screen shadow-sm fixed top-[0.2rem] right-0 rounded-[5px] overflow-y-auto sm:top-0 sm:right-0 bg-zinc-50 pt-[1rem] px-[1rem] z-30 sm:w-[30rem]">
                    <div className=" flex items-center justify-between border-b-[1px] border-zinc-200 pb-[5px] mb-[5px]">
                        <h2 className='text-[1rem] font-medium lg:text-[1.1rem]'>
                            Member: <span className='text-[14px] font-semibold'>{member?._id}</span>
                        </h2>
                        <div className="flex items-center gap-x-[10px]">
                            <BsFillTrash3Fill
                                role='button'
                                onClick={() => deleteAMember(member?._id)}
                                className='cursor-pointer md:hidden'
                            />
                            <button 
                                onClick={() => setExpanded(false)}
                                className='text-[12px] bg-zinc-200 py-[5px] px-[10px] rounded-[4px]'
                            >
                                close
                            </button>
                        </div>
                    </div>
                    <div className="w-[100%] h-[42rem] overflow-y-auto py-[1rem] md:h-[33rem]">
                        <Member member={member} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default FilterMembers