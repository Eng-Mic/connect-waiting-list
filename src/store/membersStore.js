import { create } from 'zustand';

// Zustand store for managing member state
const useMemberStore = create((set) => ({
    members: [],
    setMembers: (members) => set({ members: Array.isArray(members) ? members : [] }),
    clearMembers: () => set({ members: [] }),
    removeMember: (id) => set((state) => ({
        members: Array.isArray(state.members) 
            ? state.members.filter(member => member._id !== id)
            : []
    })),
}));

export default useMemberStore