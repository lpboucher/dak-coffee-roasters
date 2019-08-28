import React from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import SubscriptionCard from './SubscriptionCard';

import { Box } from 'grommet';

const SubscriptionDetails = ({addToCart, products, media}) => {
    const layout = {
        small: {width: '98%', margin: '1%'},
        medium: { width: '98%', margin: '1%'},
        large: { width: '44%', margin: '3%'},
        infinity: { width: '44%', margin: '3%'}
    }
    return (
        <Box direction="row" pad="large" wrap>
            {products.map(product => 
                <Box key={product.product.id} width={layout[media].width} margin={layout[media].margin} background="lightGrey">
                    <SubscriptionCard addToCart={addToCart} {...product} />
                </Box>
            )}
        </Box>
    );
};

export default withResponsive(SubscriptionDetails);