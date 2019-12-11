import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

class Login extends React.Component {
    componentDidMount() {
        
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <h1>Login</h1>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    /*return {
        users: state.users
    };*/
    return null;
};

const mapDispatchToProps = dispatch => {
    /*return {
        fetchAllUsers: () => dispatch(fetchAllUsers())
    };*/
    return null;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);