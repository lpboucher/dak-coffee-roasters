import React from 'react';

import ProductDetails from './ProductDetails';
import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';

const SingleProduct = ({product}) => {
    return (
        <TwoColLayout 
            bgColor="mainWhite"
            left={<FullImg imgLink={`${product.link ? product.link.href : ""}`} size="contain"/>}
            right={<ProductDetails {...product}/>}
        />
    );
};

export default SingleProduct;