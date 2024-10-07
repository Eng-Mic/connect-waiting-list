"use client"


// import { users } from '@/data'
import React, { useState } from 'react'
import { BiSolidEditAlt } from 'react-icons/bi'
import { BsFillTrash3Fill } from 'react-icons/bs'
import ManageUser from './ManageUser'
import { useDeleteUser, useGetUsers, useUpdateUser } from '@/hooks/useUsers'
import { cn } from '@/lib/utils'
import useAuthStore from '@/store/authStore'

const Users = () => {
    const [manageUserModel, setManageUserModel] = useState(false);
    const [formData, setFormData] = useState([]);

    const { data, isLoading, isError, error } = useGetUsers();
    const { mutate: updateUser } = useUpdateUser();
    const { mutate: deleteUser } = useDeleteUser();

    const { user } = useAuthStore();

    const handleOpenModal = (user) => {
        setFormData(user);
        setManageUserModel(true);
    };

    const handleCloseModal = () => {
        setManageUserModel(false);
        setFormData(null);
    };

    const handleUpdateUser = (data) => {
        updateUser(data);
        handleCloseModal();
    }

    const handleDeleteUser = (userId) => {
        deleteUser(userId);
    }

    // Handle loading and error states
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    return (
        <>
            <div className="w-[100%] mx-auto relative">
                <div className="w-full grid grid-cols-2 gap-x-[1rem] capitalize border-b-[1px] border-zinc-500 font-medium text-[14px] md:grid-cols-5 sm:gap-x-[1.5rem] md:text-[15px]">
                    {['Name', 'email', 'role', 'status']?.map((head, index) => (
                        <h2 className={`${index === 1 ?  "md:col-span-2" : index === 2 ? 'hidden md:flex' : user?.status === 'moderateAdmin' && index === 3 ? 'hidden md:hidden' : 'hidden md:flex'}`} key={index}>
                            {head}
                        </h2>
                    ))}
                </div>
                {data?.users?.map((admin) => (
                    <div 
                        role='button'
                        onClick={() => handleOpenModal(admin)}
                        className={cn("group/member grid grid-cols-2 gap-x-[1.5rem] border-b-[1px] border-zinc-400 font-medium text-[12px] py-[15px]  cursor-pointer hover:bg-zinc-100 transition-all ease-in-out duration-300 last:border-0 relative md:grid-cols-5 md:text-[13px]", user?.status === "moderateAdmin" && admin?.status === "superAdmin" ? 'hidden' : '')} key={admin?._id}
                    >
                        {/* userName */}
                        <div className="line-clamp-1">
                            {admin?.userName}
                        </div>
                        {/* email */}
                        <div className="line-clamp-1 md:col-span-2">
                            {admin?.email}
                        </div>
                        {/* role */}
                        <div className="hidden md:flex">
                            {admin?.role}
                        </div>
                        {/* status */}
                        <div className={cn("hidden line-clamp-1 md:flex", user?.status === 'moderateAdmin' && 'hidden md:hidden')}>
                            {admin?.status}
                        </div>
                        <div className="hidden items-center gap-x-[15px] px-[15px] text-[1rem] h-full absolute top-0 right-0 bg-gradient-to-r from-zinc-100 to-zinc-300 opacity-0 group-hover/member:opacity-100 transition md:flex">
                            <BiSolidEditAlt
                                role='button'
                                onClick={() => handleOpenModal(admin)}
                                className='cursor-pointer'
                            />
                            <BsFillTrash3Fill
                                role='button'
                                onClick={() => handleDeleteUser(admin?._id)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {manageUserModel && (
                <div className=" h-fit p-[2rem] bg-zinc-100 rounded-[5px] z-40 fixed top-[2rem] left-0 right-0 mx-auto md:w-[60%]">
                    <ManageUser
                        onClose={handleCloseModal} 
                        onSubmit={handleUpdateUser}
                        initialData={formData}
                    />
                </div>
            )}
        </>
    )
}

export default Users