import React from 'react';

import SubscriptionCard from './SubscriptionCard';
import SubscriptionForm from './Form/SubscriptionForm';

import { Box } from 'grommet';

const SubscriptionDetails = ({addToCart, products}) => {
    return (
        <Box direction="row" pad="large">
            {products.map(product => 
                <Box key={product.product.id} width="50%" pad="large">
                    <SubscriptionCard {...product} />
                    <SubscriptionForm addToCart={addToCart} type={product.product.slug}/>
                </Box>
            )}
        </Box>
    );
};

export default SubscriptionDetails;