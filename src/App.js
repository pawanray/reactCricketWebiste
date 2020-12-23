import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Footer from './components/footer';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Team from './pages/team/team';
import Home from './pages/home/home';
import Players from './pages/players/players';
import LoginComponent from './pages/auth/login';
import RegisterComponent from './pages/auth/register';

import { useSelector } from 'react-redux'
import UsersList from './pages/admin/usersList';
import PlayersList from './pages/admin/playersList';
import TeamsList from './pages/admin/teamsList';
import ToastComponent from './components/Toast';

function App(props) {
  const { modalInfo } = useSelector(state => state.modal)
  return (
    <Router>
      <Container fluid>
        <Navbar />
          <Switch>
            <Route exact path="/team" component={Team}/>
            <Route exact path="/players" component={Players}/>
            <Route exact path="/usersList" component={UsersList} />
            <Route exact path="/playersList" component={PlayersList} exact/>
            <Route exact path="/teamsList" component={TeamsList} exact/>
            <Route exact path="/" component={Home} exact/>
          </Switch>
        <Footer />
        {modalInfo.type === "Login" ? <LoginComponent modalInfo={modalInfo} /> : null}
        {modalInfo.type === "Register" ? <RegisterComponent modalInfo={modalInfo} /> : null}
      </Container>

      {/* <ToastComponent/> */}
      </Router>
  );
}

export default App;