import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import CheckoutFormContainer from '../../container/Checkout/CheckoutFormContainer';
import CheckoutSummaryContainer from '../../container/Checkout/CheckoutSummaryContainer';

import { Box } from 'grommet';

const Checkout = () => {
    return (
        <Box pad={{top: '160px'}}>
            <TwoColLayout 
                left={<CheckoutFormContainer />}
                right={<CheckoutSummaryContainer />}
                pad={{outer: {vertical: '0px', horizontal: 'large'}, inner: "large"}}
            />
        </Box>
    );
};

export default Checkout;