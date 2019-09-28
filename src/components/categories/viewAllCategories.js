import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

import CategoryFormPage from './categoryFormPage';
import { fetchAllCategories } from '../../actions/categories';

class ViewAllCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }
    componentDidMount() {
        this.props.fetchAllCategories();
    }
    handleShowModal = () => {
        this.setState({ 'showModal': true });
    }
    handleHideModal = () => {
        this.setState({ 'showModal': false });
    }

    render() {
        const { categories } = this.props;
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
                    <Modal size="lg" centered show={this.state.showModal} onHide={this.handleHideModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><CategoryFormPage /></Modal.Body>
                        {/*<Modal.Footer>
<Button variant="secondary" onClick={this.handleHideModal}>
Close
</Button>
<Button variant="primary" onClick={this.handleHideModal}>
Save Changes
</Button>
</Modal.Footer>*/}
                    </Modal>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllCategories: () => dispatch(fetchAllCategories())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewAllCategories);