import React from 'react';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import { fetchACategory } from '../../actions/categories';

class ViewIndCategory extends React.Component {
    componentDidMount() {
        const catId = this.props.match.params.id;
        this.props.fetchACategory(catId);
    }
    render() { 
        const { category } = this.props;
        return (
            <React.Fragment>
                <Helmet>
                    <title>Category</title>
                </Helmet>
                <Card>
                    <Card.Body>
                        <Link to={`/categories`}>&laquo; Back to Categories</Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header><h5>View Category - {category.label}</h5></Card.Header>
                    <Card.Body>
                        {category && (category.length === 0) && <div className="loader-container">
                            <Loader type="Watch" color="#00BFFF" />
                        </div>}
                        <div className="form-group">
                            <Row>
                                <Col md={3} sm={3} xs={3} className="text-right">
                                    <label htmlFor="type" className="col-form-label">Type&nbsp;:&nbsp;</label>
                                </Col>
                                <Col md={8} sm={8} xs={8}>
                                    <label className="col-form-label">{category.type}</label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3} sm={3} xs={3} className="text-right">
                                    <label htmlFor="type" className="col-form-label">Label&nbsp;:&nbsp;</label>
                                </Col>
                                <Col md={8} sm={8} xs={8}>
                                    <label className="col-form-label">{category.label}</label>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.category
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchACategory: fetchACategory
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewIndCategory);