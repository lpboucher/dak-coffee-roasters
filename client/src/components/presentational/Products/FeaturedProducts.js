import React, { Fragment } from 'react';

import Button from '../../utils/Button';

import './Products.css';

const FeaturedProducts = ({products}) => {
    return (
        <Fragment>
            <div className='product-intro container mid-bg'>
                <div className='product-intro-title'>
                    <h3>Coffee Bags & Equipment</h3>
                </div>
                <div className='product-intro-grid'>
                    <div className='product-card'>
                        <img src='https://images-na.ssl-images-amazon.com/images/I/511bgagYtIL._SX425_.jpg' alt=''/>
                        <div className='product-details' >
                            <p>Item title</p>
                            <p>Item description</p>
                            <p>Price</p>
                        </div>
                        <i className="fas fa-plus-square"></i>
                    </div>
                    <div className='product-card'>
                        <img src='https://images-na.ssl-images-amazon.com/images/I/61jDQinRyzL._SX425_.jpg' alt=''/>
                        <div className='product-details' >
                            <p>Item title</p>
                            <p>Item description</p>
                            <p>Price</p>
                        </div>
                        <i className="fas fa-plus-square"></i>
                    </div>
                    <div className='product-card'>
                        <img src='https://cdn.shopify.com/s/files/1/0280/5548/products/Chemex-Coffee-Maker-3Cup-Angle_grande.jpg?v=1487506691' alt=''/>
                        <div className='product-details' >
                            <p>Item title</p>
                            <p>Item description</p>
                            <p>Price</p>
                        </div>
                        <i className="fas fa-plus-square"></i>
                    </div>
                    <div className='product-card'>
                        <img src='https://fellowproducts.com/wp-content/uploads/2016/07/Stagg1.2_Front_black_web.jpg' alt=''/>
                        <div className='product-details' >
                            <p>Item title</p>
                            <p>Item description</p>
                            <p>Price</p>
                        </div>
                        <i className="fas fa-plus-square"></i>
                    </div>
                    <div className='product-card'>
                        <img src='data:image/jpeg;base64,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' alt=''/> 
                        <div className='product-details' >
                            <p>Item title</p>
                            <p>Item description</p>
                            <p>Price</p>
                        </div>
                        <i className="fas fa-plus-square"></i>
                    </div>
                </div>
                <Button />
            </div>
        </Fragment>
    );
};

export default FeaturedProducts;

/*<Fragment>
                {products && products.length ? (
                    products.map(product => (
                        <ProductCard 
                            key={product.id}
                            name={product.name}
                            thumbnail={thumbnails[product.relationships.main_image.data.id]}
                        />
                    ))
                    ) : (
                        <Loader />
                    )
                }
            </Fragment>*/