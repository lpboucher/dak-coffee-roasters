import React from 'react';

import { Box } from 'grommet';

const TwoColLayout = ({bgColor, left, right}) => {
    return (
        <Box direction="row" background={bgColor}>
                <Box width="50%">
                    {left}
                </Box>
                <Box width="50%">
                    {right}
                </Box>
        </Box>
    );
};

export default TwoColLayout;