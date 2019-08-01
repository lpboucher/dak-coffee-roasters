import React, { Component, Fragment } from 'react';

import CartContainer from '../../container/Cart/CartContainer';
import CategoryRowContainer from '../../container/Products/CategoryRowContainer';

class CartPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <CartContainer/>
                <CategoryRowContainer name="You may also like" category='coffee-equipment'/>
            </Fragment>
        );
    }
}

export default CartPage;