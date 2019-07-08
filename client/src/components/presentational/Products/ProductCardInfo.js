import React from 'react';

import { Box, Text } from 'grommet';
import { AddCircle } from 'grommet-icons';

const ProductCardInfo = ({id, name, description, add}) => {
    return (
        <Box height="100%" width="100%" direction="row" align="center" justify="around">
            <Box flex="grow">
                <Text textAlign="center">{name}</Text>
                <Text textAlign="center">{description}</Text>
            </Box>
            <Box pad="small">
                <AddCircle onClick={() => add(id, '1')}/>
            </Box>
        </Box>
    );
};

export default ProductCardInfo;