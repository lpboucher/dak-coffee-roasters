import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getProductBySlug } from '../../../ducks/products';
//import { addToCart } from '../../../ducks/cart';

import ProductDetails from '../../presentational/Products/ProductDetails';

class ProductDetailsContainer extends Component {

    renderProduct() {
    const { product } = this.props;
    return <ProductDetails {...product}/>;
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
    const slug  = ownProps.match.params.slug;
    return {
        product: getProductBySlug(state, slug)
    };
}

export default connect(mapStateToProps, null)(ProductDetailsContainer);