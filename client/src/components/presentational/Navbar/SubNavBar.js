import React from 'react';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Box, Menu } from 'grommet';

const NavItem = styled(NavLink)`
    position: relative;
    display: block;
    transition: color 0.1s,background-color 0.1s,padding 0.2s ease-in;
    color: #000;
    text-transform: uppercase;

    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: #000;
        transform-origin: right top;
        transform: scale(0, 1);
        transition: color 0.1s,transform 0.2s ease-out;
    }
    &:hover,
    &:focus,
    &:active {
        color: #999;
        text-decoration: none;
    }
    &:active::before {
        background-color: #000;
    }   
    &:hover::before,
    &:focus::before {
        transform-origin: left top;
        transform: scale(1, 1);
    }
`

const SubNavbar = ({loc, t}) => {
    return (
        <Box gridArea={loc} direction="row" align="center" justify="around" margin={{'horizontal': '50px'}}>
            <Box pad="xsmall">
                <NavItem to="/shop">{t("menu.shop")}</NavItem>
            </Box>
            <Box pad="xsmall">
                <NavItem to="/subscriptions">{t("menu.subscriptions")}</NavItem>
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
                <NavItem to="/wholesale">{t("menu.wholesale")}</NavItem>
            </Box>
            <Box pad="xsmall">
                <NavItem to="/contact">{t("menu.contact")}</NavItem>
            </Box>
            <Box pad="xsmall">
                <Menu 
                    label={t("menu.blog.top")}
                    dropBackground="mainWhite"
                    margin="none"
                    items={[
                        {label: `${t("menu.blog.guides")}`, as: NavLink, to: "/brew"},
                        {label: `${t("menu.blog.articles")}`, as: NavLink, to: "/blog"},
                    ]}
                />
            </Box>
        </Box>
    );
};

export default withTranslation()(SubNavbar);