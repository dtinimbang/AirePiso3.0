import React, { Component } from 'react';
import './App.css';
//import './sass';
import Home from './components/Home/Home';
import About from "./components/pages/About"
import Headers from "./components/Headers/Headers"
import Calc from "./components/pages/Calc"
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom' 



const App = () => (
  <Router>
    <div>
    <Headers />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/calc" component={Calc} />
 </Switch>
  </div>

  </Router> 
)

export default App;




