import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getProductsByCategory } from '../../../ducks/products';
import { fetchCategories } from '../../../ducks/categories';
import { addToCart } from '../../../ducks/cart';

import ProductRow from '../../presentational/Products/ProductRow';

import Loader from '../../utils/Loader';

class CategoryRowContainer extends Component {

    componentDidMount() {
        const { categories } = this.props;
        if (categories.allIds.length < 1) {
            this.props.fetchCategories();
        }
      }

    renderProducts() {
        const { name, categoryProducts, addToCart } = this.props;
        if(categoryProducts && categoryProducts.length > 0) {
            return <ProductRow cart={addToCart} title={name} products={categoryProducts}/>
        };

        return <Loader />
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
    const { categories } = state;
    return {
        categoryProducts: getProductsByCategory(state, category),
        categories,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (id, quantity) => dispatch(addToCart(id, quantity)),
        fetchCategories: () => dispatch(fetchCategories()),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryRowContainer);