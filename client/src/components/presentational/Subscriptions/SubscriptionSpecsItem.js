import React from 'react';

import { Box, Heading, Text } from 'grommet';

const SubscriptionSpecsItem = ({icon, header, desc}) => {
    return (
        <Box align="center">
            {icon}
            <Heading textAlign="center" level={1} size="small" margin={{top: "small"}}>{header}</Heading>
            <Text textAlign="center" margin="small" size="small" style={{textTransform: 'uppercase'}}>{desc}</Text>
        </Box>
    );
};

export default SubscriptionSpecsItem;