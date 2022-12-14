import React, { createContext } from 'react';
export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {

    return (
        <UserContext.Provider
            value={{
            }}
        >
            {children}
        </UserContext.Provider>
    )

};

export default UserContextProvider;
