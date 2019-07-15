import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Logout } from 'grommet-icons';

const LogOut = ({loggedIn}) => {
    return (
        <Fragment>
            {loggedIn &&
            <Link to="/logout">
                <Logout />
            </Link>
            }
        </Fragment>
    );
};

export default LogOut;