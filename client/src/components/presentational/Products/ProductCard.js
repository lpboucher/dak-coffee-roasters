import React from 'react';

const ProductCard = ({name, thumbnail}) => {
    return (
        <div>
            <h3>Hello from {name}</h3>
            <h1>Nice {thumbnail.file_name}</h1>
        </div>
    );
};

export default ProductCard;