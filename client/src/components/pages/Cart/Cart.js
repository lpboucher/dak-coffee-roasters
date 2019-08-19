import React from 'react';

import CartContainer from '../../container/Cart/CartContainer';
import CategoryRowContainer from '../../container/Products/CategoryRowContainer';

const Cart = () => {
    return (
    <>
        <CartContainer/>
        <CategoryRowContainer name="You may also like" category='coffee-equipment' limit={3}/>  
    </>
    );
};

export default Cart;