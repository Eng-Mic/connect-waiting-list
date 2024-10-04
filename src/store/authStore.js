"use client"

import { create } from 'zustand';
import { useEffect } from 'react';

const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    setUser: (user) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(user));
            set({ user, isAuthenticated: !!user });
        }
    },
    clearUser: () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('user');
            set({ user: null, isAuthenticated: false });
        }
    },
}));

// Helper hook to initialize the store on client-side
// Function to initialize the store from localStorage when the app starts
export const useAuthInitializer = () => {
    const setUser = useAuthStore((state) => state.setUser);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
    }, [setUser]);
};

export default useAuthStore;
