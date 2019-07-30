import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import ProductCardInfo from './ProductCardInfo';

import { Box, Image } from 'grommet';

const ProductCard = withRouter(({product, thumb, addToCart, history}) => {
    return (
        <Fragment>
            <Box height="75%" width="100%" onClick={() => history.push(`/shop/${product.slug}`)} >
                <Image fit="contain" src={`${thumb.link? thumb.link.href : ""}`}/>
            </Box>
            <Box height="25%">
                <ProductCardInfo 
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    add={addToCart}
                    />
            </Box>      
        </Fragment>
    );
})

export default ProductCard;


