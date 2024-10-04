import useMemberStore from '@/store/membersStore';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

// Hook to fetch all members
export const useGetMembers = () => {
    const queryClient = useQueryClient();
    const setMembers = useMemberStore((state) => state.setMembers);
    const { data, isError, isLoading, error } = useQuery({
        queryKey: ['members'],
        queryFn: async () => {
            const response = await fetch("/api/members");
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to fetch members');
            }
            const data = await response.json();
            return data;
        },
        onError: (error) => {
            console.error('Failed to fetch members:', error);
            toast.error('Failed to fetch members');
        },
    });

    useEffect(() => {
        if (data && Array.isArray(data.members)) {
            setMembers(data.members);
        }
    }, [data, setMembers]);

    // Provide a refetch function
    const refetchMembers = () => {
        queryClient.invalidateQueries(['members']);
    };

    return { data, isError, isLoading, error, refetchMembers };
};

// Hook to fetch a single member by ID
export const useGetMember = (_id) => {
    const { data, isError, error } = useQuery({
        queryKey: ['member', _id],
        queryFn: async () => {
            const response = await fetch(`/api/members/${id}`);
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || `Failed to fetch member with id: ${_id}`);
            }
            return response.json();
        },
    });

    return { data, isError, error };
};

// Hook to create a new member
export const useCreateMember = () => {
    const queryClient = useQueryClient();
    const setMembers = useMemberStore((state) => state.setMembers);
    const members = useMemberStore((state) => state.members);

    return useMutation({
        mutationFn: async (newMember) => {
            const response = await fetch('/api/members/joinWaitList', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMember),
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to join waitlist');
            }
            return response.json();
        },
        onSuccess: (data, variables) => {
            // Invalidate members query to refresh the list
            queryClient.invalidateQueries({ queryKey: ['members'] });

            // Update Zustand store by adding the newly created member
            setMembers((prevMembers) => [...prevMembers, variables]);
        },
        onError: (error) => {
            console.error('Failed to create member:', error);
        },
    });
};

// Hook to update an existing member
export const useUpdateMember = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({_id, ...updatedMember}) => {
            const response = await fetch(`/api/members/update/${_id}`, { 
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedMember),
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to update member');
            }
            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['members'] });
        },
        onError: (error) => {
            console.error('Failed to update member:', error);
        },
    });
};

// Hook to delete a member
export const useDeleteMember = () => {
    const queryClient = useQueryClient();
    const removeMember = useMemberStore((state) => state.removeMember);

    return useMutation({
        mutationFn: async (id) => {
            const response = await fetch(`/api/members/delete/${id}`, { 
                method: 'DELETE', 
            });
            if (!response.ok) {
                const error = await response.json();
                toast.error('Member deletion failed');
                throw new Error(error.error || 'Failed to delete member');
            }
             return response.json();
        },
        onSuccess: (data, id) => {
            removeMember(id); // Update the Zustand store
            queryClient.invalidateQueries({ queryKey: ['members'] });
            toast.success('Member deleted');
        },
        onError: (error) => {
            console.error('Failed to delete member:', error);
            toast.error('Failed to delete member');
        },
    });
};