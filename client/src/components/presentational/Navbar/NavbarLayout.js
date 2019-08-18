import React, { Fragment } from 'react';

import { Grid } from 'grommet';

const NavbarLayout = ({announcement, logo, topNav, subNav, show}) => {
    /*const activeAreas = [
        { name: 'announce', start: [0, 0], end: [1, 0]},
        { name: 'logo', start: [0, 1], end: [0, 1] },
        { name: 'topNav', start: [1, 1], end: [1, 1] },
        { name: 'subNav', start: [0, 2], end: [1, 2] },
    ]
    const activeRows = ['30px', '60px', '50px'];*/
    const headerStyles = { background: "white", padding: "0", zIndex: "1", position: "fixed" }
    const activeAreas = show ? 
    [
        { name: 'announce', start: [0, 0], end: [1, 0]},
        { name: 'logo', start: [0, 1], end: [0, 1] },
        { name: 'topNav', start: [1, 1], end: [1, 1] },
        { name: 'subNav', start: [0, 2], end: [1, 2] },
    ] : [
        { name: 'logo', start: [0, 0], end: [0, 0] },
        { name: 'topNav', start: [1, 0], end: [1, 0] },
    ]
    const activeRows = show ? ['30px', '60px', '50px'] : ['60px'];
    return (
    <Fragment>
            <Grid
            fill="horizontal"
            rows={activeRows}
            columns={['flex', '25%']}
            gap="none"
            areas={activeAreas}
            style={headerStyles}
            >
                {show ? announcement : null}
                {logo}
                {topNav}
                {show ? subNav : null}
        </Grid>
    </Fragment>
    );
};

export default NavbarLayout;