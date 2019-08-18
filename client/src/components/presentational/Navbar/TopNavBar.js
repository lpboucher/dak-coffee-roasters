import React from 'react';

import Account from '../../presentational/Navbar/Account';
import CartCounter from '../../presentational/Navbar/CartCounter';
import LanguageSelector from '../../presentational/Navbar/LanguageSelector';
import CurrencySelector from '../../presentational/Navbar/CurrencySelector';

import { Box } from 'grommet';

const TopNavBar = ({cartRef, cartItems, quantity, isOpen, openCart, closeCart, isUserLoggedIn, logout, loc}) => {
    return (
    <Box direction="row" gridArea={loc} fill="horizontal" align="center" justify="evenly">
        <Account loggedIn={isUserLoggedIn} logout={logout}/>
        <CartCounter 
            items={cartItems}
            quantity={quantity}
            isOpen={isOpen}
            open={openCart}
            close={closeCart}
            cartRef={cartRef}/>
        <CurrencySelector />
        <LanguageSelector />
    </Box>
    );
};

export default TopNavBar;
