import React from 'react';
import { connect } from 'react-redux';

import { fetchAllProducts } from '../actions/products';

class Products extends React.Component {
    componentDidMount() {
        this.props.fetchAllProducts();
    }

    render() {
        const { products } = this.props;
        return (
            <React.Fragment>
                <h1>Products</h1>
                <div className="list-container">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Description</th>
                            </tr>
                        </thead>

                        {products.length ? (
                            <tbody>
                                {products.map((product, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{product.title}</td>
                                            <td>{`${product.currencyFormat}${product.price}`}</td>
                                            <td>{product.description}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        ) : (
                                <tbody>
                                    <tr><td>No Products Found</td></tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllProducts: () => dispatch(fetchAllProducts())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);