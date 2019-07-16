import React, { Component, Fragment } from 'react';

import Checkout from '../../presentational/Checkout/Checkout';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';
import Footer from '../../presentational/Footer/Footer';

class CheckoutPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Checkout />
                <NewsletterSignUp />
                <Footer />
            </Fragment>
        );
    }
}

export default CheckoutPage;