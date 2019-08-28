import React from 'react';
import withResponsive from '../utils/HOCs/WithResponsive';

import { Box } from 'grommet';

const TwoColLayout = ({bgColor, left, right, pad={outer: "large", inner:"large"}, media}) => {
    const layout = {
        small: {
            width: '100%', 
            pad: {
                outer: 'none',
                inner: {vertical: 'medium', horizontal: 'large'}
            }
        },
        medium: {
            width: '100%', 
            pad: {
                outer: 'none',
                inner: {vertical: 'medium', horizontal: 'large'}
            }
        },
        large: {
            width: '50%', 
            pad: {
                outer: pad.outer,
                inner: pad.inner
            }
        },
        infinity: {
            width: '50%', 
            pad: {
                outer: pad.outer,
                inner: pad.inner
            }
        },
    };
    return (
            <Box direction='row' pad={layout[media].pad.outer} background={bgColor} wrap>
                <Box pad={layout[media].pad.inner} width={layout[media].width}>
                    {left}
                </Box>
                <Box pad={layout[media].pad.inner} width={layout[media].width}>
                    {right}
                </Box>
            </Box>
    );
};

export default withResponsive(TwoColLayout);