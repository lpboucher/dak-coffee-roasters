import React, { Fragment } from 'react';

import CartItem from './CartItem';

import { Box } from 'grommet';
import { FormPrevious } from 'grommet-icons';

import IconedExplanation from '../../utils/IconedExplanation';
import OrderPromoCode from './OrderPromoCode';
import OrderSummaryPrices from './OrderSummaryPrices';
//import ProductSuggestion from '../Products/ProductSuggestion';

const Cart = ({items, cart, removeFromCart, updateCartItem}) => {
    return (
        <Fragment>
            <Box pad="xlarge">
                <IconedExplanation 
                        withLink
                        icon={<FormPrevious />}
                        description="Continue Shopping"
                        dest="/shop"
                />
                {items.map(item => 
                    <CartItem 
                        key={item.id}
                        update={updateCartItem}
                        remove={removeFromCart}
                        {...item}
                    />
                )}
                <Box direction="row" justify="between">
                    <Box width="33%">
                        <OrderPromoCode />
                    </Box>
                    <Box align="end">
                        <OrderSummaryPrices {...cart}/>
                    </Box>
                </Box>
            </Box>
            {//<ProductSuggestion />
            }
        </Fragment>
    );
};

export default Cart;