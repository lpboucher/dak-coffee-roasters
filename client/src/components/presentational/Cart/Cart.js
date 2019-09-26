import React, { Fragment } from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import CartItem from './CartItem';
import CartHeading from './CartHeading';

import { Box } from 'grommet';

import OrderPromoCode from './OrderPromoCode';
import OrderSummaryPrices from './OrderSummaryPrices';

const Cart = ({items, cart, removeFromCart, updateCartItem, apply, error, media}) => {
    const layout = {
        extraSmall: {pad: {horizontal: "medium", top: '80px'}, dir: "row-reverse", width: '100%'},
        small: {pad: {horizontal: "medium", top: '80px'}, dir: "row-reverse", width: '100%'},
        medium: {pad: {horizontal: "xlarge", top: '204px'}, dir: "row", width: '33%'},
        large: {pad: {horizontal: "xlarge", top: '204px'}, dir: "row", width: '33%'},
        infinity: {pad: {horizontal: "xlarge", top: '204px'}, dir: "row", width: '33%'},
    }
    return (
        <Fragment>
            <Box pad={layout[media] ? layout[media].pad : {horizontal: "xlarge", top: '204px'}}>
                {(media === "medium" || media === "large" || media === "infinity") &&
                    <CartHeading />
                }
                {items.map(item => 
                    <CartItem 
                        key={item.id}
                        update={updateCartItem}
                        remove={removeFromCart}
                        {...item}
                    />
                )}
                <Box direction={layout[media] ? layout[media].dir : "row-reverse"} justify="between" pad={{vertical: "medium"}} wrap>
                    <Box width={layout[media] ? layout[media].width : "100%"}>
                        <OrderPromoCode promoError={error.promo} apply={apply}/>
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