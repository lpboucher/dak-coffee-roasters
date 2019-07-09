import React, { Fragment } from 'react';

import CategoryRowContainer from '../../container/Products/CategoryRowContainer';

const Shop = ({categories}) => {
    return (
        <Fragment>
            {categories.map(category => 
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