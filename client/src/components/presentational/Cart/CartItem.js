import React, {Fragment} from 'react';

import { Box, Text, Image } from 'grommet';
import { SubtractCircle, Add, Subtract } from 'grommet-icons';

const CartItem = ({
    id,
    image,
    name,
    description,
    unit_price,
    quantity,
    value,
    remove,
    update}) => {
    return (
        <Fragment>
            <Box direction="row" align="center" width="100%" height="small">
                <Box width="10%" align="center">
                    <SubtractCircle onClick={() => remove(id)} />
                </Box>
                <Box width="25%" height="100%">
                    <Image fit="contain" src={image.href}/>
                </Box>
                <Box width="25%">
                    <Text>Item Type</Text>
                    <Text>{name}</Text>
                    <Text>{description}</Text>
                    <Text>Product Spec</Text>
                </Box>
                <Box width="20%" align="center">
                    <Text>{`${unit_price.amount / 100} ${unit_price.currency}`}</Text>
                </Box>
                <Box width="10%" align="center">
                    <Add onClick={() => update(id, quantity + 1)}/>
                    <Text>{quantity}</Text>
                    <Subtract onClick={() => update(id, quantity - 1)}/>
                </Box>
                <Box width="20%" align="center">
                    <Text>{`${value.amount / 100} ${value.currency}`}</Text>
                </Box>
            </Box>
            <hr/>
        </Fragment>
    );
};

export default CartItem;