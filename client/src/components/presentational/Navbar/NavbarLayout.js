import React, { Fragment } from 'react';

import { Grid } from 'grommet';

const NavbarLayout = ({announcement, logo, topNav, subNav}) => {
    const activeAreas = [
        { name: 'announce', start: [0, 0], end: [1, 0]},
        { name: 'logo', start: [0, 1], end: [0, 1] },
        { name: 'topNav', start: [1, 1], end: [1, 1] },
        { name: 'subNav', start: [0, 2], end: [1, 2] },
    ]
    const activeRows = ['30px', '60px', '50px'];
    return (
    <Fragment>
            <Grid
            fill="horizontal"
            rows={activeRows}
            columns={['flex', '25%']}
            gap="none"
            areas={activeAreas}
            style={{background: "white", padding: "0", position: "fixed", zIndex: "1"}}
            >
                {announcement}
                {logo}
                {topNav}
                {subNav
                }
        </Grid>
    </Fragment>
    );
};

export default NavbarLayout;