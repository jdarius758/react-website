import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import dior from './components/pages/dior';
import gucci from './components/pages/gucci';
import nike from './components/pages/nike';
import ralph from './components/pages/ralph';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dior' component={dior} />
          <Route path='/gucci' component={gucci} />
          <Route path='/nike' component={nike} />
          <Route path='/ralph' component={ralph} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
