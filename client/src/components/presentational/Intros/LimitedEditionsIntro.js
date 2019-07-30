import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const LimitedEditionsIntro = () => {
    const intro = 
        <IntroSection 
            heading="Our Limited Edition" 
            subHeading="Coffee for Two"
            helperText="Tasting note line"
            description={`This month’s limited edition is from the region of Chalatenango in El Salvador. You can expect tasting notes of almond, caramel and cacao butter. We’ve roasted this single origin coffee as an omni-roast, equally delicious if brewed as an espresso or as a filter coffee. We have limited quantities!\n\nFarm: Finca El Caracol | Country: El Salvador\nRegion: Chalatenango | Process: Washed\nAltitude: 1700m | Variety: Pacamara`}
            btnLabel="Buy Coffee"
            link="/shop"
        />
    return (
        <TwoColLayout 
            bgColor="mainWhite"
            right={<FullImg imgLink={"https://thumbs.dreamstime.com/z/black-bag-packaging-wide-variety-products-clipping-packet-path-wrapper-sweet-snack-milk-powder-coffee-salt-sugar-43471774.jpg"}/>}
            left={intro}
        />
    );
};

export default LimitedEditionsIntro;