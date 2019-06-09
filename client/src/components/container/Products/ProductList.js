import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, getAllProducts } from '../../../ducks/products';
import { getThumbnailsByIds } from '../../../ducks/thumbnails';

import ProductCard from '../../presentational/Products/ProductCard';
import Loader from '../../utils/Loader';

class ProductList extends Component {
    
    componentDidMount() {
            this.props.fetchProducts();
      };
    
    render() {
        const { products, thumbnails } = this.props;
        return (
            <Fragment>
                <p>products</p>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: getAllProducts(state),
        thumbnails: getThumbnailsByIds(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);