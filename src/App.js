import React, { useEffect } from 'react';
import logo from './images/logo.svg';
import Home from './components/Home';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import './style.sass';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App(props) {
  return (
    <Router>
      <Header />
      <div id="content">
        <Switch>
          <TransitionGroup>
            <CSSTransition key={window.location.pathname} classNames="fade" timeout={300}>
              <>
                <Route component={Home} exact={true} path="/" />
                <Route exact={true} path="/programs"></Route>
                <Route exact={true} path="/about"></Route>
              </>
            </CSSTransition>
          </TransitionGroup>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
