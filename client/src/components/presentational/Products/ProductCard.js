import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import ProductCardInfo from './ProductCardInfo';

import { Box, Image } from 'grommet';

const ProductCard = ({product, thumb, addToCart}) => {
    return (
        <Fragment>
            <Box height="75%" width="100%" as={Link} to={`/shop/${product.slug}`} >
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
};

export default ProductCard;


