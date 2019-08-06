import React from 'react';

import { Box } from 'grommet';

const TwoColLayout = ({bgColor, left, right, pad={outer: "large", inner:"large"}}) => {
    return (
        <Box direction="row" pad={pad.outer} background={bgColor}>
                <Box pad={pad.inner} width="50%">
                    {left}
                </Box>
                <Box pad={pad.inner} width="50%">
                    {right}
                </Box>
        </Box>
    );
};

export default TwoColLayout;