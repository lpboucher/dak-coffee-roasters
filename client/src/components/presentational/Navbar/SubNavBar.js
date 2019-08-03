import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Box, Menu } from 'grommet';

import { SUB_NAV } from '../../../constants/Navigation';

const NavItem = styled(NavLink)`
    position: relative;
    display: block;
    transition: color 0.1s,background-color 0.1s,padding 0.2s ease-in;
    color: #000;
    text-transform: uppercase;

    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: #000;
        transform-origin: right top;
        transform: scale(0, 1);
        transition: color 0.1s,transform 0.2s ease-out;
    }
    &:hover,
    &:focus,
    &:active {
        color: #999;
        text-decoration: none;
    }
    &:active::before {
        background-color: #000;
    }   
    &:hover::before,
    &:focus::before {
        transform-origin: left top;
        transform: scale(1, 1);
    }
`

const SubNavbar = ({loc}) => {
    return (
        <Box 
            gridArea={loc}
            direction="row"
            align="center"
            justify="around"
            margin={{'horizontal': '50px'}}
        >
            { SUB_NAV.map(nav => (
                <Box 
                    key={nav.menuText.replace(/\s+/g, '')}
                    pad="xsmall"
                >
                    {nav.subs.length > 0 ?
                        <Menu label={nav.menuText}
                            dropBackground="mainWhite"
                            icon={nav.type === "drop"}
                            items={nav.subs ? nav.subs.map(sub => ({label: sub.label, as: NavItem, to: sub.link})) : ""}
                            margin="none"
                        />
                        :
                        <NavItem to={nav.link}>{nav.menuText}</NavItem>
                    }
                </Box>
            ))}
        </Box>
    );
};

export default SubNavbar;