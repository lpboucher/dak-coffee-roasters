import React, { Fragment } from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import FooterDescription from './FooterDescription';
import FooterLinks from './FooterLinks';
import FooterDisclaimer from './FooterDisclaimer';

import { Box } from 'grommet';

const Footer = ({media}) => {
    const layout = {
        small: 'column',
        medium: 'column',
        large: 'row',
        infinity: 'row'
    }
    return (
        <Fragment>
            <Box direction={layout[media]} pad="medium" background="lightGrey">
                <FooterDescription />
                <FooterLinks />
            </Box>
            <FooterDisclaimer />
        </Fragment>
    );
};

export default withResponsive(Footer);