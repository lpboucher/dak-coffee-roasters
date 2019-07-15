import React from 'react';
import { Link } from 'react-router-dom';

import { UserSettings, Login } from 'grommet-icons';

const Account = ({loggedIn}) => {
    return (
        <Link to="/account">
            {loggedIn === true ?
                <UserSettings />
            :
                <Login />
            }
        </Link>
    );
};

export default Account;