import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Card, Col, Row } from 'react-bootstrap';
import ReactHighcharts from 'react-highcharts';
import Loader from 'react-loader-spinner';

import CardBox from './common/CardBox.js';
import WidgetInfo from './common/WidgetInfo.js';
import { ColumnChartConfig } from '../config/ColumChartConfig';
// import { PieChartConfig } from '../config/PieChartConfig';

import { fetchAllUsers, fetchTop5Users } from '../actions/users';
import { fetchAllProducts, fetchTop5Products } from '../actions/products';
import { fetchAllCategories, fetchTop5Categories } from '../actions/categories';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchAllCategories();
        this.props.fetchAllProducts();
        this.props.fetchAllUsers();
        this.props.fetchTop5Categories();
        this.props.fetchTop5Products();
        this.props.fetchTop5Users();
    }

    render() {
        const { categories, products, users, recentCategories, recentProducts, recentUsers } = this.props;

        return (
            <React.Fragment>
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>
                <Row>
                    <Col md={2} xs={4} sm={6}>
                        <Link to="/users">
                            <WidgetInfo theme='red' text='Users' count={users.length} />
                        </Link>
                    </Col>
                    <Col md={2} xs={4} sm={6}>
                        <Link to="/categories">
                            <WidgetInfo theme='green' text='Categories' count={categories.length} />
                        </Link>
                    </Col>
                    <Col md={2} xs={4} sm={6}>
                        <Link to="/products">
                            <WidgetInfo theme='purple' text='Products' count={products.length} />
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} sm={12}>
                        <CardBox header="Products" content={<ReactHighcharts config={ColumnChartConfig} />} />
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={6}>
                        <Card>
                            <Card.Header><h5>Recent Users</h5></Card.Header>
                            <Card.Body>
                                {recentUsers && (recentUsers.length > 0) && recentUsers.map((user) => {
                                    return (
                                        <div key={user.id}>
                                            <div>{`${user.first_name} ${user.last_name}`}</div>
                                        </div>
                                    );
                                })}
                                {recentUsers && (recentUsers.length === 0) && <div className="loader-container">
                                    <Loader type="Watch" color="#00BFFF" />
                                </div>}
                            </Card.Body>
                            <Card.Footer className="text-right" ><Link to="/users">View all &raquo;</Link></Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} sm={6}>
                        <Card>
                            <Card.Header><h5>Recent Categories</h5></Card.Header>
                            <Card.Body>
                                {recentCategories && (recentCategories.length > 0) && recentCategories.map((category) => {
                                    return (
                                        <div key={category.id}>
                                            <div>{category.label}</div>
                                        </div>
                                    );
                                })}
                                {recentCategories && (recentCategories.length === 0) && <div className="loader-container">
                                    <Loader type="Watch" color="#00BFFF" />
                                </div>}
                            </Card.Body>
                            <Card.Footer className="text-right" ><Link to="/categories">View all &raquo;</Link></Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} sm={6}>
                        <Card>
                            <Card.Header><h5>Recent Products</h5></Card.Header>
                            <Card.Body>
                                {recentProducts && (recentProducts.length > 0) && recentProducts.map((topProduct) => {
                                    return (
                                        <div key={topProduct.id}>
                                            <div>{topProduct.title}</div>
                                        </div>
                                    );
                                })}
                                {recentProducts && (recentProducts.length === 0) && <div className="loader-container">
                                    <Loader type="Watch" color="#00BFFF" />
                                </div>}
                            </Card.Body>
                            <Card.Footer className="text-right" ><Link to="/products">View all &raquo;</Link></Card.Footer>
                        </Card>
                    </Col>
                    {/*<Col md={4} sm={6}>
                        <Card>
                            <Card.Header>Products</Card.Header>
                            <Card.Body>
                                {products && (products.length > 0) && products.map((product) => {
                                    return (
                                        <div key={product.id}>
                                            <div>{product.title}</div>
                                        </div>
                                    );
                                })}
                                {products && (products.length === 0) && <div className="loader-container">
                                    <Loader type="Watch" color="#00BFFF" />
                                </div>}
                            </Card.Body>
                        </Card>
                    </Col>*/}
                </Row>
                {/*<Row>
<Col md={4} sm={6}>
<CardBox theme="primary" />
</Col>
<Col md={4} sm={6}>
<CardBox theme="secondary" />
</Col>
<Col md={4} sm={6}>
<CardBox theme="success" />
</Col>
</Row> 
<Row>
<Col md={3} sm={6}>
<CardBox theme="danger" />
</Col>
<Col md={3} sm={6}>
<CardBox theme="warning" />
</Col>
<Col md={3} sm={6}>
<CardBox theme="dark" />
</Col>
<Col md={3} sm={6}>
<CardBox />
</Col>
</Row>*/}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        users: state.users,
        products: state.products,
        recentCategories: state.recentCategories,
        recentProducts: state.recentProducts,
        recentUsers: state.recentUsers
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllCategories: () => dispatch(fetchAllCategories()),
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchTop5Categories: () => dispatch(fetchTop5Categories()),
        fetchTop5Products: () => dispatch(fetchTop5Products()),
        fetchTop5Users: () => dispatch(fetchTop5Users())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);