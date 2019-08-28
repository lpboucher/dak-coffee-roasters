import React from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import ProductCard from './ProductCard';

import { Box, Heading } from 'grommet';

const ProductRow = ({cart, title, products, limit, background="mainWhite", media}) => {
    const limitedProducts = limit ? limit : products.length;
    const layout = {
        small: {width: '98%'},
        medium: {width: '48%'},
        large: {width: '31%'},
        infinity: {width: '31%'},
    }
    return (
        <Box background={background}>
            <Heading level={1} textAlign="center" style={{paddingTop: '48px'}}>{title}</Heading>
            <Box direction="row" pad="large" wrap>
                {products.slice(0,limitedProducts).map(product => 
                    <Box key={product.product.id} background="mainWhite" height="350px" width={layout[media].width} pad="medium" margin={'1%'}>
                        <ProductCard {...product} addToCart={cart}/>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default withResponsive(ProductRow);