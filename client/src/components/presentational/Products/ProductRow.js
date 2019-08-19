import React from 'react';

import ProductCard from './ProductCard';

import { Box, Heading } from 'grommet';

const ProductRow = ({cart, title, products, limit, background="mainWhite"}) => {
    const limitedProducts = limit ? limit : products.length;
    return (
        <Box background={background}>
            <Heading level={1} textAlign="center" style={{paddingTop: '48px'}}>{title}</Heading>
            <Box direction="row" pad="large" wrap>
                {products.slice(0,limitedProducts).map(product => 
                    <Box key={product.product.id} background="mainWhite" height="350px" width="31%" pad="medium" margin={'1%'}>
                        <ProductCard {...product} addToCart={cart}/>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default ProductRow;