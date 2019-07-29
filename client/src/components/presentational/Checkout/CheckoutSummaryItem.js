import React from 'react';

import { Box, Image, Text } from 'grommet';

const CheckoutSummaryItem = ({name, description, image}) => {
    return (
        <Box direction="row" height="100px" align="center">
            <Box width="33%" height="100%">
                <Image fit="contain" src={image.href}/>
            </Box>
            <Box width="66%">
                <Text>{name}</Text>
                <Text>{description}</Text>
            </Box>
        </Box>
    );
};

export default CheckoutSummaryItem;