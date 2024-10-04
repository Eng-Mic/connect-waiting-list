import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useGetUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch('/api/users');
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to fetch users');
            }
            const data = await response.json();
            // console.log('Fetched users data:', data);
            return data;
        }
    });
};

export const useGetUser = (id) => {
    return useQuery(['user', id], async () => {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to fetch user');
        }
        const data = await response.json();
        return data;
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: async ({ _id, ...userData }) => {
            const response = await fetch(`/api/users/update/${_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });
            if (!response.ok) {
                const error = await response.json();
                toast.error(`User update Failed: ${error?.error}`);
                throw new Error(error.error || 'Failed to update user');
            }
            const data = await response.json();
            return data;
        },
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries(['users']);
            queryClient.invalidateQueries(['user', variables.id]);
            toast.success('user updated successfully');
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: async (_id) => {
            const response = await fetch(`/api/users/delete/${_id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id }),
            });
            if (!response.ok) {
                const error = await response.json();
                toast.error(`User Deletion Failed: ${error?.error}`);
                throw new Error(error.error || 'Failed to delete user');
            }
            return response.json();
        },
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries(['users']);
            queryClient.invalidateQueries(['user', variables]);
            toast.success('User deleted successfully');
        },
    });
};
