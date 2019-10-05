import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchAllUsers } from '../actions/users';

class Users extends React.Component {
    componentDidMount() {
        this.props.fetchAllUsers();
    }

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
                        <tbody>
                            {users && (users.length > 0) && users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                );
                            })}
                            {users && (users.length === 0) && <tr><td colSpan="4"><div className="loader-container">
                                <Loader type="Watch" color="#00BFFF" />
                            </div></td></tr>}
                            {!users && <tr><td colSpan="4">No data found..!!!</td></tr>}
                        </tbody>
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