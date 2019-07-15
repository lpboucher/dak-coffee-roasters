import React from 'react';

import CartToolTip from '../../presentational/Cart/CartToolTip';

import { Stack, Box, Text } from 'grommet';
import { Cart } from 'grommet-icons';

const CartCounter = ({ items, quantity, isOpen, open, close, cartRef }) => {
    return (
        <div
            onMouseEnter={() => open()}
            onMouseLeave={() => close()}
            aria-controls="example-collapse-text"
            aria-expanded={isOpen}
            style={{width: '40px'}}
            ref={cartRef}
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
                <CartToolTip items={items} close={close} target={cartRef}/>
            }
        </div>
    );
};

export default CartCounter;