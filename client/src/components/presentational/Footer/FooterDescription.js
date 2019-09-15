import React from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';
import { withTranslation } from 'react-i18next';

import { Box, Paragraph } from 'grommet';
import { Instagram } from 'grommet-icons';

const FooterDescription = ({t, media}) => {
    const layout = {
        extraSmall: {width: '100%', pad: '0 0 20px'},
        small: {width: '100%' , pad: '0 0 20px'},
        medium: {width: '100%' , pad: '20px 0'},
        large: {width: '40%', pad: '20px 0'},
        infinity: {width: '40%', pad: '20px 0'}
    }
    return (
        <Box width={layout[media] ? layout[media].width : '100%'} pad="medium">
            <Paragraph size="small" style={{"padding": layout[media] ? layout[media].pad : '20px 0'}}>
                {t("footer.description")}
            </Paragraph>
            <Box pad={{"horizontal": media === "large" || media === "infinity" ? "20px 0px" : "0"}}>
                <a href="http://www.instagram.com/dakcoffeeroasters" target="_blank" rel="noopener noreferrer">
                    <Instagram />
                </a>
            </Box>
        </Box>
    );
};

export default withTranslation()(withResponsive(FooterDescription));