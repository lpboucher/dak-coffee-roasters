import React from 'react';

import ProductDetailsContainer from '../../container/Products/ProductDetailsContainer';
import CategoryRowContainer from '../../container/Products/CategoryRowContainer';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

const ProductPage = ({ match }) => {
    const { slug } = match.params
    return (
    <>
        <ProductDetailsContainer id={slug}/>
        <CategoryRowContainer name="You may also like" category='coffee-equipment'/>
        <NewsletterSignUp />
    </>
    );
};

export default ProductPage;