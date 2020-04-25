import React, { useEffect } from 'react';
import logo from './images/logo.svg';
import Home from './components/Home';
import './App.css';
import './style.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Menu />
      <div id="content">
        <Switch>
          <Route exact={true} path="/">
            <Home />
            saddddsd
          </Route>
          <Route exact={true} path="/programs">
            programssssssssss
          </Route>
          <Route exact={true} path="/about">
            about
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
