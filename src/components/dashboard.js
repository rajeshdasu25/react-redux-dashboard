import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Card, Col, Row } from 'react-bootstrap';
import ReactHighcharts from 'react-highcharts';
import Loader from 'react-loader-spinner';

import CardBox from './common/CardBox.js';
import WidgetInfo from './common/WidgetInfo.js';
import IntroVideo from './common/IntroVideo.js';
import GoogleMap from './common/GoogleMap.js';
import { ColumnChartConfig } from '../config/ColumChartConfig';
// import { PieChartConfig } from '../config/PieChartConfig';

import { fetchAllUsers, fetchTop5Users } from '../actions/users';
import { fetchAllProducts, fetchTop5Products } from '../actions/products';
import { fetchAllCategories, fetchTop5Categories } from '../actions/categories';
import { fetchAllItems, fetchTop5Items } from '../actions/items';
import { fetchAllQueries, fetchTop5Queries } from '../actions/queries';

class Dashboard extends React.Component {
    
    fetchData = () => {
        const urls = [
            "http://localhost:5000/getAllItems?type=categories",
            "http://localhost:5000/getAllItems?type=products",
            "http://localhost:5000/getAllItems?type=users",
            "http://localhost:5000/getAllItems?type=queries"
        ];
        
        const allRequests = urls.map(url => 
            fetch(url).then(response => response.json())
        );
        
        return Promise.all(allRequests);
    };

    fetchAllItems = () => {
        return Promise.all([
            this.props.fetchAllCategories(),
            this.props.fetchAllProducts(),
            this.props.fetchAllUsers(),
            this.props.fetchAllQueries()
        ]);
    }

    componentDidMount() {
        this.props.fetchAllItems();
        this.props.fetchAllCategories();
        this.props.fetchAllProducts();
        this.props.fetchAllUsers();
        this.props.fetchAllQueries();
        this.props.fetchTop5Categories();
        this.props.fetchTop5Products();
        this.props.fetchTop5Users();
        this.props.fetchTop5Queries();

        /*const promises = Promise.all([
            this.props.fetchAllItems(),
            this.props.fetchAllCategories(),
            this.props.fetchAllProducts(),
            this.props.fetchAllUsers(),
            this.props.fetchAllQueries(),
            this.props.fetchTop5Categories(),
            this.props.fetchTop5Products(),
            this.props.fetchTop5Users(),
            this.props.fetchTop5Queries()
        ]);
        promises
            .then((results) =>
                Promise.all(results.map(r => r.text()))
            )*/

        this.fetchData().then(arrayOfResponses => 
            console.log("The data we got from the server:", arrayOfResponses)
        );

        this.fetchAllItems().then( (arrayOfAllItems) => {
            console.log("arrayOfAllItems:", arrayOfAllItems);
        });
    }

    render() {
        const { 
            allItems, categories, products, users, queries, 
            recentCategories, recentProducts, recentUsers, recentQueries
        } = this.props;

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
                    <Col md={2} xs={4} sm={6}>
                        <Link to="/queries">
                            <WidgetInfo theme='blue' text='Queries' count={queries.length} />
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} sm={12}>
                        <CardBox header="Products" content={<ReactHighcharts config={ColumnChartConfig} />} />
                    </Col>
                </Row>
                <Row>
                    <Col md={3} sm={6} xs={12}>
                        <Card>
                            <Card.Header><h5>Recent Users</h5></Card.Header>
                            <Card.Body>
                                {recentUsers && (recentUsers.length > 0) && 
                                    <ul className="card-list">
                                        {recentUsers.map((user) => {
                                            return (
                                                <li className="card-list-item" key={user.id}>
                                                    <div>{`${user.first_name} ${user.last_name}`}</div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                }
                                {recentUsers && (recentUsers.length === 0) && <div className="loader-container">
                                    <Loader type="Watch" color="#00BFFF" />
                                </div>}
                            </Card.Body>
                            <Card.Footer className="text-right" ><Link to="/users">View all &raquo;</Link></Card.Footer>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} xs={12}>
                        <Card>
                            <Card.Header><h5>Recent Categories</h5></Card.Header>
                            <Card.Body>
                                {recentCategories && (recentCategories.length > 0) && 
                                    <ul className="card-list">
                                        {recentCategories.map((category) => {
                                            return (
                                                <li className="card-list-item" key={category.id}>
                                                    <Link to={`/category/${category.id}`}>{category.label}</Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                }
                                {recentCategories && (recentCategories.length === 0) && <div className="loader-container">
                                    <Loader type="Watch" color="#00BFFF" />
                                </div>}
                            </Card.Body>
                            <Card.Footer className="text-right" ><Link to="/categories">View all &raquo;</Link></Card.Footer>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} xs={12}>
                        <Card>
                            <Card.Header><h5>Recent Products</h5></Card.Header>
                            <Card.Body>
                                {recentProducts && (recentProducts.length > 0) && 
                                    <ul className="card-list">
                                        {recentProducts.map((topProduct) => {
                                            return (
                                                <li className="card-list-item" key={topProduct.id}>
                                                    <div>{topProduct.title}</div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                }
                                {recentProducts && (recentProducts.length === 0) && <div className="loader-container">
                                    <Loader type="Watch" color="#00BFFF" />
                                </div>}
                            </Card.Body>
                            <Card.Footer className="text-right" ><Link to="/products">View all &raquo;</Link></Card.Footer>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} xs={12}>
                        <Card>
                            <Card.Header><h5>Recent Queries</h5></Card.Header>
                            <Card.Body>
                                {recentQueries && (recentQueries.length > 0) && 
                                    <ul className="card-list">
                                        {recentQueries.map((topQuery) => {
                                            return (
                                                <li className="card-list-item" key={topQuery.id}>
                                                    <div>{topQuery.comments}</div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                }
                                {/*recentQueries && (recentQueries.length === 0) && <div className="no-data-found">
                                    No datafound..!!!
                            </div>*/}
                                {recentQueries && (recentQueries.length === 0) && <div className="loader-container">
                                    <Loader type="Watch" color="#00BFFF" />
                                </div>}
                            </Card.Body>
                            <Card.Footer className="text-right" ><Link to="/queries">View all &raquo;</Link></Card.Footer>
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
                <Row>
                    <Col md={6} sm={12} xs={12}>
                        <Card>
                            <Card.Header><h5>Intro Video</h5></Card.Header>
                            <Card.Body>
                                <IntroVideo />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <Card>
                            <Card.Header><h5>Location</h5></Card.Header>
                            <Card.Body>
                                <GoogleMap />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        allItems: state.allItems,
        categories: state.categories,
        users: state.users,
        products: state.products,
        queries: state.queries,
        recentCategories: state.recentCategories,
        recentProducts: state.recentProducts,
        recentUsers: state.recentUsers,
        recentQueries: state.recentQueries
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllItems: () => dispatch(fetchAllItems()),
        fetchAllCategories: () => dispatch(fetchAllCategories()),
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchAllQueries: () => dispatch(fetchAllQueries()),
        fetchTop5Categories: () => dispatch(fetchTop5Categories()),
        fetchTop5Products: () => dispatch(fetchTop5Products()),
        fetchTop5Users: () => dispatch(fetchTop5Users()),
        fetchTop5Queries: () => dispatch(fetchTop5Queries())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);