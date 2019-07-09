import React from 'react';

import { Box, Paragraph } from 'grommet';
import { Instagram } from 'grommet-icons';

const FooterDescription = () => {
    return (
        <Box width="40%" pad="small">
            <Paragraph>
            Dak Coffee Roasters is a coffee roasting company based in Amsterdam delivering high-quality specialty coffee. We strive to
            </Paragraph>
            <Instagram />
        </Box>
    );
};

export default FooterDescription;