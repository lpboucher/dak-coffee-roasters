import React, { Fragment } from 'react';

import FooterDescription from './FooterDescription';
import FooterLinks from './FooterLinks';
import FooterDisclaimer from './FooterDisclaimer';

import { Box } from 'grommet';

const Footer = () => {
    return (
        <Fragment>
            <Box direction="row" pad="medium" background="lightGrey">
                <FooterDescription />
                <FooterLinks />
            </Box>
            <FooterDisclaimer />
        </Fragment>
    );
};

export default Footer;