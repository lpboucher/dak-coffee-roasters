import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { isCartOpen, openCartToolTip, closeCartToolTip } from '../../../ducks/views';
import { fetchCartItems, getAllCartItems, getNumberInCart } from '../../../ducks/cart';

import CartToolTip from '../../presentational/Cart/CartToolTip';

import { Stack, Box, Text } from 'grommet';
import { Cart } from 'grommet-icons';

class CartCounter extends Component {
    cartRef = createRef();
    
    componentDidMount() {
        this.props.fetchCart();
    }

    render() {
        const { cartItems, quantity, isOpen, openCart, closeCart } = this.props;
        return (
            <div
                onMouseEnter={() => openCart()}
                onMouseLeave={() => closeCart()}
                aria-controls="example-collapse-text"
                aria-expanded={isOpen}
                style={{width: '40px'}}
                ref={this.cartRef}
            >
                {/*<Link to="/cart" className="px-3 cart-trigger">
                    <i className="fas fa-shopping-cart"></i> 
                    {quantity ? `(${quantity})` : `(0)`}
        </Link>*/}
                <Stack anchor="right" fill={true}>
                    <Cart size="medium"/>
                    <Box
                        background="darkHighlight"
                        pad={{ horizontal: 'xsmall' }}
                        round
                    >
                        <Text size="xsmall">{quantity ? `${quantity}` : `0`}</Text>
                    </Box>
                </Stack>
                
                {isOpen &&
                    <CartToolTip items={cartItems} close={closeCart} target={this.cartRef}/>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isOpen: isCartOpen(state),
        cartItems: getAllCartItems(state),
        quantity: getNumberInCart(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCart: () => dispatch(fetchCartItems()),
        openCart: () => dispatch(openCartToolTip()),
        closeCart: () => dispatch(closeCartToolTip()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);