import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//id, name, description, price, link, slug, main, addToCart

const ProductCard = ({product, thumb, main, addToCart}) => {
    const productStyles = {
        background: `url(${thumb.link? thumb.link.href : ""})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <Fragment>
            <div className={`${main ? "h-100": "h-50"} border`}>
                <Link to={`/shop/${product.slug}`}>
                    <div className="h-75" style={productStyles} />
                </Link>
                <div className="h-25 d-flex flex-row justify-content-around align-items-center">
                    <div>
                        <p>{product.name}</p>
                        <p>{product.description}</p> 
                        <p>{product.price.amount}</p>
                    </div>
                    <span onClick={() => addToCart(product.id, '1')} className="icon is-medium">
                        <i className="fas fa-2x fa-plus-square"></i>
                    </span>
                </div>
            </div>
          </Fragment>
    );
};

export default ProductCard;


