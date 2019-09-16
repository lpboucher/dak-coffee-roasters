import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../utils/HOCs/WithResponsive';
import { Link } from 'react-router-dom';

import { Box } from 'grommet';

const FooterLinks = ({t, media}) => {
    const layout = {
        extraSmall: {width: '50%'},
        small: {width: '50%'},
        medium: {width: '33%'},
        large: {width: '33%'},
        infinity: {width: '33%'},
    }
    return (
        <Box direction="row" wrap pad="medium">
            <Box width={layout[media] ? layout[media].width : '50%'}><Link to="/about" style={{'fontSize': '12px'}}>{t("footer.menu.about-us")}</Link></Box>
            <Box width={layout[media] ? layout[media].width : '50%'}><Link to="/shop" style={{'fontSize': '12px'}}>{t("footer.menu.shop")}</Link></Box>
            <Box width={layout[media] ? layout[media].width : '50%'}><Link to="/contact" style={{'fontSize': '12px'}}>{t("footer.menu.contact")}</Link></Box>
            <Box width={layout[media] ? layout[media].width : '50%'}><Link to="/subscriptions" style={{'fontSize': '12px'}}>{t("footer.menu.subscription")}</Link></Box>
            <Box width={layout[media] ? layout[media].width : '50%'}><Link to="/faq" style={{'fontSize': '12px'}}>{t("footer.menu.faq")}</Link></Box>
            <Box width={layout[media] ? layout[media].width : '50%'}><Link to="" style={{'fontSize': '12px'}}>{t("footer.menu.shipping")}</Link></Box>
            <Box width={layout[media] ? layout[media].width : '50%'}><Link to="/our-coffee" style={{'fontSize': '12px'}}>{t("footer.menu.our-coffee")}</Link></Box>
            <Box width={layout[media] ? layout[media].width : '50%'}><Link to="/blog" style={{'fontSize': '12px'}}>{t("footer.menu.blog")}</Link></Box>
            <Box width={layout[media] ? layout[media].width : '50%'}><Link to="/terms" style={{'fontSize': '12px'}}>{t("footer.menu.terms")}</Link></Box>
            <Box width={layout[media] ? layout[media].width : '50%'}><Link to="/wholesale" style={{'fontSize': '12px'}}>{t("footer.menu.wholesale")}</Link></Box>
            <Box width={layout[media] ? layout[media].width : '50%'}><Link to="" style={{'fontSize': '12px'}}>{t("footer.menu.brewing")}</Link></Box>
            <Box width={layout[media] ? layout[media].width : '50%'}><Link to="/privacy" style={{'fontSize': '12px'}}>{t("footer.menu.privacy")}</Link></Box>
        </Box>
    );
};

export default withTranslation()(withResponsive(FooterLinks));