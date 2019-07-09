import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getProductsByCategory } from '../../../ducks/products';
import { addToCart } from '../../../ducks/cart';

import ProductRow from '../../presentational/Products/ProductRow';

import Spinner from 'react-bootstrap/Spinner';

class CategoryRowContainer extends Component {

    renderProducts() {
        const { name, categoryProducts, addToCart } = this.props;
        if(categoryProducts && categoryProducts.length > 0) {
            return <ProductRow cart={addToCart} title={name} products={categoryProducts}/>
        };

        return <Spinner animation="grow" />
    }

    render() {
        return (
            <Fragment>
                {this.renderProducts()}
            </Fragment>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { category } = ownProps;
    return {
        categoryProducts: getProductsByCategory(state, category)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (id, quantity) => dispatch(addToCart(id, quantity))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryRowContainer);