import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link, withRouter } from 'react-router-dom';

import CartToolTipItem from './CartToolTipItem';

import { Drop, Box, Text } from 'grommet';

const CartToolTip = withRouter(({items, close, target, t}) => {
    return (
        <Drop align={{"top": "bottom", "right": "right"}} plain={true} target={target.current} onClickOutside={close} onEsc={close}>
            <Box width="400px" background='mainWhite' justify="between">
                <Box border fill="horizontal" pad={{top: 'small'}}>
                    {items && items.length > 0 ? items.map(item => 
                            <CartToolTipItem key={item.id} {...item} />
                    ) : 
                        <p>{t("cart.empty")}</p>
                    }
                </Box>
                <Box direction="row" fill="horizontal">
                    <Link to="/cart" style={{width: '50%'}}>
                        <Box fill align="center" pad="small" background="mainDark" margin={{right: '1px'}}>
                            <Text color="mainWhite">{t("cart.to cart")}</Text>
                        </Box>
                    </Link>
                    <Link to="/checkout" style={{width: '50%'}}>
                        <Box fill align="center" pad="small" background="mainDark" margin={{left: '1px'}}>
                            <Text color="mainWhite">{t("cart.to checkout")}</Text>
                        </Box>
                    </Link>
                </Box>
            </Box>
        </Drop>
    );
})

export default withTranslation()(CartToolTip);