import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllProducts, getProductBySlug, fetchProducts } from '../../../ducks/products';
import { addDerivedToCart, addToCart } from '../../../ducks/cart';
import { getDisplayCurrency } from '../../../ducks/views';

import SingleProduct from '../../presentational/Products/SingleProduct';

import Loader from '../../utils/Loader';

class ProductDetailsContainer extends Component {

    componentDidMount() {
        const { product } = this.props;
        if(product && Object.keys(product).length > 0) { new Image().src = product.thumb.link.href };
    }

    renderProduct() {
    const { product, addToCart, addDerived, currency } = this.props;
    if(product && Object.keys(product).length > 0) {return <SingleProduct product={product} derived={addDerived} add={addToCart} currency={currency}/>};

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
        products: getAllProducts(state),
        currency: getDisplayCurrency(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        addDerived: (slug, data) => dispatch(addDerivedToCart(slug, null, data)),
        addToCart: (id, quantity) => dispatch(addToCart(id, quantity))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer);