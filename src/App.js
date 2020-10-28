import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients ';
import AddDoctor from './components/AddDoctor/AddDoctor';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/appointment'>
            <Appointment/>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/allPatients">
              <AllPatients></AllPatients>
          </PrivateRoute>
          <Route path='/addDoctor'>
            <AddDoctor/>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>      
      </Router>
    </UserContext.Provider>
  );
}

export default App;
