import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import RegisterForm from './components/register';

function App() {
  return (
    <Router>
        <Route path="/register" component={RegisterForm}/>        
    </Router>
  );
}

export default App;
