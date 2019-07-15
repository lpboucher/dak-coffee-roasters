import React, { Component, createRef, Fragment } from 'react';
import { connect } from 'react-redux';
import { isCartOpen, openCartToolTip, closeCartToolTip } from '../../../ducks/views';
import { fetchCartItems, getAllCartItems, getNumberInCart } from '../../../ducks/cart';
import { getLoggedStatus } from '../../../ducks/user';

import CartToolTip from '../../presentational/Cart/CartToolTip';
import Account from '../../presentational/Navbar/Account';
import CartCounter from '../../presentational/Navbar/CartCounter';
import LogOut from '../../presentational/Navbar/Logout';

import { Stack, Box, Text } from 'grommet';
import { Cart } from 'grommet-icons';

class TopNavContainer extends Component {
    cartRef = createRef();
    
    componentDidMount() {
        this.props.fetchCart();
    }

    render() {
        const { cartItems, quantity, isOpen, openCart, closeCart, isUserLoggedIn } = this.props;
        return (
            /*<div
                onMouseEnter={() => openCart()}
                onMouseLeave={() => closeCart()}
                aria-controls="example-collapse-text"
                aria-expanded={isOpen}
                style={{width: '40px'}}
                ref={this.cartRef}
            >
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
            </div>*/
            <Fragment>
                <Account loggedIn={isUserLoggedIn}/>
                <CartCounter 
                    items={cartItems}
                    quantity={quantity}
                    isOpen={isOpen}
                    open={openCart}
                    close={closeCart}
                    cartRef={this.cartRef}/>
                <LogOut loggedIn={isUserLoggedIn} />
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        isOpen: isCartOpen(state),
        cartItems: getAllCartItems(state),
        quantity: getNumberInCart(state),
        isUserLoggedIn: getLoggedStatus(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCart: () => dispatch(fetchCartItems()),
        openCart: () => dispatch(openCartToolTip()),
        closeCart: () => dispatch(closeCartToolTip()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavContainer);