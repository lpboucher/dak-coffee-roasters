import React, { Fragment } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import ProductCardInfo from './ProductCardInfo';
import { ReactComponent as SoldOut} from '../../../assets/icons/soldout.svg';

import { Box, Image, Stack, Text } from 'grommet';

const WithHover = styled(Box)`
    opacity: ${props => props.outOfStock ? 0.5 : 1};
    cursor: pointer;
    position: relative;
    &:hover {
        opacity: 0.5;
    }
`
const OutOfStock = styled(Stack)`
    position: absolute;
    cursor: default;
`

const ProductCard = withRouter(({product, thumb, addToCart, history}) => {
    const outOfStock = product.manage_stock && product.stock.available < 1;
    return (
        <Fragment>
            <WithHover height="75%" width="100%" onClick={() => !outOfStock ? history.push(`/shop/${product.slug}`) : null} outOfStock={outOfStock}>
                <Image fit="contain" src={`${thumb.link? thumb.link.href : ""}`}/>
                {outOfStock &&
                    <OutOfStock fill>
                        <Box align="start" pad="small">
                            <SoldOut height="48px" />
                        </Box>
                    </OutOfStock>
                }
            </WithHover>
            <Box height="25%">
                <ProductCardInfo 
                    id={product.id}
                    slug={product.slug}
                    price={product.meta ? product.meta.display_price : '...'}
                    type={product.product_type}
                    add={addToCart}
                    outOfStock={outOfStock}
                    />
            </Box>      
        </Fragment>
    );
})

export default ProductCard;


