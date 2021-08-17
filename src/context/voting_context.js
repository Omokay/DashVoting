import React, { createContext, useState } from 'react';
export const VotingContext = createContext(null);

const VotingContextProvider = ({ children }) => {
    const [institution, setInstitution] = useState('');


    return (
        <VotingContext.Provider
            value={{
                institution, setInstitution,
            }}
        >
            {children}
        </VotingContext.Provider>
    )

};

export default VotingContextProvider;
