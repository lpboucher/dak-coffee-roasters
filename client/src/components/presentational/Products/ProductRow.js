import React, { Fragment } from 'react';

import ProductCard from './ProductCard';

import { Box, Heading } from 'grommet';

const ProductRow = ({cart, title, products}) => {
    return (
        <Fragment>
            <Heading level='1' textAlign="center">{title}</Heading>
            <Box direction="row" height="300px" pad="large">
                {products.slice(0,3).map(product => 
                    <Box key={product.product.id} background="mainWhite" width="33%">
                        <ProductCard {...product} addToCart={cart}/>
                    </Box>
                )}
            </Box>
        </Fragment>
    );
};

export default ProductRow;