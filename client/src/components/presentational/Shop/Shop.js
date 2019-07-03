import React from 'react';

import CategoryRowContainer from '../../container/Products/CategoryRowContainer';

const Shop = ({categories}) => {
    return (
        <div>
            {categories.map(category => 
                <CategoryRowContainer 
                    key={category.id}
                    name={category.name}
                    category={category.slug}
                />
            )}
        </div>
    );
};

export default Shop;