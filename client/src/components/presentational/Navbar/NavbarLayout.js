import React from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import { Grid } from 'grommet';

const NavbarLayout = ({announcement, logo, topNav, subNav, media}) => {
    const layout = {
        small: {
            areas: [
                { name: 'announce', start: [0, 0], end: [1, 0]},
                { name: 'logo', start: [0, 1], end: [0, 1] },
                { name: 'topNav', start: [1, 1], end: [1, 1] },
            ],
            rows: ['30px', '80px'],
            columns: ['flex', '50%']
        },
        medium: {
            areas: [
                { name: 'announce', start: [0, 0], end: [1, 0]},
                { name: 'logo', start: [0, 1], end: [0, 1] },
                { name: 'topNav', start: [1, 1], end: [1, 1] },
            ],
            rows: ['30px', '80px'],
            columns: ['flex', '30%']
        },
        large: {
            areas: [
                { name: 'announce', start: [0, 0], end: [1, 0]},
                { name: 'logo', start: [0, 1], end: [0, 1] },
                { name: 'topNav', start: [1, 1], end: [1, 1] },
                { name: 'subNav', start: [0, 2], end: [1, 2] },
            ],
            rows: ['30px', '80px', '40px'],
            columns: ['flex', '25%']
        },
        infinity: {
            areas: [
                { name: 'announce', start: [0, 0], end: [1, 0]},
                { name: 'logo', start: [0, 1], end: [0, 1] },
                { name: 'topNav', start: [1, 1], end: [1, 1] },
                { name: 'subNav', start: [0, 2], end: [1, 2] },
            ],
            rows: ['30px', '80px', '40px'],
            columns: ['flex', '25%']
        },
    }
    const headerStyles = { background: "white", padding: "0", zIndex: "1", position: "fixed" }
    return (
    <>
            <Grid
            fill="horizontal"
            rows={layout[media] ? layout[media].rows : ['30px', '80px']}
            columns={layout[media] ? layout[media].columns : ['flex', '50%']}
            gap="none"
            areas={layout[media] ? layout[media].areas : [
                { name: 'announce', start: [0, 0], end: [1, 0]},
                { name: 'logo', start: [0, 1], end: [0, 1] },
                { name: 'topNav', start: [1, 1], end: [1, 1] },
            ]}
            style={headerStyles}
            >
                {announcement}
                {logo}
                {topNav}
                {media === 'large' || media === "infinity" ? subNav : null}
        </Grid>
    </>
    );
};

export default withResponsive(NavbarLayout);