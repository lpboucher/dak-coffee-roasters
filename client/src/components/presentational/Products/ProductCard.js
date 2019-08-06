import React, { Fragment } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import ProductCardInfo from './ProductCardInfo';

import { Box, Image, Stack, Text } from 'grommet';

const WithHover = styled(Box)`
    opacity: ${props => props.isManaged ? 0.5 : 1};
    cursor: pointer;
    position: relative;
    &:hover {
        opacity: 0.5;
    }
`
const OutOfStock = styled(Stack)`
    position: absolute;
`

const ProductCard = withRouter(({product, thumb, addToCart, history}) => {
    return (
        <Fragment>
            <WithHover height="75%" width="100%" onClick={() => history.push(`/shop/${product.slug}`)} isManaged={product.manage_stock}>
                <Image fit="contain" src={`${thumb.link? thumb.link.href : ""}`}/>
                {product.manage_stock && product.meta.stock.level < 1 &&
                    <OutOfStock fill>
                        <Text>Sold Out</Text>
                    </OutOfStock>
                }
            </WithHover>
            <Box height="25%">
                <ProductCardInfo 
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    add={addToCart}
                    outOfStock={product.manage_stock && product.meta.stock.level < 1}
                    />
            </Box>      
        </Fragment>
    );
})

export default ProductCard;


