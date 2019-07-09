import React from 'react';

import SubscriptionCard from './SubscriptionCard';
import SubscriptionForm from './Form/SubscriptionForm';

import { Box } from 'grommet';

const SubscriptionDetails = ({cart, products}) => {
    return (
        <Box direction="row" pad="large">
            {products.map(product => 
                <Box key={product.product.id} width="50%" pad="large">
                    <SubscriptionCard {...product} />
                    <SubscriptionForm type={product.product.slug}/>
                </Box>
            )}
        </Box>
    );
};

export default SubscriptionDetails;