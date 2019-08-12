import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Box } from 'grommet';

const FooterLinks = ({t}) => {
    return (
        <Box direction="row" wrap pad="medium">
            <Box width="33%"><Link to="/shop" style={{'fontSize': '12px'}}>{t("footer.menu.shop")}</Link></Box>
            <Box width="33%"><Link to="/subscriptions" style={{'fontSize': '12px'}}>{t("footer.menu.subscription")}</Link></Box>
            <Box width="33%"><Link to="/about" style={{'fontSize': '12px'}}>{t("footer.menu.about-us")}</Link></Box>
            <Box width="33%"><Link to="/wholesale" style={{'fontSize': '12px'}}>{t("footer.menu.wholesale")}</Link></Box>
            <Box width="33%"><Link to="/blog" style={{'fontSize': '12px'}}>{t("footer.menu.blog")}</Link></Box>
            <Box width="33%"><Link to="/faq" style={{'fontSize': '12px'}}>{t("footer.menu.faq")}</Link></Box>
            <Box width="33%"><Link to="/contact" style={{'fontSize': '12px'}}>{t("footer.menu.contact")}</Link></Box>
            <Box width="33%"><Link to="/about" style={{'fontSize': '12px'}}>{t("footer.menu.community")}</Link></Box>
            <Box width="33%"><Link to="" style={{'fontSize': '12px'}}>{t("footer.menu.shipping")}</Link></Box>
            <Box width="33%"><Link to="" style={{'fontSize': '12px'}}>{t("footer.menu.terms")}</Link></Box>
            <Box width="33%"><Link to="" style={{'fontSize': '12px'}}>{t("footer.menu.payment")}</Link></Box>
        </Box>
    );
};

export default withTranslation()(FooterLinks);