import React from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import FooterDescription from './FooterDescription';
import FooterLinks from './FooterLinks';
import FooterDisclaimer from './FooterDisclaimer';

import { Box } from 'grommet';

const Footer = ({media}) => {
    const layout = {
        extraSmall: {dir: 'column', pad: 'large'},
        small: {dir: 'column', pad: 'large'},
        medium: {dir: 'column', pad: 'large'},
        large: {dir: 'row', pad: 'medium'},
        infinity: {dir: 'row', pad: 'medium'}
    }
    return (
        <>
            <Box direction={layout[media] ? layout[media].dir : 'column'} pad={layout[media] ? layout[media].pad : 'large'} background="lightGrey">
                
                <FooterDescription />
                <FooterLinks />
            </Box>
            <FooterDisclaimer />
        </>
    );
};

export default withResponsive(Footer);