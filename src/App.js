import React  from 'react';
import {BrowserRouter as Router, Route} from  'react-router-dom';
import Authentication from "./pages/authentication/authentication.ui";
import {UserContext} from "./context/user_context";
import {VotingContext} from "./context/voting_context";

function App() {
  return (
        <Router>
            <div className="App">
                <Route exact path='/'><Authentication /></Route>
                <Route exact path='/registration'><Authentication /></Route>
            </div>
        </Router>
  );
}

export default App;
