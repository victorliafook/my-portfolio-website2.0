import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} exact/>
      </div>
    </Router>
  );
}

export default App;
