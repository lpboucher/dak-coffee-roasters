import React, { Fragment } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import ProductCardInfo from './ProductCardInfo';
import { ReactComponent as SoldOut} from '../../../assets/icons/soldout.svg';

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
    cursor: default;
`

const ProductCard = withRouter(({product, thumb, addToCart, history}) => {
    return (
        <Fragment>
            <WithHover height="75%" width="100%" onClick={() => history.push(`/shop/${product.slug}`)} isManaged={product.manage_stock}>
                <Image fit="contain" src={`${thumb.link? thumb.link.href : ""}`}/>
                {product.manage_stock && product.meta.stock.level < 1 &&
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
                    price={product.price}
                    type={product.product_type}
                    add={addToCart}
                    outOfStock={product.manage_stock && product.meta.stock.level < 1}
                    />
            </Box>      
        </Fragment>
    );
})

export default ProductCard;


