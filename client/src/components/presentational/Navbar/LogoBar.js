import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../utils/Logo';

const LogoBar = () => {
    return (
        <Link to="/">
            <Logo width="150px" />
        </Link>
    );
};

export default LogoBar;