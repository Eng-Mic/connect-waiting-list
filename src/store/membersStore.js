import { create } from 'zustand';

// Zustand store for managing member state
const useMemberStore = create((set) => ({
    members: [], // Initially no members
    setMembers: (members) => set({ members }),
    clearMembers: () => set({ members: [] }),
    removeMember: (id) => set((state) => ({
        members: state.members.filter(member => member.id !== id)
    })),
}));

export default useMemberStore