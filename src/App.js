import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Navlist from './components/nav/Navlist';
import Home from './components/contents/Home';
import Verbs from './components/contents/Verbs';
import Something from './components/contents/Something';
import Voclist from './components/contents/Voclist';

function App() {
  return (
    <Router>
    <div className="App">
    <Navlist />
    <Route exact path="/">
    <Home/>
    </Route>
    <Route path="/voclist">
    <Voclist />
    </Route>
    <Route path="/verbs">
    <Verbs />
    </Route>
    <Route path="/something">
    <Something />
    </Route>
    </div>
    </Router>
    );
  }
  
  export default App;