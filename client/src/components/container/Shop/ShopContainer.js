import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, getAllCategories } from '../../../ducks/categories';
import { getAllProducts } from '../../../ducks/products';
import { fetchInventories, getInventories } from '../../../ducks/inventories';

import Shop from '../../presentational/Shop/Shop';

import Loader from '../../utils/Loader';

class ShopContainer extends Component {

    componentDidMount() {
        const { categories, inventories } = this.props;
        if (categories && categories.length < 1) {
            this.props.fetchCategories();
        }
        if (inventories && inventories.length < 1) {
            this.props.fetchInventories();
        }
    };

    renderCategories() {
        const { categories } = this.props;
        if(categories && categories.length > 0) {return <Shop categories={categories}/>};

        return <Loader />
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
        products: getAllProducts(state),
        inventories: getInventories(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchInventories: () => dispatch(fetchInventories()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);