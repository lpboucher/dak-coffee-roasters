import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import ProductGrid from './ProductGridLayout';

import { Box, Heading, Button } from 'grommet';

const FeaturedProducts = ({products, cart}) => {
    return (
        <Fragment>
            <Box pad="large" background="lightGrey">
                <Heading level='1' textAlign="center">Coffee bags & equipment</Heading>
                <ProductGrid products={products} cart={cart}/>
                <Link to="/shop" style={{textAlign: 'center'}}>
                    <Button primary label="SEE MORE" alignSelf="center"></Button>
                </Link>
            </Box>   
        </Fragment>
    );
};

export default FeaturedProducts;