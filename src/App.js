import React  from 'react';
import {BrowserRouter as Router, Route} from  'react-router-dom';
// import {UserContext} from "./context/user_context";
// import {VotingContext} from "./context/voting_context";
import DashboardPA from "./pages/Dashbaord_PA/dashboard.page";
import ClientRegistration from "./pages/up_registration/up_registration";

import Companies from "./pages/companies/companies.pages";
import Users from './pages/users/users.pages';
import Programs from './pages/programs/programs.pages';
import AuditTrail from './pages/auditTrails/audit.pages';

import {createMuiTheme,
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


const theme = createMuiTheme({
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
        <Router>
           <ThemeProvider theme={theme}>
              <CssBaseline>
                  <div className="App">
                      <Route exact path='/registration'><ClientRegistration /></Route>
                      <Route exact path ='/'><DashboardPA/></Route>
                      <Route exact path='/users'><Users /></Route>
                      <Route exact path='/companies'><Companies /></Route>
                      <Route exact path='/programs'><Programs /></Route>
                      <Route exact path='auditTrail'><AuditTrail /></Route>
                      <Route exact path='/registrations'><ClientRegistration /></Route>
                      <Route exact path='/login'><LoginPage/></Route>
                      <Route exact path='/forgot_password'><ResetPassword/></Route>
                      <Route exact path='/reset_password'><NewPasswordReset/></Route>
                      <Route exact path='/change_password'><ChangePassword/></Route>
                  </div>
              </CssBaseline>
           </ThemeProvider>
        </Router>
  );
}

export default App;
