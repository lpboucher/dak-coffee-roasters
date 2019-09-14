import React from 'react';
import { withTranslation } from 'react-i18next';
import { NavLink, withRouter } from 'react-router-dom';

import Footer from '../Footer/Footer';
import { Layer, Box, Menu, Button } from 'grommet';
import { Close } from 'grommet-icons';

const MobileMenu = ({close, t, history}) => {
    return (
        <Layer full modal onEsc={close} onClickOutside={close}>
            <Box align="start" justify="around" height="100%" pad={{'horizontal': '50px', top: '20px'}} background="darkGrey">
                <Box alignSelf="end" onClick={close}>
                    <Close />
                </Box>
                <Box pad="xsmall" fill="horizontal" onClick={()=>{history.push('/shop'); close()}}>
                    <Button plain ><NavLink style={{textTransform: 'uppercase', padding: '6px'}} to="/shop">{t("menu.shop")}</NavLink></Button>
                </Box>
                <Box pad="xsmall" fill="horizontal" onClick={()=>{history.push('/subscriptions'); close()}}>
                    <Button plain><NavLink style={{textTransform: 'uppercase', padding: '6px'}} to="/subscriptions">{t("menu.subscriptions")}</NavLink></Button>
                </Box>
                <Box pad="xsmall" fill="horizontal">
                    <Menu 
                        label={t("menu.about.top")}
                        dropBackground="darkGrey"
                        margin="none"
                        items={[
                            {label: `${t("menu.about.coffee")}`, as: NavLink, to: "/our-coffee"},
                            {label: `${t("menu.about.about")}`, as: NavLink, to: "/about"},
                        ]}
                    />
                </Box>
                <Box pad="xsmall" fill="horizontal" onClick={()=>{history.push('/wholesale'); close()}}>
                    <Button plain><NavLink style={{textTransform: 'uppercase', padding: '6px'}} to="/wholesale">{t("menu.wholesale")}</NavLink></Button>
                </Box>
                <Box pad="xsmall" fill="horizontal" onClick={()=>{history.push('/contact'); close()}}>
                    <Button plain><NavLink style={{textTransform: 'uppercase', padding: '6px'}}to="/contact">{t("menu.contact")}</NavLink></Button>
                </Box>
                <Box pad="xsmall" fill="horizontal">
                    <Menu 
                        label={t("menu.blog.top")}
                        dropBackground="darkGrey"
                        margin="none"
                        items={[
                            {label: `${t("menu.blog.guides")}`, as: NavLink, to: "/brew"},
                            {label: `${t("menu.blog.articles")}`, as: NavLink, to: "/blog"},
                        ]}
                    />
                </Box>
                <Footer></Footer>
            </Box>
        </Layer>
    );
};

export default withRouter(withTranslation()(MobileMenu));