import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCollections } from '../../../ducks/collections';
import { getProductsByCollection } from '../../../ducks/products';
import { addToCart } from '../../../ducks/cart';

import FeaturedProducts from '../../presentational/Products/FeaturedProducts';

import Loader from '../../utils/Loader';

class FeaturedProductsContainer extends Component {
    
    componentDidMount() {
            this.props.fetchCollections();
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
        featuredProducts: getProductsByCollection(state, collection)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCollections: () => dispatch(fetchCollections()),
        addToCart: (id, quantity) => dispatch(addToCart(id, quantity))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProductsContainer);