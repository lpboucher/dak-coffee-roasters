import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCollections } from '../../../ducks/collections';
import { getAllProducts, getProductsByCollection } from '../../../ducks/products';
import { addDerivedToCart } from '../../../ducks/cart';

import SubscriptionDetails from '../../presentational/Subscriptions/SubscriptionDetails';

import Loader from '../../utils/Loader';


class SubscriptionsContainer extends Component {
    
    componentDidMount() {
        this.props.fetchCollections();
    };
    
    renderProducts() {
        const { subscriptionsProducts, addToCart } = this.props;
        if(subscriptionsProducts && subscriptionsProducts.length > 0) {
            return <SubscriptionDetails addToCart={addToCart} products={subscriptionsProducts}/>
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
    const { collection } = ownProps;
    return {
        subscriptionsProducts: getProductsByCollection(state, collection),
        products: getAllProducts(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCollections: () => dispatch(fetchCollections()),
        addToCart: (slug, data) => dispatch(addDerivedToCart(slug, data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionsContainer);