import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

import CategoryFormPage from './categoryFormPage';
import { fetchAllCategories } from '../../actions/categories';
import { getModalStatus, showModal, hideModal } from '../../actions/modal';

class ViewAllCategories extends React.Component {
    componentDidMount() {
        this.props.fetchAllCategories();
        this.props.getModalStatus();
    }
    handleShowModal = () => {
        this.props.showModal(true);
    }
    handleHideModal = () => {
        this.props.hideModal(false);
    }
    render() { 
        const { categories, modal } = this.props;
        return (
            <React.Fragment>
                <div className="list-container">
                    <Button variant="primary" onClick={this.handleShowModal}>Add New</Button>
                    <table className="table table-bordered table-striped" style={{ 'margin': '0.5rem 0' }} >
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Label</th>
                            </tr>
                        </thead>
                        {categories.length ? (
                            <tbody>
                                {categories.map((category, index) => {
                                    return (
                                        <tr key={category.id}>
                                            <td>{category.type}</td>
                                            <td>{category.label}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        ) : (
                                <tbody>
                                    <tr><td>No Categories Found</td></tr>
                                </tbody>
                            )
                        }
                    </table>
                    <Modal size="lg" centered show={modal.showAddCategoryModal} onHide={this.handleHideModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><CategoryFormPage /></Modal.Body>
                    </Modal>
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
    return {
        fetchAllCategories: () => dispatch(fetchAllCategories()),
        getModalStatus: () => dispatch(getModalStatus()),
        showModal: () => dispatch(showModal()),
        hideModal: () => dispatch(hideModal())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewAllCategories);