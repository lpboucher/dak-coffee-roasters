import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartItems, getAllCartItems, removeItem, updateItem } from '../../../ducks/cart';

import Cart from '../../presentational/Cart/Cart';

class CartContainer extends Component {

    componentDidMount() {
        this.props.fetchCart();
    }

    render() {
        const { cartItems, removeItem, updateItem } = this.props;
        return (
            <Fragment>
                <Cart removeFromCart={removeItem}
                      updateCartItem={updateItem}
                      items={cartItems}/>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        cartItems: getAllCartItems(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCart: () => dispatch(fetchCartItems()),
        removeItem: (id) => dispatch(removeItem(id)),
        updateItem: (id, quantity) => dispatch(updateItem(id, quantity))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);