import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

class UserProfile extends React.Component {
    componentDidMount() {
        
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>User Profile</title>
                </Helmet>
                <h1>Profile</h1>
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
)(UserProfile);