import React from 'react';

import ProductCard from './ProductCard';

import { Grid, Box } from 'grommet';

const ProductGrid = ({products, cart}) => {
    return (
        <Grid
            columns={['flex', 'flex', 'flex']}
            rows={['300px', '300px']}
            gap='medium'
            background="lightGrey"
            margin="medium"
            areas={[
                { name: 'main', start: [0, 0], end: [0, 1] },
                { name: 'product1', start: [1, 0], end: [1, 0] },
                { name: 'product2', start: [1, 1], end: [1, 1] },
                { name: 'product3', start: [2, 0], end: [2, 0] },
                { name: 'product4', start: [2, 1], end: [2, 1] },
            ]}
        >
        {products.map((product, index) => (
            <Box key={product.product.id}
                gridArea={index === 0 ? "main" : `product${index}`}
                background="mainWhite"
            >
                    <ProductCard {...product} addToCart={cart}/>
            </Box> 
        ))}
        </Grid>
    );
};

export default ProductGrid;