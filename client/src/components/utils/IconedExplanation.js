import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Text } from 'grommet';

const IconedExplanation = ({icon, description, withLink=false, dest}) => {
    return (
        <Box as={Link} to={`${withLink ? dest : ''}`} direction="row">
            {icon}
            <Text>{description}</Text>
        </Box>
    );
};

export default IconedExplanation;