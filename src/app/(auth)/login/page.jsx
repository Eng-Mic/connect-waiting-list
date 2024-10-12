"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ConnectLogo from '/public/logo.png'
import { useLogin } from '@/hooks/useAuth'
import useAuthStore from '@/store/authStore'
import { useRouter } from 'next/navigation'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Link from 'next/link'

const Login = () => {
    const router = useRouter();
    const { isAuthenticated } = useAuthStore();
    
    const { mutate: login, isPending } = useLogin();
    // Track whether the input is touched
    const [inputTouched, setInputTouched] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        if(isAuthenticated) {
            router.push('/dashboard')
            router.refresh()
        }
    }, [isAuthenticated, router])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
    };

    const isFormValid = formData.email && formData.password;

    return (
        <div>
            <div className='w-[98%] h-screen mx-auto flex justify-center items-center sm:w-[55%] lg:w-[30%]'>
                <div className="w-full p-5 my-8 bg-zinc-100 rounded-sm flex flex-col justify-center items-center md:p-8">
                    <Link href='/' className="">
                        <Image
                            src={ConnectLogo}
                            alt='Connect logo'
                            // width={1200} height={800}
                            // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                            loading="lazy"
                            className='w-[5rem] mb-[1rem]'
                        />
                    </Link>
                     
                    <h2 className='text-[15.5px] text-center font-medium mt-2 mb-5'>
                        Login to your account
                    </h2>
                    
                    <form action="" onSubmit={handleSubmit} className="w-[100%] flex flex-col mb-[10px]">
                        <input
                            type="email"
                            placeholder='you@example.com'
                            name='email'
                            onFocus={() => setInputTouched(true)}
                            onBlur={(e) => setInputTouched(e.target.value === '')}
                            value={formData?.email}
                            onChange={handleChange}
                            className={`border ${inputTouched ? 'border-red-500' : 'border-slate-500'} bg-transparent rounded-md py-2 px-4 text-[12.5px]`} 
                        />

                        <input
                            type="password"
                            placeholder='enter your password'
                            name='password'
                            onFocus={() => setInputTouched(true)}
                            onBlur={(e) => setInputTouched(e.target.value === '')}
                            value={formData?.password}
                            onChange={handleChange}
                            className={`border ${inputTouched ? 'border-red-500' : 'border-slate-500'} bg-transparent rounded-md py-2 px-4 text-[12.5px] mt-[1rem]`} 
                        />
                        
                        <button
                            type='submit'
                            disabled={!isFormValid || isPending}
                            className={`flex items-center justify-center py-[8px] px-[20px] rounded-[5px] text-[13px] font-medium mt-[1rem] ${!isFormValid || isPending ? 'cursor-not-allowed bg-zinc-300 text-zinc-500' : "bg-zinc-700 text-white"}`}
                        >
                            {isPending ? (
                                <p className='flex items-center gap-x-[10px]'>
                                    <AiOutlineLoading3Quarters className='text-[1rem] animate-spin' />
                                    Logging
                                </p>
                                ) : 'Login'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login