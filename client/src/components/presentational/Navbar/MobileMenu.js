import React from 'react';
import { withTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { Layer, Box, Menu } from 'grommet';

const MobileMenu = ({close, t}) => {
    return (
        <Layer full modal onEsc={close} onClickOutside={close}>
            <Box align="center" justify="around" margin={{'horizontal': '50px'}}>
                <Box pad="xsmall">
                    <NavLink to="/shop">{t("menu.shop")}</NavLink>
                </Box>
                <Box pad="xsmall">
                    <NavLink to="/subscriptions">{t("menu.subscriptions")}</NavLink>
                </Box>
                <Box pad="xsmall">
                    <Menu 
                        label={t("menu.about.top")}
                        dropBackground="mainWhite"
                        margin="none"
                        items={[
                            {label: `${t("menu.about.coffee")}`, as: NavLink, to: "/our-coffee"},
                            {label: `${t("menu.about.about")}`, as: NavLink, to: "/about"},
                        ]}
                    />
                </Box>
                <Box pad="xsmall">
                    <NavLink to="/wholesale">{t("menu.wholesale")}</NavLink>
                </Box>
                <Box pad="xsmall">
                    <NavLink to="/contact">{t("menu.contact")}</NavLink>
                </Box>
                <Box pad="xsmall">
                    <Menu 
                        label={t("menu.blog.top")}
                        dropBackground="mainWhite"
                        margin="none"
                        items={[
                            {label: `${t("menu.blog.guides")}`, as: NavLink, to: "/brew"},
                        ]}
                    />
                </Box>
            </Box>
        </Layer>
    );
};

export default withTranslation()(MobileMenu);