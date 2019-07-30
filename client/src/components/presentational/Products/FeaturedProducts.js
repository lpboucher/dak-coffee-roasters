import React, { Fragment } from 'react';

import ProductGrid from './ProductGridLayout';

import { Box, Heading, Button } from 'grommet';

const FeaturedProducts = ({products, cart}) => {
    return (
        <Fragment>
            <Box pad="large" background="lightGrey">
                <Heading level='1' textAlign="center">Coffee bags & equipment</Heading>
                <ProductGrid products={products} cart={cart}/>
                <Button primary label="SEE MORE" alignSelf="center" />   
            </Box>   
        </Fragment>
    );
};

export default FeaturedProducts;