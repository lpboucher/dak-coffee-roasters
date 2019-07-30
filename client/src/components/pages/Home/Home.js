import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../../../ducks/products';

import Hero from '../../presentational/Hero/Hero';
import SubscriptionIntro from '../../presentational/Intros/SubscriptionIntro';
import LimitedEditionsIntro from '../../presentational/Intros/LimitedEditionsIntro';
import FeaturedProductsContainer from '../../container/Products/FeaturedProductsContainer';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';
import ValuesIntro from '../../presentational/Intros/ValuesIntro';
import BrewingIntro from '../../presentational/Intros/BrewingIntro';
import Footer from '../../presentational/Footer/Footer';

import header from '../../../assets/images/Header_Mainpage.jpg';

class HomePage extends Component {

    componentDidMount() {
        const { products } = this.props;
        if (products.allIds.length < 1) {
          this.props.fetchProducts();
        }
      }

    render() {
        return (
            <Fragment>
                <Hero
                    bgImage={header}
                    overlay={{
                        text: "From farm to cup we take great pride in celebrating quality coffee",
                        loc: "bottom-left",
                        withOpacity: true
                    }}
                />
                <SubscriptionIntro />
                <LimitedEditionsIntro />
                <FeaturedProductsContainer collection='featured-products'/>
                <NewsletterSignUp />
                <ValuesIntro />
                <BrewingIntro />
                <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);