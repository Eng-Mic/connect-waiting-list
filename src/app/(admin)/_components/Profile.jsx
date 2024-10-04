import useAuthStore from '@/store/authStore';
import React from 'react'

const Profile = () => {
    const { user } = useAuthStore();
    return (
        <>
            <div className="w-[70%] space-y-[10px]">
                {/* Name */}
                <div className="grid grid-cols-2 gap-[1rem]">
                    <p className="text-[14px] font-medium sm:text-[15px]">
                        Username:
                    </p>
                    <p className='text-[13px] font-medium'>
                        {user?.userName}
                    </p>
                </div>
                {/* Email */}
                <div className="grid grid-cols-2 gap-[1rem]">
                    <p className="text-[14px] font-medium sm:text-[15px]">
                        Email:
                    </p>
                    <p className='text-[13px] font-medium'>
                        {user?.email}
                    </p>
                </div>
                {/* Role */}
                <div className="grid grid-cols-2 gap-[1rem]">
                    <p className="text-[14px] font-medium sm:text-[15px]">
                        Role:
                    </p>
                    <p className='text-[13px] font-medium'>
                        {user?.role}
                    </p>
                </div>
                {/* Status */}
                <div className="grid grid-cols-2 gap-[1rem]">
                    <p className="text-[14px] font-medium sm:text-[15px]">
                        Status:
                    </p>
                    <p className='text-[13px] font-medium'>
                        {user?.status}
                    </p>
                </div>
            </div>
        </>
    ) 
}

export default Profile