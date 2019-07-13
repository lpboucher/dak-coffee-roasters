import React from 'react';
import { Link } from 'react-router-dom';

import CartToolTipItem from './CartToolTipItem';

import { Drop, Box, Text } from 'grommet';

const CartToolTip = ({items, close, target}) => {
    return (
        <Drop align={{"top": "bottom", "right": "right"}} plain={true} target={target.current} onClickOutside={close} onEsc={close}>
            <Box width="400px" background='mainWhite' justify="between">
                <Box border fill="horizontal" pad={{top: 'small'}}>
                    {items && items.length > 0 ? items.map(item => 
                            <CartToolTipItem key={item.id} {...item} />
                    ) : 
                        <p>No items in Cart</p>
                    }
                </Box>
                <Box as={Link} to="/cart" fill="horizontal" align="center" pad="small" background="mainDark" ><Text color="mainWhite">View Cart</Text></Box>
            </Box>
        </Drop>
    );
};

export default CartToolTip;