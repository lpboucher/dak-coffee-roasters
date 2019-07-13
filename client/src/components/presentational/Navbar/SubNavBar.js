import React from 'react';
import { NavLink } from 'react-router-dom';

import { Box, Menu } from 'grommet';

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
            { SUB_NAV.map(nav => (
                <Box 
                    key={nav.menuText.replace(/\s+/g, '')}
                    as={NavLink}
                    to={nav.link}
                    activeStyle={{textDecoration: 'line-through', textDecorationColor: 'var(--darkHighlight)'}}
                    pad="small"
                >
                    <Menu label={nav.menuText}
                        dropBackground="mainWhite"
                        icon={nav.type === "drop"}
                        items={nav.subs ? nav.subs.map(sub => ({label: sub.label, as: NavLink, to: sub.link})) : ""}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default SubNavbar;