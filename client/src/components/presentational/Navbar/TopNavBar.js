import React from 'react';

import TopNavContainer from '../../container/Navbar/TopNavContainer';

import { Box } from 'grommet';

const TopNavBar = ({loc}) => {
    return (
    <Box direction="row" gridArea={loc} fill="horizontal" align="center" justify="evenly">
        <TopNavContainer />
    </Box>
    );
};

export default TopNavBar;
