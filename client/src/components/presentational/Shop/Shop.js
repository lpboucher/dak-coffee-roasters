import React, { Fragment } from 'react';

import CategoryRowContainer from '../../container/Products/CategoryRowContainer';

const Shop = ({categories}) => {
    return (
        <Fragment>
            {categories.sort((a, b) => (a.slug < b.slug) ? 1 : -1).map(category => 
                <CategoryRowContainer 
                    key={category.id}
                    name={category.name}
                    category={category.slug}
                />
            )}
        </Fragment>
    );
};

export default Shop;