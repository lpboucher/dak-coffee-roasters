import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartItems, getAllCartItems, removeItem } from '../../../ducks/cart';

import Cart from '../../presentational/Cart/Cart';

class CartContainer extends Component {

    componentDidMount() {
        this.props.fetchCart();
    }

    render() {
        const { cartItems, removeItem } = this.props;
        return (
            <Fragment>
                <Cart removeFromCart={removeItem} items={cartItems}/>
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
        removeItem: (id) => dispatch(removeItem(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);