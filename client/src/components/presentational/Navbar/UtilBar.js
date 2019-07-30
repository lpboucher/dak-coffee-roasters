import React from 'react';
import { Link } from 'react-router-dom';

import { Text, Box } from 'grommet';
import { UserSettings, User } from 'grommet-icons';

const UtilBar = ({loc}) => {
    return (
        <Box direction="row" gridArea={loc} fill="horizontal" align="center" justify="start" margin={{"left": "50px"}}>
                <Box direction="row" align="center">
                    <Text margin="small" size="small">EUR</Text>
                </Box>
                <Box direction="row" align="center">
                    <Text margin="small" size="small">EN</Text>
                </Box>
        </Box>
    );
};

export default UtilBar;