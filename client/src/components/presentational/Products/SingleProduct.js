import React, { Fragment } from 'react';

import ProductDetails from './ProductDetails';
import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';

const SingleProduct = ({product}) => {
    return (
        <Fragment>
            <TwoColLayout 
                bgColor="mainWhite"
                left={<FullImg imgLink={`${product.secondary.link ? product.secondary.link.href : product.thumb.link.href}`} size="contain"/>}
                right={<ProductDetails {...product}/>}
                pad={{outer: {horizontal: "large", top: "208px", bottom: "large"}, inner:"large"}}
            />
        </Fragment>
    );
};

export default SingleProduct;