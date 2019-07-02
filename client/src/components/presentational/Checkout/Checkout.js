import React, { Fragment } from 'react';

import CheckoutLayout from './CheckoutLayout';
import CheckoutForm from './Form/CheckoutForm';
import CheckoutSummaryContainer from '../../container/Checkout/CheckoutSummaryContainer';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

const Checkout = () => {
    return (
        <Fragment >
            <CheckoutLayout 
                leftCol={<CheckoutForm />}
                rightCol={<CheckoutSummaryContainer />}
            />
            <NewsletterSignUp />
        </Fragment>
    );
};

export default Checkout;