import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Achievements from './pages/Achievements'
import WorkExperience from './pages/WorkExperience'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} exact/>
        <Route path="/achievements" component={Achievements} />
        <Route path="/jobs" component={WorkExperience} />
      </div>
    </Router>
  );
}

export default App;
