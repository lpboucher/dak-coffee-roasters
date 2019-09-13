import React from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import SubscriptionCard from './SubscriptionCard';

import { Box } from 'grommet';

const SubscriptionDetails = ({addToCart, products, media}) => {
    const layout = {
        extraSmall: {width: '98%', margin: '1%'},
        small: {width: '98%', margin: '1%'},
        medium: { width: '98%', margin: '1%'},
        large: { width: '44%', margin: '3%'},
        infinity: { width: '44%', margin: '3%'}
    }
    return (
        <Box direction="row" pad="large" wrap>
            {products.map(product => 
                <Box key={product.product.id} width={layout[media] ? layout[media].width : '98%'} margin={layout[media] ? layout[media].margin : '1%'} background="lightGrey">
                    <SubscriptionCard addToCart={addToCart} {...product} />
                </Box>
            )}
        </Box>
    );
};

export default withResponsive(SubscriptionDetails);