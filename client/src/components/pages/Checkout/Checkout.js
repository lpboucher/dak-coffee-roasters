import React from 'react';

import Checkout from '../../presentational/Checkout/Checkout';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

const CheckoutPage = () => {
    return (
    <>
        <Checkout />
        <NewsletterSignUp />
    </>
    );
};

export default CheckoutPage;