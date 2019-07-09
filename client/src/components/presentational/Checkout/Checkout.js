import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import CheckoutForm from './Form/CheckoutForm';
import CheckoutSummaryContainer from '../../container/Checkout/CheckoutSummaryContainer';

const Checkout = () => {
    return (
            <TwoColLayout 
                left={<CheckoutForm />}
                right={<CheckoutSummaryContainer />}
            />
    );
};

export default Checkout;