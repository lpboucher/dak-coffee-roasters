import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../utils/Logo';

import { Box } from 'grommet';

const LogoBar = ({loc}) => {
    return (
        <Box direction="row" align="center" justify="center" gridArea={loc} fill pad={{'left': '25vw', 'top': '15px'}}>
            <Link to="/">
                <Logo width="120px" />
            </Link>
        </Box>
    );
}

export default LogoBar;