import React from 'react';

import { Box, Text } from 'grommet';

const IconedExplanation = ({icon, description, background, size, spacing, vertical}) => {
    return (
        <Box background={background} pad={spacing} direction="row" align={vertical}>
            {icon}
            <Text size={size}>{description}</Text>
        </Box>
    );
};

export default IconedExplanation;