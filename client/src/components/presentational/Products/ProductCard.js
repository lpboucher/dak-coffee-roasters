import React, { Fragment } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import ProductCardInfo from './ProductCardInfo';

import { Box, Image } from 'grommet';

const WithHover = styled(Box)`
    &:hover {
        opacity: 0.5;
    }
`

const ProductCard = withRouter(({product, thumb, addToCart, history}) => {
    return (
        <Fragment>
            <WithHover height="75%" width="100%" onClick={() => history.push(`/shop/${product.slug}`)} style={{cursor: "pointer"}}>
                <Image fit="contain" src={`${thumb.link? thumb.link.href : ""}`}/>
            </WithHover>
            <Box height="25%">
                <ProductCardInfo 
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    add={addToCart}
                    />
            </Box>      
        </Fragment>
    );
})

export default ProductCard;


