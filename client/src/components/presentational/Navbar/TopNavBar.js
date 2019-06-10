import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import CartCounter from '../../container/Navbar/CartCounter';

const TopNavBar = () => {
    return (
    <Fragment>
        <Link className="px-3" to="/account">
            <i className="fas fa-user-circle"></i> My Account
        </Link>
        <CartCounter />
    </Fragment>
    );
};

export default TopNavBar;
