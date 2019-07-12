import React from 'react';
import { Link } from 'react-router-dom';

import CartCounter from '../../container/Navbar/CartCounter';

import { Box } from 'grommet';
import { User } from 'grommet-icons';

const TopNavBar = ({loc}) => {
    return (
    <Box direction="row" gridArea={loc} fill="horizontal" align="center" justify="evenly">
        <Link className="px-3" to="/account">
            <User />
        </Link>
        <CartCounter />
    </Box>
    );
};

export default TopNavBar;
