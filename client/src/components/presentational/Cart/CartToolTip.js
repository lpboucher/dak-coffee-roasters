import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import CartToolTipItem from './CartToolTipItem';

import { Drop, Box, Text } from 'grommet';

const CartToolTip = withRouter(({items, close, target, history}) => {
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
                <Link to="/cart">
                    <Box fill="horizontal" align="center" pad="small" background="mainDark" >
                        <Text color="mainWhite">View Cart</Text>
                    </Box>
                </Link>
            </Box>
        </Drop>
    );
})

export default CartToolTip;