import React from 'react';
import { connect } from 'react-redux';
import { insert_department } from '../actions/departments';

class NewDepartmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();

    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.insert_department(
            this.props.token,
            this.name.current.value
        );
    }
    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label>New Department :
                    <input ref={this.name}></input>
                </label>
                <button>Add</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.auth
});

const mapDispatchToProps = {
    insert_department
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDepartmentForm);