import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import CheckoutFormContainer from '../../container/Checkout/CheckoutFormContainer';
import CheckoutSummaryContainer from '../../container/Checkout/CheckoutSummaryContainer';

const Checkout = () => {
    return (
            <TwoColLayout 
                left={<CheckoutFormContainer />}
                right={<CheckoutSummaryContainer />}
            />
    );
};

export default Checkout;