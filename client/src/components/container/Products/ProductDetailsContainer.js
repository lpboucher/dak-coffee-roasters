import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllProducts, getProductBySlug, fetchProducts } from '../../../ducks/products';
//import { addToCart } from '../../../ducks/cart';

import SingleProduct from '../../presentational/Products/SingleProduct';

import Loader from '../../utils/Loader';

class ProductDetailsContainer extends Component {
    componentDidMount() {
        const { products } = this.props;
        if(products.length < 1) {
            this.props.fetchProducts();
        }
    };

    renderProduct() {
    const { product } = this.props;
    if(product && Object.keys(product).length > 0) {return <SingleProduct product={product}/>};

    return <Loader />
    }
    
    render() {
        return (
            <Fragment>
                {this.renderProduct()}
            </Fragment>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const slug  = ownProps.id;
    return {
        product: getProductBySlug(state, slug),
        products: getAllProducts(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer);