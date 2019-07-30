import React from 'react';

import { Box, Paragraph } from 'grommet';
import { Instagram } from 'grommet-icons';

const FooterDescription = () => {
    return (
        <Box width="40%" pad="medium">
            <Paragraph size="small" style={{"padding": "20px"}}>
                Dak Coffee Roasters is a coffee roasting company based in Amsterdam delivering high-quality specialty coffee. We strive to
            </Paragraph>
            <Box pad={{"horizontal": "20px"}}>
                <Instagram />
            </Box>
        </Box>
    );
};

export default FooterDescription;