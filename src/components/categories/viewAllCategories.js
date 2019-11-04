import React from 'react';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Button/*, Modal*/ } from 'react-bootstrap';

import ModalPopup from '../common/ModalPopup';
import CategoryFormPage from './categoryFormPage';
import { fetchAllCategories } from '../../actions/categories';
import { getModalStatus, showModal, hideModal } from '../../actions/modal';

class ViewAllCategories extends React.Component {
    componentDidMount() {
        this.props.fetchAllCategories();
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
    render() { console.log(this.props);
        const { categories, modal } = this.props;
        return (
            <React.Fragment>
                <Helmet>
                    <title>Categories</title>
                </Helmet>
                <div className="list-container">
                    <Button variant="primary" onClick={() => this.handleShowModal('addCategory', true)}>Add New</Button>
                    <table className="table table-bordered table-striped" style={{ 'margin': '0.5rem 0' }} >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Type</th>
                                <th>Label</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories && (categories.length > 0) && categories.map((category, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{category.type}</td>
                                        <td>{category.label}</td>
                                        <td>
                                            <Button variant="link" size="xs" onClick={this.handleViewItem}>View</Button>&nbsp;
                                        <Button variant="link" size="xs" onClick={this.handleEditItem}>Edit</Button>
                                        </td>
                                    </tr>
                                );
                            })}
                            {categories && (categories.length === 0) && <tr><td colSpan="4"><div className="loader-container">
                                <Loader type="Watch" color="#00BFFF" />
                            </div></td></tr>}
                            {!categories && <tr><td colSpan="4">No data found..!!!</td></tr>}
                        </tbody>
                    </table>
                    <ModalPopup
                        show={modal.addCategory}
                        title={'Add New'}
                        body={<CategoryFormPage />}
                        handleHideModal={this.handleHideModal}
                    />
                    {/*<Modal size="lg" centered show={modal.showAddCategoryModal} onHide={this.handleHideModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><CategoryFormPage /></Modal.Body>
                    </Modal>*/}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        modal: state.modal
    };
};

const mapDispatchToProps = dispatch => {
    /*return {
        fetchAllCategories: () => dispatch(fetchAllCategories()),
        getModalStatus: () => dispatch(getModalStatus()),
        showModal: () => dispatch(showModal('', true)),
        hideModal: () => dispatch(hideModal())
    };*/
    return bindActionCreators({
        fetchAllCategories: fetchAllCategories,
        getModalStatus: getModalStatus,
        showModal: showModal,
        hideModal: hideModal
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewAllCategories);