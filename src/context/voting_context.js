import React, { createContext, useState } from 'react';
export const VotingContext = createContext(null);

const VotingContextProvider = ({ children }) => {
    const [institution, setInstitution] = useState('');
    const [companies, setCompanies] = useState([]);
    const [programs, setPrograms] = useState([]);


    return (
        <VotingContext.Provider
            value={{
                institution, setInstitution,
                companies, setCompanies,
                programs, setPrograms
            }}
        >
            {children}
        </VotingContext.Provider>
    )

};

export default VotingContextProvider;
