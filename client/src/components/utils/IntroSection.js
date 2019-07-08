import React from 'react';

import { Box, Heading, Text } from 'grommet';

const IntroSection = ({heading, subHeading, helperText, description, children}) => {
    return (
        <Box>
            <Heading level={1}>{heading}</Heading>
            <Heading level={3}>{subHeading}</Heading>
            <Heading level={5}>{helperText}</Heading>
            <Text>{description}</Text>
        </Box>
    );
};

export default IntroSection;