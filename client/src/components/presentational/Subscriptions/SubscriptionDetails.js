import React from 'react';

import SubscriptionCard from './SubscriptionCard';

import { Box } from 'grommet';

const SubscriptionDetails = ({addToCart, products}) => {
    return (
        <Box direction="row" pad="large">
            {products.map(product => 
                <Box key={product.product.id} width="50%" margin="large" background="lightGrey">
                    <SubscriptionCard addToCart={addToCart} {...product} />
                </Box>
            )}
        </Box>
    );
};

export default SubscriptionDetails;