import React from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';
import { withTranslation } from 'react-i18next';

import { Box, Paragraph } from 'grommet';
import { Instagram } from 'grommet-icons';

const FooterDescription = ({t, media}) => {
    const layout = {
        small: {width: '100%'},
        medium: {width: '100%'},
        large: {width: '40%'},
        infinity: {width: '40%'}
    }
    return (
        <Box width={layout[media].width} pad="medium">
            <Paragraph size="small" style={{"padding": "20px"}}>
                {t("footer.description")}
            </Paragraph>
            <Box pad={{"horizontal": "20px"}}>
                <Instagram />
            </Box>
        </Box>
    );
};

export default withTranslation()(withResponsive(FooterDescription));