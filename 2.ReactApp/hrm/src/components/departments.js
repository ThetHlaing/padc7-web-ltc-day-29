import React from 'react';
import { connect } from 'react-redux';
import { retrieve_departments } from '../actions/departments';
import NewDepartmentForm from './newdepartment';

class Departments extends React.Component {
    constructor(props) {
        super(props);
        this.props.retrieve_departments(this.props.token);
        console.log(this.props.token);
    }

    render() {
        console.log(this.props.departments);
        return (
            <div>
                <h2>List of departments here</h2>
                <ul>
                    {
                        this.props.departments.map(
                            item => <li key={item.id}>{item.name}</li>
                        )
                    }
                </ul>
                <NewDepartmentForm/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        token: state.auth,
        departments: state.departments
    }
};

const mapDispatchToProps = {
    retrieve_departments
}

export default connect(mapStateToProps, mapDispatchToProps)(Departments)