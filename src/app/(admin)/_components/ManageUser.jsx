"use client"

import React, { useEffect, useState } from 'react'

const ManageUser = ({ onClose, onSubmit, initialData, error }) => {
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        password: "",
        role: "admin",
        status: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({
            ...userData,
            [name]: value
        })
    }
    useEffect(() => {
        if (initialData) {
            // console.log(initialData);
            setUserData((prevData) => ({
                ...prevData,
                ...initialData,
                status: initialData.status || "",
            }));
        }
    }, [initialData])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(initialData) {
            const data = {
                _id: initialData?._id,
                ...userData
            }
            onSubmit(data)
        }
        else {
            onSubmit(userData)
        }
        // console.log({"userData from manage user": userData})
    }
    return (
        <div className='w-full relative'>
            {error && <p>{error.message}</p>}
            <h2 className='text-[1rem] font-medium sm:text-[1.1rem]'>
                {initialData ? "Update user" : "Create user"}
            </h2>
            <button 
                onClick={onClose}
                className='text-[12px] bg-zinc-200 py-[5px] px-[10px] rounded-[5px] absolute top-[-10px] right-0 md:top-[-1rem]'
            >
                close
            </button>
            <form action="" onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-y-[15px] mt-[1rem]'>
                <input 
                    type="text"
                    name="userName"
                    placeholder='Enter user name'
                    value={userData?.userName}
                    onChange={handleChange}  
                    className='w-full text-[13px] font-medium py-[5px] px-[10px] rounded-[5px] bg-transparent border-[1px] border-zinc-400'
                />
                <input 
                    type="email" 
                    name="email"
                    placeholder='Enter user email'
                    value={userData?.email}
                    onChange={handleChange}  
                    className='w-full text-[13px] font-medium py-[5px] px-[10px] rounded-[5px] bg-transparent border-[1px] border-zinc-400'
                />
                <input 
                    type="password" 
                    name="password"
                    placeholder='Enter user password'
                    value={userData?.password}
                    onChange={handleChange}  
                    className='w-full text-[13px] font-medium py-[5px] px-[10px] rounded-[5px] bg-transparent border-[1px] border-zinc-400'
                />
                <select
                    name="status"
                    value={userData?.status}
                    onChange={handleChange}
                    className='w-full text-[13px] font-medium py-[5px] px-[10px] rounded-[5px] bg-transparent border-[1px] border-zinc-400'
                >
                    <option value="" disabled>Select a status</option>
                    <option value="superAdmin">Super Admin</option>
                    <option value="moderateAdmin">Moderate Admin</option>
                </select>
                <button className='w-fit bg-zinc-800 text-[12px] py-[5px] px-[15px] rounded-[5px] text-white'>
                    {initialData ? "Update user" : "Create user"}
                </button>
            </form>
        </div>
    )
}

export default ManageUser