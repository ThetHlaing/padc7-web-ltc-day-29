import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import RegisterForm from './components/register';
import SignInForm from './components/signin';
import Departments from './components/departments';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/register" component={RegisterForm} />

        <Route path="/signin" component={SignInForm} />

        <Route path="/departments" render={props => {
          return (
            this.props.token == null ?
              <Redirect to="/signin" />
              :
              <Departments />
          )
        }} />
      </Router>
    );
  }
}


const mapStateToProps = (state) => ({
  token: state.auth
})

export default connect(mapStateToProps)(App);
