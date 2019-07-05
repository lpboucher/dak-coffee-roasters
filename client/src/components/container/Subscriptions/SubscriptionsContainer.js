import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCollections } from '../../../ducks/collections';
import { fetchProducts, getAllProducts, getProductsByCollection } from '../../../ducks/products';
import { addToCart } from '../../../ducks/cart';

import SubscriptionDetails from '../../presentational/Subscriptions/SubscriptionDetails';

//implement this spinner as part of a loading indicator
import Spinner from 'react-bootstrap/Spinner';

class SubscriptionsContainer extends Component {
    
      componentDidMount() {
        const { products } = this.props;
        if(products.length < 1) {
            this.props.fetchProducts();
        }
        this.props.fetchCollections();
    };

      renderProducts() {
        const { subscriptionsProducts, addToCart } = this.props;
        if(subscriptionsProducts && subscriptionsProducts.length > 0) {return <SubscriptionDetails cart={addToCart} products={subscriptionsProducts}/>};

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
    const { collection } = ownProps;
    return {
        subscriptionsProducts: getProductsByCollection(state, collection),
        products: getAllProducts(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCollections: () => dispatch(fetchCollections()),
        fetchProducts: () => dispatch(fetchProducts()),
        addToCart: (id, quantity) => dispatch(addToCart(id, quantity))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionsContainer);