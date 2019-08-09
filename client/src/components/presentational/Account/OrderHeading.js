import React, {Fragment} from 'react';

import { Box, Text } from 'grommet';

const OrderHeading = ({id, headers}) => {
    return (
        <Fragment>
            <Box width="100%" direction="row" align="center">
                {headers.map(header => (
                    <Box key={`${id}${header}`} align="center" width="17%">
                        <Text>{header}</Text>
                    </Box>
                ))}
            </Box>
        </Fragment>
    );
};

export default OrderHeading;