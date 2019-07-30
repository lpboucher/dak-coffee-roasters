import React from 'react';

import { Box, Text } from 'grommet';

const IconedExplanation = ({icon, description, size, spacing, vertical}) => {
    return (
        <Box pad={spacing} direction="row" align={vertical}>
            {icon}
            <Text size={size}>{description}</Text>
        </Box>
    );
};

export default IconedExplanation;