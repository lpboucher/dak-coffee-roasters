import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//id, name, description, price, link, slug, main, addToCart

const ProductCard = ({product, thumb, addToCart}) => {
    const productStyles = {
        background: `url(${thumb.link? thumb.link.href : ""})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <Fragment>
            <div className="h-100">
                <Link to={`/shop/${product.slug}`}>
                    <div className="h-75" style={productStyles} />
                </Link>
                <div className="h-25 d-flex flex-row justify-content-between align-items-center bg-white">
                    <div className="w-100 d-flex flex-column align-items-center">
                        <p>{product.name}</p>
                        <p>{product.description}</p> 
                        {//<p>{product.price.amount}</p>
                        }
                    </div>
                    <span onClick={() => addToCart(product.id, '1')} className="mr-3 icon is-medium">
                        <i className="fas fa-2x fa-plus-square"></i>
                    </span>
                </div>
            </div>
          </Fragment>
    );
};

export default ProductCard;


