import React from 'react';
import { NavLink } from 'react-router-dom';

import { Box } from 'grommet';

import { SUB_NAV } from '../../../constants/Navigation';

const SubNavbar = ({loc}) => {
    return (
        <Box 
            gridArea={loc}
            direction="row"
            align="center"
            justify="around"
            border="bottom"
            margin={{"bottom": "20px", 'left': '50px', 'right': '50px'}}
        >
            { SUB_NAV.map(item => (
                <Box 
                    key={item.menuText.replace(/\s+/g, '')}
                    as={NavLink}
                    to={item.link}
                    activeStyle={{textDecoration: 'line-through', textDecorationColor: 'var(--darkHighlight)'}}
                    pad="small"
                >
                    {item.menuText}
                </Box>
            ))}
        </Box>
    );
};

export default SubNavbar;