import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import About from './about';
import Shop from './shop';
import {BrowserRouter as router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
        <Nav />
        <Route path="/about" component={About}/>
        <Route path="/shop" component={Shop}/>
      </div>
    </Router>
  );
}

export default App;
 