import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Logout } from 'grommet-icons';

const LogOut = ({loggedIn, logout}) => {
    return (
        <Fragment>
            {loggedIn &&
                <Logout onClick={logout}/>
            }
        </Fragment>
    );
};

export default LogOut;