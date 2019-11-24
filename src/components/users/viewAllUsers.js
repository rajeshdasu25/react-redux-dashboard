import React from 'react';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Button/*, Modal*/ } from 'react-bootstrap';

import ModalPopup from '../common/ModalPopup';
import UserFormPage from './userFormPage';
import { fetchAllUsers } from '../../actions/users';
import { getModalStatus, showModal, hideModal } from '../../actions/modal';

class ViewAllUsers extends React.Component {
    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.getModalStatus();
    }
    handleShowModal = (type, status) => {
        this.props.showModal(type, status);
    }
    handleHideModal = () => {
        this.props.hideModal(false);
    }
    handleViewItem = () => {
        this.props.showModal(true);
    }
    handleEditItem = () => {
        this.props.showModal(true);
    }
    render() { 
        const { users, modal } = this.props;
        return (
            <React.Fragment>
                <Helmet>
                    <title>Users</title>
                </Helmet>
                <div className="list-container">
                    <Button variant="primary" onClick={() => this.handleShowModal('addUser', true)}>Add New</Button>
                    <table className="table table-bordered table-striped" style={{ 'margin': '0.5rem 0' }} >
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Action</th>
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
                                        <td>
                                            <Button variant="link" size="xs" onClick={this.handleViewItem}>View</Button>&nbsp;
                                            <Button variant="link" size="xs" onClick={this.handleEditItem}>Edit</Button>
                                        </td>
                                    </tr>
                                );
                            })}
                            {users && (users.length === 0) && <tr><td colSpan="5"><div className="loader-container">
                                <Loader type="Watch" color="#00BFFF" />
                            </div></td></tr>}
                            {!users && <tr><td colSpan="5">No data found..!!!</td></tr>}
                        </tbody>
                    </table>
                    <ModalPopup
                        show={modal.addUser}
                        title={'Add New'}
                        body={<UserFormPage />}
                        handleHideModal={this.handleHideModal}
                    />
                    {/*<Modal size="lg" centered show={modal.showAddUserModal} onHide={this.handleHideModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><UserFormPage /></Modal.Body>
                    </Modal>*/}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        modal: state.modal
    };
};

const mapDispatchToProps = dispatch => {
    /*return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        getModalStatus: () => dispatch(getModalStatus()),
        showModal: () => dispatch(showModal('', true)),
        hideModal: () => dispatch(hideModal())
    };*/
    return bindActionCreators({
        fetchAllUsers: fetchAllUsers,
        getModalStatus: getModalStatus,
        showModal: showModal,
        hideModal: hideModal
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewAllUsers);