import React from 'react';
import { withTranslation } from 'react-i18next';

import { Box, Image, Text } from 'grommet';

const CartToolTipItem = ({image, name, slug, product_type, quantity, meta}) => {
    return (
        <Box direction="row" height="80px" align="center" justify="between">
            <Box width="25%" height="100%">
                <Image fit="contain" src={image.href}/>
            </Box>
            <Box width="25%">
                <Text textAlign="center" size="small">{name}</Text>
            </Box>
            <Box width="25%">
                <Text textAlign="center" size="small">{`${quantity} x`}</Text>
            </Box>
            <Box width="25%">
                <Text textAlign="center" size="small">{`${meta.display_price.with_tax.value.formatted}`}</Text> 
            </Box>
        </Box>
    );
};

export default withTranslation()(CartToolTipItem);