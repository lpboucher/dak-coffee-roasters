import React, { Component, Fragment } from 'react';

import CartContainer from '../../container/Cart/CartContainer';
import CategoryRowContainer from '../../container/Products/CategoryRowContainer';
import Footer from '../../presentational/Footer/Footer';

class CartPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <CartContainer/>
                <CategoryRowContainer name="You may also like" category='coffee-equipment'/>
                <Footer />
            </Fragment>
        );
    }
}

export default CartPage;