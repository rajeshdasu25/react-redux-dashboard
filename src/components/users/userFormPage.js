import React from 'react'
import { connect } from 'react-redux';
import { addNewUser } from '../../actions/users';
import UserForm from './userForm';

class UserFormPage extends React.Component {
    submit = formValues => {
        this.props.addNewUser(formValues);
    }
    render() {
        return <UserForm onSubmit={this.submit} />
    }
}

const mapDispatchToProps = { addNewUser };

// const mapDispatchToProps = dispatch => { debugger;
//     return {
//         addNewUser: () => dispatch(addNewUser())
//     };
// };

export default connect(null, mapDispatchToProps)(UserFormPage);