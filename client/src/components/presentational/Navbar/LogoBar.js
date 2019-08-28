import React from 'react';
import { Link } from 'react-router-dom';
import withResponsive from '../../utils/HOCs/WithResponsive';

import Logo from '../../utils/Logo';

import { Box } from 'grommet';

const LogoBar = ({loc, media}) => {
    const layout = {
        small: {pad: {'left': '0vw', 'top': '15px'}},
        medium: {pad: {'left': '30vw', 'top': '15px'}},
        large: {pad: {'left': '25vw', 'top': '15px'}},
        infinity: {pad: {'left': '25vw', 'top': '15px'}},
    }
    return (
        <Box direction="row" align="center" justify="center" gridArea={loc} fill pad={layout[media].pad}>
            <Link to="/">
                <Logo width="120px" />
            </Link>
        </Box>
    );
}

export default withResponsive(LogoBar);