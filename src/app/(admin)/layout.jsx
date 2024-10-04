"use client"

import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const { default: Navigation } = require("./_components/Navigation")


const AdminLayout = ({ children }) => {
    const router = useRouter();
    const { isAuthenticated } = useAuthStore();

    useEffect(() => {
        if(!isAuthenticated) {
            router.push('/login')
        }
        else {
            router.push('/dashboard')
        }
    }, [isAuthenticated, router])
    return (
        <div className='w-full min-h-screen flex'>
            <main className='w-[90%]  mx-auto relative lg:w-[80%] lg:max-w-screen-xl'>
                <div className="pt-[1.5rem] sticky top-0 bg-[#fbfbfb] z-20">
                    <Navigation />
                </div>
                <>
                    {children}
                </>
            </main>
        </div>
    )
}

export default AdminLayout