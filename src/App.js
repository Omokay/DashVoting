import React  from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from  'react-router-dom';
import DashboardPA from "./pages/dashbaords/dashboard.up";
import ClientRegistration from "./pages/client_registration/clientregistration.pages"

import Companies from "./pages/companies/companies.pages";
import Users from './pages/users/users.up';
import Programs from './pages/programs/programs.pages';
import AuditTrail from './pages/auditTrails/audit.pages';

import {createTheme,
        Theme,
        ThemeProvider
} from "@material-ui/core/styles";
import blue from '@material-ui/core/colors/blue';

import Avenir from './static/fonts/Avenir.ttc';
import {CssBaseline} from "@material-ui/core";

import './App.css';
import LoginPage from "./pages/authentication/login.page";
import ResetPassword from "./pages/authentication/resetpassword.page";
import NewPasswordReset from "./pages/authentication/newpassword.page";
import ChangePassword from "./pages/authentication/changepassword.page";
import UpRegistration from "./pages/up_registration/up_registration";
import ClientDashboard from "./pages/dashbaords/dashboard.client";
import UsersAdmin from "./pages/users/users.up";
import UsersClient from "./pages/users/users.client";
import PendingRequests from "./pages/pending_registrations/pending_reg.page";
import VotingContextProvider from "./context/voting_context";
import VerifyPhone from "./pages/client_registration/verifyphone.page";
import CompanyInfo from "./pages/client_registration/companysinfo.page";
import ContactPerson from "./pages/client_registration/contactperson.page";
import LoginInfo from "./pages/client_registration/loginInfo.page";
import AddProgram from "./pages/programs/addPrograms.page";
import AddVotingPeriod from "./pages/programs/addVotingPeriod.page";

const avenir = {
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('Avenir'),
    local('Avenir-Heavy-05'),
    local('AvenirLTStd-Medium'),
    local('futura'),
    url(${Avenir}) format('ttc', 'ttf', 'otf')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};


const theme = createTheme({
    palette: {
        // primary: '#3DB2FF',
        primary: {
            main: blue[500],
        },
        secondary: {
            main: '#ccc',
        }
    },
    typography: {
        fontFamily: 'Avenir, Futura',
        button: {
            textTransform: "none"
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [avenir],
            },
        },
    }
});

function App() {
  return (
      <VotingContextProvider>
          <Router>
              <ThemeProvider theme={theme}>
                  <CssBaseline>
                      <div className="App">
                          <Route exact path ='/'><DashboardPA/></Route>
                          <Route exact path='/dashboard'><ClientDashboard /></Route>


                          <Route exact path='/users'><UsersAdmin /></Route>
                          <Route exact path='/users_'><UsersClient /></Route>

                          <Route exact path='/onboarding'><ClientRegistration /></Route>

                          <Route exact path='/companies'><Companies /></Route>
                          <Route exact path='/programs'><Programs /></Route>

                          <Route exact path='/pending_requests'><PendingRequests /></Route>
                          <Route exact path='auditTrail'><AuditTrail /></Route>

                          <Route exact path='/login'><LoginPage/></Route>
                          <Route exact path='/forgot_password'><ResetPassword/></Route>
                          <Route exact path='/reset_password'><NewPasswordReset/></Route>
                          <Route exact path='/change_password'><ChangePassword/></Route>
                          <Route exact path='/setup'><UpRegistration /></Route>


                          <Route exact path='/verify_phone'><VerifyPhone/></Route>
                          <Route exact path='/company_info'><CompanyInfo /></Route>
                          <Route exact path='/contact_person'><ContactPerson /></Route>
                          <Route exact path='/login_info'><LoginInfo/></Route>
                          <Route exact path='/add_programs'><AddProgram/></Route>
                          <Route exact path='/add_voting_period'><AddVotingPeriod/></Route>

                      </div>
                  </CssBaseline>
              </ThemeProvider>
          </Router>
      </VotingContextProvider>
  );
}

export default App;
