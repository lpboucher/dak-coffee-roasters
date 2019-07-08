import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const ValuesIntro = () => {
    const intro = 
        <IntroSection 
            heading="Tagline about us and values" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        />
    return (
        <TwoColLayout 
            bgColor="mainWhite"
            left={<FullImg imgLink={"https://thumbs.dreamstime.com/z/black-bag-packaging-wide-variety-products-clipping-packet-path-wrapper-sweet-snack-milk-powder-coffee-salt-sugar-43471774.jpg"}/>}
            right={intro}
        />
    );
};

export default ValuesIntro;