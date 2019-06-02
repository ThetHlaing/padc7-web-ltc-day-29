import React from 'react';
import { connect } from 'react-redux';
import { retrieveToken } from '../actions/auth';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
} from 'react-router-dom';
class SignInForm extends React.Component {
    constructor() {
        super();
        this.name = React.createRef();
        this.password = React.createRef();
        this.state = {
            redirect: false
        }
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.retrieveToken(
            this.name.current.value,
            this.password.current.value,
            () => {
                this.setState({ redirect: true })
            });

    }

    render() {
        return (
            (this.state.redirect ? <Redirect to='/departments' /> :
                <form onSubmit={this.handleOnSubmit}>
                    <label>Name </label>
                    <input type="text" name="name" ref={this.name}></input><br />
                    <label>Password </label>
                    <input type="password" name="password" ref={this.password}></input><br />
                    <button type="submit">Register</button>
                </form>
            )
        )
    }
}

const mapDispatchToPros = {
    retrieveToken
}

export default connect(null, mapDispatchToPros)(SignInForm);