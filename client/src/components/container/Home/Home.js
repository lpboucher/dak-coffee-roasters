import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../../../ducks/products';
import { fetchCollections } from '../../../ducks/collections';

import Hero from '../Hero/Hero';
import SubscriptionIntro from '../Subscriptions/SubscriptionIntro';
import LimitedEditionsIntro from '../LimitedEditions/LimitedEditionsIntro';
import FeaturedProducts from '../../presentational/Products/FeaturedProducts';
import FeaturedProductsContainer from '../../container/Products/FeaturedProductsContainer';
import ProductList from '../Products/ProductList';
import NewsletterSignUp from '../Newsletter/NewsletterSignUp';

class Home extends Component {

    componentDidMount() {
        const { products, collections } = this.props;
        if (!products) {
          this.props.fetchProducts();
        }
    
        if (!collections) {
          this.props.fetchCollections();
        }
      }

    render() {
        return (
            <Fragment>
                <Hero />
                <SubscriptionIntro />
                <LimitedEditionsIntro />
                <FeaturedProductsContainer collection='featured-products'/>
                <ProductList />
                <NewsletterSignUp />
            </Fragment>
        );
    }
}

function mapStateToProps({products, collections}) {
    return {
        products,
        collections
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCollections: () => dispatch(fetchCollections()),
        fetchProducts: () => dispatch(fetchProducts())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);