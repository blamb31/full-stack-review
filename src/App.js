import React from 'react';
import logo from './logo.svg';
import './App.css';

import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import PostsContainer from './Components/PostsContainer';
import LandingPage from './Components/LandingPage';
import Header from './Components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/posts' component={PostsContainer} />
      </Switch>

    </Router>
  );
}

export default App;
