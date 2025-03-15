import { createContext, useContext, useState } from "react";
import { getStoredGroups } from "./purchaseService";
import api from "./api";
const GroupContext = createContext();

export function GroupProvider({ children }) {
    const [Groups, setGroups] = useState(getStoredGroups() || []);


    async function ListOfGroup() {
        try {
            const response = await api.get('/api/purchase-goals');
            const groups = response.data.data
            localStorage.setItem('groupList', JSON.stringify(groups))
          setGroups(groups)
        } catch (error) {
            console.error('login failed', error.response?.data || error.message);
            throw error;
        }

    }



    return (
        <GroupContext.Provider value={{Groups, ListOfGroup }}>
            {children}
        </GroupContext.Provider>
    );
}

export function useGroup() {
    return useContext(GroupContext);
}

