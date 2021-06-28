import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authThunk } from '../../redux/thunks/authThunk';
import LoginForm from '../LoginForm/LoginForm';
import RegForm from '../RegForm/RegForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import './App.module.css'
import Wall from "../Wall/Wall";
import Concrete from '../Concrete/Concrete';
import Beam from "../Beam/Beam";

import SendProject from '../SendProject/SendProject';
import ManagerPage from "../ManagerPage/ManagerPage";
import Engineer from '../Engineer/Engineer';
import Instruments from '../Instruments/Instruments';
import GeneralFormProject from '../GeneralFormProject/GeneralFormProject';
import Profile from '../Profile/Profile';
import Main from '../Main/Main'
import AddIngeener from '../ManagerPage/AddIngeener/AddIngeener';
import DeleteIngeener from '../ManagerPage/DeleteIngeener/DeleteIngeener';
import Report from '../Report/Report';
import About from '../About/About'
import LoginFormPerson from '../LoginForm/LoginFormPerson'


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authThunk())
  }, [dispatch]);

  return (
    <div>

      <Router>


        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/general" exact>
            <GeneralFormProject />
          </Route>
          <Route path="/concrete" exact>
            <Concrete />
          </Route>
          <Route path="/clientform" exact>
            <SendProject/>
          </Route>
          <Route path="/beam" exact>
            <Beam />
          </Route>
          <Route path="/wall" exact>
            <Wall />
          </Route>
          <Route path="/signup" exact>
            <RegForm />
          </Route>

          <Route path="/login" exact>
            <LoginForm />
          </Route>

          <Route path="/profile" exact>
            <Profile />
          </Route>

          <Route path="/engineerform" exact>
            <GeneralFormProject />
          </Route>

          <Route path="/addIngeener" exact>
            <AddIngeener />
          </Route>

          <Route path="/report" exact>
            <Report />
          </Route>

          <Route path="/deleteIngeener" exact>
            <DeleteIngeener />
          </Route>

          <Route path="/engineer" exact>
            <Engineer />
          </Route>

          <Route path="/manager" exact>
            <ManagerPage />
          </Route>

          <Route path="/instruments" exact>
            <Instruments/>
          </Route>

          <Route path="/about" exact>
            <About/>
          </Route>

          <Route path="/loginperson" exact>
            <LoginFormPerson/>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
