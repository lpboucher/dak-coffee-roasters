import React from 'react';
import { withRouter } from 'react-router-dom';

import { User } from 'grommet-icons';
import { Box, Menu } from 'grommet';

const Account = withRouter(({loggedIn, logout, history}) => {
    const subMenus = loggedIn ? [
        { label: 'Account Settings', onClick: () => {history.push('/account')} },
        { label: 'Log Out', onClick: () => {logout()} },
    ] :
    [
        { label: 'Log In', onClick: () => {history.push('/account')} },
    ]
    return (
        <Box direction="row" align="center">
            <Menu
                label="MY ACCOUNT"
                items={subMenus}
                icon={false}
                size="xsmall"
            />
            <User />
        </Box>
    );
}
)

export default Account;