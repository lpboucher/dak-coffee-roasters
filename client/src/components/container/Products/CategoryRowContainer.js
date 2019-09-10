import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getProductsByCategory } from '../../../ducks/products';
import { fetchCategories, getCategories } from '../../../ducks/categories';
import { fetchInventories, getInventories } from '../../../ducks/inventories';
import { addToCart } from '../../../ducks/cart';

import ProductRow from '../../presentational/Products/ProductRow';

import Loader from '../../utils/Loader';

class CategoryRowContainer extends Component {

    componentDidMount() {
        const { categories, inventories } = this.props;
        if (categories && categories.length < 1) {
            this.props.fetchCategories();
        }
        if (inventories && inventories.length < 1) {
            this.props.fetchInventories();
        }
      }

    renderProducts() {
        const { name, category, categoryProducts, addToCart, limit } = this.props;
        if(categoryProducts && categoryProducts.length > 0) {
            return <ProductRow cart={addToCart} slug={category} title={name} products={categoryProducts} background="lightGrey" limit={limit}/>
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
    return {
        categoryProducts: getProductsByCategory(state, category),
        categories: getCategories(state),
        inventories: getInventories(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (id, quantity) => dispatch(addToCart(id, quantity)),
        fetchCategories: () => dispatch(fetchCategories()),
        fetchInventories: () => dispatch(fetchInventories()),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryRowContainer);