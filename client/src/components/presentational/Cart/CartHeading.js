import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

import { Box, Text } from 'grommet';
import { Previous } from 'grommet-icons';

const CartHeading = () => {
    return (
        <Fragment>
            <Box direction="row" align="center" width="100%">
                <Box direction="row" width="35%" align="center">
                        <Previous size="small"/>
                    <Link to="/shop">
                        <Text>Continue Shopping</Text>
                    </Link>
                </Box>
                <Box width="25%">
                    <Text>PRODUCT</Text>
                </Box>
                <Box width="20%" align="center">
                    <Text>PRICE</Text>
                </Box>
                <Box width="10%" align="center">
                    <Text>QUANTITY</Text>
                </Box>
                <Box width="20%" align="center">
                    <Text>SUBTOTAL</Text>
                </Box>
            </Box>
        </Fragment>
    );
};

export default CartHeading;