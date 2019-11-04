import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
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
                        <div className="card-header"><h5 className="card-header-text">{datum.title}</h5></div>
                        <div className="card-body">
                            <img src={'https://via.placeholder.com/150'} alt="Placeholder" />
                            <div className="card-title">{`${datum.currencyFormat}${datum.price}`}</div>
                            {datum.description && <div className="card-content">{datum.description}</div>}
                        </div>
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
                <Masonry
                    cellCount={products.length}
                    cellMeasurerCache={cache}
                    cellPositioner={cellPositioner}
                    cellRenderer={cellRenderer}
                    height={1000}
                    width={1000}
                />
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