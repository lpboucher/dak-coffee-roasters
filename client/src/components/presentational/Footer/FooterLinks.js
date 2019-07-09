import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { FOOTER_NAV } from '../../../constants/Navigation';

import { Box } from 'grommet';

const FooterLinks = () => {
    return (
        <Fragment>
            <Box direction="row" wrap>
            { FOOTER_NAV.map((item, index) => 
                <Box key={`${item.menuText}-${index}`} width="33%">
                    <Link to={item.link}>{item.menuText}</Link>
                </Box>
                )}
            </Box>
        </Fragment>
    );
};

export default FooterLinks;