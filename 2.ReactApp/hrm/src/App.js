import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import RegisterForm from './components/register';
import SignInForm from './components/signin';

function App() {
  return (
    <Router>
        <Route path="/register" component={RegisterForm}/>        

        <Route path="/signin" component={SignInForm}/>        
    </Router>
  );
}

export default App;
