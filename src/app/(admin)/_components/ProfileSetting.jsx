"use client"

import { users } from '@/data'
import React, { useState } from 'react'
import Users from './Users'
import Profile from './Profile'
import { cn } from '@/lib/utils'
import ManageUser from './ManageUser'
import { useRegister } from '@/hooks/useAuth'

const ProfileSetting = () => {
    const [currentTab, setCurrentTab] = useState(1);
    const [manageUserModel, setManageUserModel] = useState(false);
    const [formData, setFormData] = useState([]);

    const { mutate: register, error } = useRegister();

    const handleOpenModal = (user) => {
        setFormData(user);
        setManageUserModel(true);
    };

    const handleCloseModal = () => {
        setManageUserModel(false);
        setFormData(null);
    };

    const handleSaveUser = (data) => {
        // console.log({"data from profile setting": data})
        register(data);
        handleCloseModal();
    }
    const renderTabContent = () => {
        switch (currentTab) {
            case 1:
                return (
                    <Profile />
                );
            case 2:
                return (
                    <Users />
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className='w-[100%] mx-auto relative'>
                <div className="flex justify-between items-end mb-[2rem]">
                    {/* Tabs */}
                    <div className="flex items-center gap-x-[1rem]">
                        {['Profile', 'Users'].map((item, index) => (
                            <div 
                                role='button'
                                onClick={() => setCurrentTab(index + 1)}
                                key={index}
                                className={cn("text-[15px] text-zinc-500 font-medium", currentTab === index + 1 && "text-zinc-800 font-semibold")}
                            >
                                <p>
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* Create new user btn */}
                    <button 
                        onClick={() => handleOpenModal(null)}
                        className='text-[11px] py-[6px] px-[10px] rounded-[5px] bg-zinc-800 text-white sm:text-[12px]'
                    >
                        Create new user
                    </button>
                </div>
                
                {/* Render current atb content */}
                <div className="">
                    { renderTabContent() }
                </div>
            </div>
            {manageUserModel && (
                <div className="h-fit p-[2rem] bg-zinc-100 rounded-[5px] z-30 fixed top-[2rem] left-0 right-0 mx-auto md:max-w-[60%]">
                    <ManageUser 
                        onClose={handleCloseModal} 
                        onSubmit={handleSaveUser}
                        initialData={formData}
                        error={error}
                    />
                </div>
            )}
        </>
        
    )
}

export default ProfileSetting