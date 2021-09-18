import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navlist from './components/Navlist';
import Home from './contents/Home';
import Verbs from './contents/Verbs';
import Something from './contents/Something';
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