import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter, NavLink } from 'react-router-dom';

import { User } from 'grommet-icons';
import { Box, Menu } from 'grommet';

const Account = withRouter(({t, loggedIn, logout, history}) => {
    const subMenus = [
        { label: `${t("nav.account")}`, onClick: () => {history.push('/account')} },
        { label: `${t("nav.log out")}`, onClick: () => {logout()} },
    ];
    return (
        <Box direction="row" align="center">
            {loggedIn ?
                <Menu
                    label={<User />}
                    items={subMenus}
                    icon={false}
                    size="xsmall"
                />
                :
                <NavLink to="/login"><User /></NavLink>
            }
        </Box>
    );
}
)

export default withTranslation()(Account);