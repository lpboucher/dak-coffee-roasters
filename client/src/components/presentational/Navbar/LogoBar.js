import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../utils/Logo';

import { Box } from 'grommet';

const LogoBar = ({loc}) => {
    return (
        <Box directtion="row" align="center" justify="center" gridArea={loc} fill as={Link} to="/" margin={{'left': '12.5vw'}}>
            <Logo width="150px" />
        </Box>
    );
};

export default LogoBar;