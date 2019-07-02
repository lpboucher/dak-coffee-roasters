import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';

const BrewingIntro = () => {
    return (
        <TwoColLayout
            introImage={"https://thumbs.dreamstime.com/z/black-bag-packaging-wide-variety-products-clipping-packet-path-wrapper-sweet-snack-milk-powder-coffee-salt-sugar-43471774.jpg"}
            bgColor={"darkGrey"}
            title={"OUr guide to brewing coffee"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}
            link={{dest: "/subscription", text: "Subscribe"}}
            inverse
        />   
    );
};

export default BrewingIntro;