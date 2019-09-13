import React from 'react';
import { Link } from 'react-router-dom';
import withResponsive from '../../utils/HOCs/WithResponsive';

import CartToolTip from '../../presentational/Cart/CartToolTip';

import { Stack, Box, Text } from 'grommet';
import { Cart } from 'grommet-icons';

const CartCounter = ({ items, quantity, isOpen, open, close, cartRef, media }) => {
    const isMobile = media === "extraSmall" || media === "small" || media === "medium"
    return (
        <div
            onMouseEnter={!isMobile ? open : null}
            onMouseLeave={!isMobile ? close : null}
            aria-controls="example-collapse-text"
            aria-expanded={isOpen}
            style={{width: '40px'}}
            ref={cartRef}
        >
        {!isMobile ?
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
            :
            <Link to="/cart">
                <Cart size="medium"/>
            </Link>
        }
        {isOpen &&
            <CartToolTip items={items} close={close} target={cartRef}/>
        }
        </div>
    );
};

export default withResponsive(CartCounter);