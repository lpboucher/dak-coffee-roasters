import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, getAllCategories } from '../../../ducks/categories';
import { fetchProducts, getAllProducts } from '../../../ducks/products';

import Shop from '../../presentational/Shop/Shop';

//implement this spinner as part of a loading indicator
import Spinner from 'react-bootstrap/Spinner';

class ShopContainer extends Component {

    componentDidMount() {
        const { products } = this.props;
        if(products.length < 1) {
            this.props.fetchProducts();
        }
        this.props.fetchCategories();
    };

    renderCategories() {
        const { categories } = this.props;
        if(categories && categories.length > 0) {return <Shop categories={categories}/>};

        return <Spinner animation="grow" />
    }

    render() {
        return (
            <Fragment>
                {this.renderCategories()}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: getAllCategories(state),
        products: getAllProducts(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchProducts: () => dispatch(fetchProducts())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);