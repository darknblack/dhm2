import React, { useEffect } from 'react';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import './style.sass';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import OurSchool from './components/OurSchool';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div id="content">
        <Switch>
          <Route component={Home} exact={true} path="/" />
          <Route exact={true} path="/programs"></Route>
          <Route component={OurSchool} exact={true} path="/our-school" />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
