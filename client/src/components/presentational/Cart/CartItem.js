import React, {Fragment} from 'react';

import { Box, Text, Image } from 'grommet';
import { Add, Subtract } from 'grommet-icons';

const CartItem = ({
    id,
    image,
    name,
    description,
    unit_price,
    quantity,
    value,
    meta,
    remove,
    update}) => {
    return (
        <Fragment>
            <Box direction="row" align="center" width="100%" height="small">
                <Box width="10%" align="center">
                    <Box onClick={() => remove(id)} style={{cursor: 'pointer'}}>
                        <i className="far fa-trash-alt"></i>
                    </Box>
                </Box>
                <Box width="25%" height="100%">
                    <Image fit="contain" src={image.href}/>
                </Box>
                <Box width="25%">
                    <Text>{name}</Text>
                </Box>
                <Box width="20%" align="center">
                    <Text>{`${meta.display_price.with_tax.unit.formatted}`}</Text>
                </Box>
                <Box width="10%" align="center">
                    <Add onClick={() => update(id, quantity + 1)} size="small" style={{margin: '10px', cursor: 'pointer'}}/>
                    <Text>{quantity}</Text>
                    <Subtract onClick={() => update(id, quantity - 1)} size="small" style={{margin: '10px', cursor: 'pointer'}}/>
                </Box>
                <Box width="20%" align="center">
                    <Text>{`${meta.display_price.with_tax.value.formatted}`}</Text>
                </Box>
            </Box>
            <hr/>
        </Fragment>
    );
};

export default CartItem;