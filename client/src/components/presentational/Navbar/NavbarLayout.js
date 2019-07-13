import React, { Fragment } from 'react';

import { Grid } from 'grommet';

const NavbarLayout = ({logo, topNav, subNav}) => {
    return (
    <Fragment>
            <Grid
            fill
            rows={['100px', 'flex']}
            columns={['flex', '25%']}
            gap="none"
            areas={[
                { name: 'logo', start: [0, 0], end: [0, 0] },
                { name: 'topNav', start: [1, 0], end: [1, 0] },
                { name: 'subNav', start: [0, 1], end: [1, 1] },
            ]}
            >
                {logo}
                {topNav}
                {subNav}
        </Grid>
    </Fragment>
    );
};

export default NavbarLayout;