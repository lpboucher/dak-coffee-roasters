import React from 'react';

import { Box } from 'grommet';

const SubscriptionSpecsItem = ({icon, header, desc}) => {
    return (
        <Box align="center">
            {icon}
            <p>{header}</p>
            <p>{desc}</p>
        </Box>
    );
};

export default SubscriptionSpecsItem;