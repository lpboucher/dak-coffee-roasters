import React, { Fragment } from 'react';

import { Grid } from 'grommet';

const NavbarLayout = ({util, logo, topNav, subNav}) => {
    const activeAreas = [
        { name: 'logo', start: [0, 0], end: [0, 0] },
        { name: 'topNav', start: [1, 0], end: [1, 0] },
        { name: 'subNav', start: [0, 1], end: [1, 1] },
    ]
    const activeRows = ['60px', '50px'];
    return (
    <Fragment>
            <Grid
            fill="horizontal"
            rows={activeRows}
            columns={['flex', '25%']}
            gap="none"
            areas={activeAreas}
            style={{background: "white", padding: "30px 0 0", position: "fixed", zIndex: "1"}}
            >
                {util}
                {logo}
                {topNav}
                {subNav
                }
        </Grid>
    </Fragment>
    );
};

export default NavbarLayout;