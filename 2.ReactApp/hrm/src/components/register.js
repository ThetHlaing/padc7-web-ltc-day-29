import React from 'react';
import request from 'request';

class RegisterForm extends React.Component {
    constructor() {
        super();
        this.name = React.createRef();
        this.password = React.createRef();
        this.email = React.createRef();
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        // request.post('http://localhost:8088/api/auth/register',
        //     {
        //         form: {
        //             name: this.name.current.value,
        //             email: this.email.current.value,
        //             password: this.password.current.value
        //         }
        //     },
        //     (err, data) => {
        //         console.log(err, data);
        //     });

        const formData = new URLSearchParams();
        formData.append("name", this.name.current.value);
        formData.append("email", this.email.current.value);
        formData.append("password", this.password.current.value);

        fetch('http://localhost:8088/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            mode: 'no-cors',
            body: formData,
        })
            .then(res => res.json())
            .then(data => { console.log(data) })
            .catch(err => { console.log(err) });

    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <lable>Name </lable>
                <input type="text" name="name" ref={this.name}></input><br />
                <lable>Email </lable>
                <input type="email" name="email" ref={this.email}></input><br />
                <lable>Password </lable>
                <input type="password" name="password" ref={this.password}></input><br />
                <button type="submit">Register</button>
            </form>
        )
    }
}

export default RegisterForm;