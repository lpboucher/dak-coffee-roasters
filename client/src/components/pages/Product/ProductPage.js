import React from 'react';

import ProductDetailsContainer from '../../container/Products/ProductDetailsContainer';
import CategoryRowContainer from '../../container/Products/CategoryRowContainer';
import NewsletterContainer from '../../container/Newsletter/NewsletterContainer';

const ProductPage = ({ match }) => {
    const { slug } = match.params
    return (
    <>
        <ProductDetailsContainer id={slug}/>
        <CategoryRowContainer name="You may also like" category='coffee-equipment'/>
        <NewsletterContainer />
    </>
    );
};

export default ProductPage;