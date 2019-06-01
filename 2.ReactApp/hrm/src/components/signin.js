import React from 'react';
import { connect } from 'react-redux';
import { retrieveToken } from '../actions/auth';

class SignInForm extends React.Component {
    constructor() {
        super();
        this.name = React.createRef();
        this.password = React.createRef();
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.retrieveToken(this.name.current.value, this.password.current.value);

    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label>Name </label>
                <input type="text" name="name" ref={this.name}></input><br />
                <label>Password </label>
                <input type="password" name="password" ref={this.password}></input><br />
                <button type="submit">Register</button>
            </form>
        )
    }
}

const mapDispatchToPros = {
    retrieveToken
}

export default connect(null, mapDispatchToPros)(SignInForm);