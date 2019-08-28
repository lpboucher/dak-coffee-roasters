import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCollections, getCollections } from '../../../ducks/collections';
import { fetchInventories, getInventories } from '../../../ducks/inventories';
import { getProductsByCollection } from '../../../ducks/products';
import { addToCart } from '../../../ducks/cart';

import FeaturedProducts from '../../presentational/Products/FeaturedProducts';

import Loader from '../../utils/Loader';

class FeaturedProductsContainer extends Component {
    
    componentDidMount() {
        const { collections, inventories } = this.props;
        if (collections && collections.length < 1) {
            this.props.fetchCollections();
        }
        if (inventories && inventories.length < 1) {
            this.props.fetchInventories();
        }
      };

      renderProducts() {
        const { featuredProducts, addToCart } = this.props;
        if(featuredProducts && featuredProducts.length > 0) {return <FeaturedProducts cart={addToCart} products={featuredProducts}/>};

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
    const { collection } = ownProps;
    return {
        featuredProducts: getProductsByCollection(state, collection),
        collections: getCollections(state),
        inventories: getInventories(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCollections: () => dispatch(fetchCollections()),
        fetchInventories: () => dispatch(fetchInventories()),
        addToCart: (id, quantity) => dispatch(addToCart(id, quantity))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProductsContainer);