const API = {
    // Account API
    getAccount: '/api/accounts',

    // Company API
    getCompanies: '/api/v1/companies',
    getCompany: '/api/v1/companies', // Add {companyID}
    postCompany: '/api/v1/companies',

    // Programs API
    getPrograms: '/api/v1/companies', // Add {companyId}/programs
    getProgram: '/api/v1/companies',  // Append {companyId}/programs/{programId}


    // Voting Periods API
    getPeriods: '/api/v1/companies', // Append {companyId}/programs/{programId}/periods
    getPeriod: '/api/v1/companies' // Append {companyId}/programs/{programId}/periods/{periodId}

};

module.exports = API;
