import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import {
    CellMeasurer,
    CellMeasurerCache,
    createMasonryCellPositioner,
    Masonry
} from 'react-virtualized';

import { fetchAllProducts } from '../actions/products';

class Products extends React.Component {
    componentDidMount() {
        this.props.fetchAllProducts();
    }

    render() {
        const { products } = this.props;

        const cache = new CellMeasurerCache({
            defaultHeight: 500,
            defaultWidth: 225,
            fixedWidth: true
        });

        const cellPositioner = createMasonryCellPositioner({
            cellMeasurerCache: cache,
            columnCount: 4,
            columnWidth: 225,
            spacer: 10
        });

        function cellRenderer({ index, key, parent, style }) {
            const datum = products[index];
            return (
                <CellMeasurer
                    cache={cache}
                    index={index}
                    key={key}
                    parent={parent}
                >
                    <div className="card" style={style}>
                        <Link to={`/product/${datum.id}`}>
                            <div className="card-header"><h5 className="card-header-text">{datum.title}</h5></div>
                            <div className="card-body">
                                <img src={'https://via.placeholder.com/150'} alt="Placeholder" />
                                <div className="card-title">{`${datum.currencyFormat}${datum.price}`}</div>
                            </div>
                        </Link>
                    </div>
                </CellMeasurer>
            )
        }

        return (
            <React.Fragment>
                <Helmet>
                    <title>Products</title>
                </Helmet>
                <h1>Products</h1>
                {products && (products.length > 0) && 
                    <Masonry
                        cellCount={products.length}
                        cellMeasurerCache={cache}
                        cellPositioner={cellPositioner}
                        cellRenderer={cellRenderer}
                        height={1000}
                        width={1000}
                    />
                }
                {products && (products.length === 0) && <div className="loader-container">
                    <Loader type="Watch" color="#00BFFF" />
                </div>}
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