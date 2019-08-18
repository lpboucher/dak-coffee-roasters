import React, { Fragment } from 'react';

import ProductDetails from './ProductDetails';
import TwoColLayout from '../../utils/TwoColLayout';

import { Box, Image } from 'grommet';

const SingleProduct = ({product}) => {
    return (
        <Fragment>
            <TwoColLayout 
                bgColor="mainWhite"
                left={
                    <Box pad="large" height="600px">
                        <Image fit="contain" src={`${product.secondary.link ? product.secondary.link.href : product.thumb.link.href}`}/>
                    </Box>
                }
                right={<ProductDetails {...product}/>}
                pad={{outer: {horizontal: "large", top: "208px", bottom: "large"}, inner:"large"}}
            />
        </Fragment>
    );
};

export default SingleProduct;