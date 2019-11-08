import React from 'react';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import { fetchAProduct } from '../../actions/products';

class ViewIndProduct extends React.Component {
    componentDidMount() {
        const catId = this.props.match.params.id;
        this.props.fetchAProduct(catId);
    }
    render() { 
        const { product } = this.props;
        return (
            <React.Fragment>
                <Helmet>
                    <title>Product</title>
                </Helmet>
                <Card>
                    <Card.Body>
                        <Link to={`/products`}>&laquo; Back to Products</Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header><h5>View Product - {product.title}</h5></Card.Header>
                    <Card.Body>
                        {product && (product.length === 0) && <div className="loader-container">
                            <Loader type="Watch" color="#00BFFF" />
                        </div>}
                        <div className="form-group">
                            <Row>
                                <Col md={3} sm={3} xs={3} className="text-right">
                                    <label htmlFor="image" className="col-form-label">&nbsp;</label>
                                </Col>
                                <Col md={3} sm={3} xs={3} className="text-right">
                                    <img src={'https://via.placeholder.com/300/09f/fff.png'} alt={product.title} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3} sm={3} xs={3} className="text-right">
                                    <label htmlFor="image" className="col-form-label">&nbsp;</label>
                                </Col>
                                <Col md={3} sm={3} xs={3} className="text-right">
                                    <div className="price-container">
                                    {product.availableSizes && (product.availableSizes.length > 0) && product.availableSizes.map((size, index) => {
                                        return (
                                            <div className="price-container-item" key={index}>
                                                <div>{size}</div>
                                                <div>{`${product.currencyFormat}${product.price}`}</div>
                                            </div>
                                        );
                                    })}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3} sm={3} xs={3} className="text-right">
                                    <label htmlFor="type" className="col-form-label">Title&nbsp;:&nbsp;</label>
                                </Col>
                                <Col md={8} sm={8} xs={8}>
                                    <label className="col-form-label">{product.title !== '' ? product.title : '-'}</label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3} sm={3} xs={3} className="text-right">
                                    <label htmlFor="type" className="col-form-label">Style&nbsp;:&nbsp;</label>
                                </Col>
                                <Col md={8} sm={8} xs={8}>
                                    <label className="col-form-label">{product.style !== '' ? product.style : '-'}</label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3} sm={3} xs={3} className="text-right">
                                    <label htmlFor="type" className="col-form-label">Description&nbsp;:&nbsp;</label>
                                </Col>
                                <Col md={8} sm={8} xs={8}>
                                    <label className="col-form-label">{product.description !== '' ? product.description : '-'}</label>
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
        product: state.product
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchAProduct: fetchAProduct
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewIndProduct);