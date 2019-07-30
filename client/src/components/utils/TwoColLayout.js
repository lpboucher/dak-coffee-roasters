import React from 'react';

import { Box } from 'grommet';

const TwoColLayout = ({bgColor, left, right}) => {
    return (
        <Box direction="row" pad="large" background={bgColor}>
                <Box pad="large" width="50%">
                    {left}
                </Box>
                <Box pad="large" width="50%">
                    {right}
                </Box>
        </Box>
    );
};

export default TwoColLayout;