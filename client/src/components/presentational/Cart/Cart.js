import React, { Fragment } from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import CartItem from './CartItem';
import CartHeading from './CartHeading';

import { Box } from 'grommet';

import OrderPromoCode from './OrderPromoCode';
import OrderSummaryPrices from './OrderSummaryPrices';

const Cart = ({items, cart, removeFromCart, updateCartItem, apply}) => {
    return (
        <Fragment>
            <Box pad={{horizontal: "xlarge", top: '204px'}}>
                <CartHeading />
                {items.map(item => 
                    <CartItem 
                        key={item.id}
                        update={updateCartItem}
                        remove={removeFromCart}
                        {...item}
                    />
                )}
                <Box direction="row" justify="between" pad={{vertical: "medium"}}>
                    <Box width="33%">
                        <OrderPromoCode apply={apply}/>
                    </Box>
                    <Box align="end">
                        <OrderSummaryPrices withButton={true} {...cart}/>
                    </Box>
                </Box>
            </Box>
        </Fragment>
    );
};

export default withResponsive(Cart);