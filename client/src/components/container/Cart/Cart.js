import React, { Fragment } from 'react';

import './Cart.css';

const Cart = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="shopping-btn">
                    <i class="fas fa-chevron-left"></i>
                    <p>Continue Shopping</p>
                </div>
                <div className="cart-summary">
                    <ul className='cart-summary-list'>
                        <li className='cart-summary-item'>
                            <i class="far fa-times-circle"></i>
                            <img src='https://fellowproducts.com/wp-content/uploads/2016/07/Stagg1.2_Front_black_web.jpg' alt=''/>
                            <div className="cart-product-details">
                                <p>Item type</p>
                                <p>Item name</p>
                                <p>Item description</p>
                                <p>Product spec</p>
                            </div>
                            <p>Price</p>
                            <div className="cart-product-quantity">
                                <button >+</button>
                                <input type="text"  />
                                <button >-</button>
                            </div>
                            <p>Total Price</p>
                        </li>
                        <hr/>
                        <li className='cart-summary-item'>
                            <i class="far fa-times-circle"></i>
                            <img src='https://fellowproducts.com/wp-content/uploads/2016/07/Stagg1.2_Front_black_web.jpg' alt=''/>
                            <div className="cart-product-details">
                                <p>Item type</p>
                                <p>Item name</p>
                                <p>Item description</p>
                                <p>Product spec</p>
                            </div>
                            <p>Price</p>
                            <div className="cart-product-quantity">
                                <button >+</button>
                                <input type="text"  />
                                <button >-</button>
                            </div>
                            <p>Total Price</p>
                        </li>
                        <hr/>
                    </ul>
                    <div className="checkout-btn">Checkout</div>
                </div>
            </div>
        </Fragment>
    );
};

export default Cart;