import React from 'react';

import Checkout from '../../presentational/Checkout/Checkout';
import NewsletterContainer from '../../container/Newsletter/NewsletterContainer';

const CheckoutPage = () => {
    return (
    <>
        <Checkout />
        <NewsletterContainer />
    </>
    );
};

export default CheckoutPage;