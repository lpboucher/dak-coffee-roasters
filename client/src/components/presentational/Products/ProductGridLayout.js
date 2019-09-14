import React from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import ProductCard from './ProductCard';

import { Grid, Box } from 'grommet';

const ProductGrid = ({products, cart, media}) => {
    const columns = {
        extraSmall: ["auto"],
        small: ["auto"],
        medium: ["auto"],
        large: ["auto", "auto", "auto"],
        infinity: ["auto", "auto", "auto"]
      };
      const rows = {
        extraSmall: ["300px", "300px", "300px", "300px", "300px"],
        small: ["300px", "300px", "300px", "300px", "300px"],
        medium: ["300px", "300px", "300px", "300px", "300px"],
        large: ["300px", "300px"],
        infinity: ["300px", "300px"]
      };
    const areas = (media === 'infinity' || media === 'large') ?
        [
            { name: 'main', start: [0, 0], end: [0, 1] },
            { name: 'product1', start: [1, 0], end: [1, 0] },
            { name: 'product2', start: [1, 1], end: [1, 1] },
            { name: 'product3', start: [2, 0], end: [2, 0] },
            { name: 'product4', start: [2, 1], end: [2, 1] },
        ] : 
        [
            { name: 'main', start: [0, 0], end: [0, 0] },
            { name: 'product1', start: [0, 1], end: [0, 1] },
            { name: 'product2', start: [0, 2], end: [0, 2] },
            { name: 'product3', start: [0, 3], end: [0, 3] },
            { name: 'product4', start: [0, 4], end: [0, 4] },
        ]
    return (
        <Grid
            columns={media ? columns[media] : ["auto"]}
            rows={media ? rows[media] : ["300px", "300px", "300px", "300px", "300px"]}
            gap='medium'
            background="lightGrey"
            margin="medium"
            areas={media ? areas : [
                { name: 'main', start: [0, 0], end: [0, 0] },
                { name: 'product1', start: [0, 1], end: [0, 1] },
                { name: 'product2', start: [0, 2], end: [0, 2] },
                { name: 'product3', start: [0, 3], end: [0, 3] },
                { name: 'product4', start: [0, 4], end: [0, 4] },
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

export default withResponsive(ProductGrid);