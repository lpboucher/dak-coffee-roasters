import React from 'react';

import Collapse from 'react-bootstrap/Collapse';

import '../../presentational/Navbar/Navbar.css';

const CartToolTip = ({items, show}) => {
    return (
        <Collapse in={show} timeout={300}>
            <div className="cart-header-summary">
                <ul className='cart-header-list'>
                    {items && items.length > 0 ? items.map(item => 
                        <li key={item.id} className='cart-item'>
                            <img src={item.image.href} alt=''/>
                            <p>{item.name}</p>
                            <p>{`${item.quantity} x`}</p>
                            <p>{`${item.value.amount / 100} ${item.value.currency}`}</p>
                        </li>
                    ) : 
                        <li className="p-1 w-100">
                            <p className="text-center">No items in the cart</p>
                        </li>
                    }
                </ul>
                <div className="order-btn">Order</div>
            </div>
        </Collapse>
    );
};

export default CartToolTip;