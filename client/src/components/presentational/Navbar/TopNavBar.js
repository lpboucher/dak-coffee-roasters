import React from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import Account from '../../presentational/Navbar/Account';
import CartCounter from '../../presentational/Navbar/CartCounter';
import LanguageSelector from '../../presentational/Navbar/LanguageSelector';
import CurrencySelector from '../../presentational/Navbar/CurrencySelector';
import MobileMenu from '../../presentational/Navbar/MobileMenu';

import { Box } from 'grommet';
import { Menu } from 'grommet-icons';

const TopNavBar = ({
        cartRef,
        cartItems,
        quantity,
        displayCurrency,
        isOpen,
        isMobileOpen,
        openCart,
        closeCart,
        openMenu,
        closeMenu,
        switchCurrency,
        isUserLoggedIn,
        logout,
        loc,
        media
    }) => {
    const isMobile = media === "small" || media === "medium";
    return (
    <Box direction="row" gridArea={loc} fill="horizontal" align="center" justify="evenly">
        <Account loggedIn={isUserLoggedIn} logout={logout}/>
        <CartCounter 
            items={cartItems}
            quantity={quantity}
            isOpen={isOpen}
            open={openCart}
            close={closeCart}
            cartRef={cartRef}
            currency={displayCurrency}/>
        <CurrencySelector updateCurrency={switchCurrency} displayCurrency={displayCurrency}/>
        {!isMobile &&
        <LanguageSelector />
        }
        {isMobile &&
        <Menu onClick={!isMobileOpen ? openMenu : closeMenu}/>
        }
        {isMobileOpen &&
            <MobileMenu close={closeMenu}/>
        }
    </Box>
    );
};

export default withResponsive(TopNavBar);
