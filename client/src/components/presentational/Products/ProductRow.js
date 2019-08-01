import React from 'react';

import ProductCard from './ProductCard';

import { Box, Heading } from 'grommet';

const ProductRow = ({cart, title, products, background="mainWhite"}) => {
    return (
        <Box background={background}>
            <Heading level={1} textAlign="center" style={{paddingTop: '48px'}}>{title}</Heading>
            <Box direction="row" height="350px" pad="large">
                {products.slice(0,3).map(product => 
                    <Box key={product.product.id} background="mainWhite" width="33%" pad="medium" margin={{horizontal: "medium"}}>
                        <ProductCard {...product} addToCart={cart}/>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default ProductRow;