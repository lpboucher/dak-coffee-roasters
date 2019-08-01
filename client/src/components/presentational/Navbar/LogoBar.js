import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../utils/Logo';

import { Box } from 'grommet';

const LogoBar = ({loc}) => {
    return (
        <Box direction="row" align="center" justify="center" gridArea={loc} fill margin={{'left': '12.5vw'}}>
            <Link to="/">
                <Logo width="150px" />
            </Link>
        </Box>
    );
}

export default LogoBar;