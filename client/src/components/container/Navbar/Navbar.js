import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../utils/Logo';

import './Navbar.css';

//This navbar should be a presentational component, all css should be moved
//to a separate file and use styled components
//then, the container will pass in state/props

const Navbar = () => {
    return (
        <Fragment>
            <div className="nav-container">
                <div className='logo'>
                    <Link to="/"><Logo /></Link>
                </div>
                <div className='sticky-nav'>
                    <Link to="/account"><i className="fas fa-user-circle"></i> My Account</Link>
                </div>
                <div className='cart'>
                    <Link to="/cart"><i className="fas fa-shopping-cart"></i> EUR €</Link>
                    <div className="cart-header-summary">
                        <ul className='cart-header-list'>
                            <li className='cart-item'>
                                <img src='https://fellowproducts.com/wp-content/uploads/2016/07/Stagg1.2_Front_black_web.jpg' alt=''/>
                                    <p>Item title</p>
                                    <p>Price</p>
                            </li>
                            <li className='cart-item'>
                                <img src='https://fellowproducts.com/wp-content/uploads/2016/07/Stagg1.2_Front_black_web.jpg' alt=''/>
                                    <p>Item title</p>
                                    <p>Price</p>
                            </li>
                        </ul>
                        <div className="order-btn">Order</div>
                    </div>
                </div>
                <ul className="nav-main">
                    <li className="nav-item ml-4">
                        <Link to="/shop" className="nav-link">Shop</Link>
                    </li>
                    <li className="nav-item ml-4">
                        <Link to="/subscriptions" className="nav-link">Coffee Subscriptions</Link>
                    </li>
                    <li className="nav-item ml-4">
                        <Link to="/about" className="nav-link">Who We Are</Link>
                    </li>
                    <li className="nav-item ml-4">
                        <Link to="/wholesale" className="nav-link">Wholesale</Link>
                    </li>
                    <li className="nav-item ml-4">
                        <Link to="/contact" className="nav-link">Get In Touch</Link>
                    </li>
                    <li className="nav-item ml-4">
                        <Link to="/blog" className="nav-link">Blog</Link>
                    </li>
                </ul>
            </div>

        </Fragment>
    );
};

export default Navbar;