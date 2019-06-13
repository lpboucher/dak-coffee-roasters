import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../../../ducks/products';

import Hero from '../Hero/Hero';
import SubscriptionIntro from '../../presentational/Subscriptions/SubscriptionIntro';
import LimitedEditionsIntro from '../LimitedEditions/LimitedEditionsIntro';
import FeaturedProductsContainer from '../../container/Products/FeaturedProductsContainer';
import NewsletterSignUp from '../Newsletter/NewsletterSignUp';

class Home extends Component {

    componentDidMount() {
        const { products } = this.props;
        if (products.allIds.length < 1) {
          this.props.fetchProducts();
        }
      }

    render() {
        return (
            <Fragment>
                <Hero />
                <SubscriptionIntro />
                <LimitedEditionsIntro />
                <FeaturedProductsContainer collection='featured-products'/>
                <NewsletterSignUp />
            </Fragment>
        );
    }
}

function mapStateToProps({products}) {
    return {
        products,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);