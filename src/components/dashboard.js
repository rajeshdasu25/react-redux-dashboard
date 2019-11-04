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

import { fetchAllUsers } from '../actions/users';
import { fetchAllProducts } from '../actions/products';
import { fetchAllCategories } from '../actions/categories';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchAllProducts();
        this.props.fetchAllCategories();
    }

    render() {
        const { categories, products, users } = this.props;

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
                            <Card.Header>Users</Card.Header>
                            <Card.Body>
                                {users && (users.length > 0) && users.map((user, index) => {
                                    return (
                                        <div key={user.id}>
                                            <div>{user.username}</div>
                                        </div>
                                    );
                                })}
                                {users && (users.length === 0) && <div className="loader-container">
                                    <Loader type="Watch" color="#00BFFF" />
                                </div>}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={6}>
                        <Card>
                            <Card.Header>Categories</Card.Header>
                            <Card.Body>
                                {categories && (categories.length > 0) && categories.map((category) => {
                                    return (
                                        <div key={category.id}>
                                            <div>{category.label}</div>
                                        </div>
                                    );
                                })}
                                {categories && (categories.length === 0) && <div className="loader-container">
                                    <Loader type="Watch" color="#00BFFF" />
                                </div>}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={6}>
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
                    </Col>
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
        users: state.users,
        products: state.products,
        categories: state.categories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        fetchAllCategories: () => dispatch(fetchAllCategories())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);