import React from 'react';
import { withRouter } from 'react-router-dom';

import Logo from '../../utils/Logo';

import { Box } from 'grommet';

const LogoBar = withRouter(({loc, history}) => {
    return (
        <Box direction="row" align="center" justify="center" gridArea={loc} fill margin={{'left': '12.5vw'}} onClick={() => history.pushState('/')}>
            <Logo width="150px" />
        </Box>
    );
})

export default LogoBar;