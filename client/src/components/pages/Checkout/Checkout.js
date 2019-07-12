import React, { Component, Fragment } from 'react';

import CheckoutContainer from '../../container/Checkout/CheckoutContainer';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';
import Footer from '../../presentational/Footer/Footer';

class CheckoutPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <CheckoutContainer />
                <NewsletterSignUp />
                <Footer />
            </Fragment>
        );
    }
}

export default CheckoutPage;