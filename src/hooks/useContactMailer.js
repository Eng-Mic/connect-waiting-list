import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useSendContactEmail = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (contactDetail) => {
            const response = await fetch('/api/sendContactEmail', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactDetail),
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to send message');
            }
            return response.json();
        },
        onSuccess: () => {
            // Invalidate message query to refresh the list
            queryClient.invalidateQueries({ queryKey: ['message'] });
            toast.success('Message sent successfully');
        },
        onError: (error) => {
            console.error('Failed to send message:', error);
            toast.error('Failed to send message');
        },
    });
};