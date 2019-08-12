import React from 'react';
import { withTranslation } from 'react-i18next';

import { Box, Paragraph } from 'grommet';
import { Instagram } from 'grommet-icons';

const FooterDescription = ({t}) => {
    return (
        <Box width="40%" pad="medium">
            <Paragraph size="small" style={{"padding": "20px"}}>
                {t("footer.description")}
            </Paragraph>
            <Box pad={{"horizontal": "20px"}}>
                <Instagram />
            </Box>
        </Box>
    );
};

export default withTranslation()(FooterDescription);