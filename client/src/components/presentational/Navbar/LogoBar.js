import React from 'react';
import { Link } from 'react-router-dom';
import withResponsive from '../../utils/HOCs/WithResponsive';

import Logo from '../../utils/Logo';

import { Box } from 'grommet';

const LogoBar = ({loc, media}) => {
    const layout = {
        extraSmall: {
            pad: {'left': '10vw', 'top': '0px'},
            width: "80px",
            align: "start"
        },
        small: {
            pad: {'left': '10vw', 'top': '0px'},
            width: "80px",
            align: "start"
        },
        medium: {
            pad: {'left': '30vw', 'top': '0px'},
            width: "80px",
            align: "start"
        },
        large: {
            pad: {'left': '25vw', 'top': '15px'},
            width: "120px",
            align: "center"
        },
        infinity: {
            pad: {'left': '25vw', 'top': '15px'},
            width: "120px",
            align: "center"
        },
    }
    return (
        <Box direction="row" align="center" justify={layout[media] ? layout[media].align : "center"} gridArea={loc} fill pad={layout[media] ? layout[media].pad : {'left': '0vw', 'top': '15px'}}>
            <Link to="/">
                <Logo width={layout[media] ? layout[media].width : "60px"} />
            </Link>
        </Box>
    );
}

export default withResponsive(LogoBar);