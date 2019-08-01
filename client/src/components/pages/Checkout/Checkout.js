import React, { Component, Fragment } from 'react';

import Checkout from '../../presentational/Checkout/Checkout';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

class CheckoutPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Checkout />
                <NewsletterSignUp />
            </Fragment>
        );
    }
}

export default CheckoutPage;