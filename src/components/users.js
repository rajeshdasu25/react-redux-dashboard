import React from 'react';
import { connect } from 'react-redux';

import { fetchAllUsers } from '../actions/users';

class Users extends React.Component {
    componentDidMount() {
        // this.getUsers();
        this.props.fetchAllUsers();
    }

    /*getUsers = () => {
    fetch('http://localhost:5000/getUsers')
    .then(res => res.json())
    .then(users => this.setState({ users }))
    }*/

    render() {
        const { users } = this.props;
        return (
            <React.Fragment>
                <h1>Users</h1>
                <div className="list-container">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        {users.length ? (
                            <tbody>
                                {users.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        ) : (
                                <tbody>
                                    <tr><td>No Users Found</td></tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);