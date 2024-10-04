import useAuthStore from '@/store/authStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
// Registration function using React Query
export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userData) => {
      // console.log({"userData from useAuth": userData});
      
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      // console.log({"response": response});
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error || 'Registration failed');
        throw new Error(errorData.error || 'Failed to register');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries('user');
      toast.success('User created successfully');
    },
  });
};

// Login function using React Query
export const useLogin = () => {
  const queryClient = useQueryClient();
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: async (credentials) => {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error || 'Login failed');
        throw new Error(errorData.error || 'Login failed');
      }

      const data = await response.json();
      return data;
    },
    onSuccess: (data) => {
      setUser(data.user); // Store the user in Zustand
      queryClient.invalidateQueries('user');
      toast.success('Logged in successfully');
    },
    onError: (error) => {
      toast.error(error.message || 'Login failed');
    },
  });
};

