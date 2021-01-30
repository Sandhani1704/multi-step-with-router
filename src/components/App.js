import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import SignupForm from './SignupForm/SignupForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <SignupForm />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
