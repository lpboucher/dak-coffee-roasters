import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import brewing from '../../../assets/images/Ourbrewingguides.jpg';

const BrewingIntro = () => {
    const intro = 
        <IntroSection 
            heading="Our guide to brewing coffee"
            description={`No matter the roast and origin, coffee is only ever as good as it is extracted. That is why, for each coffee, we provide guidance on how best to brew it; a step-by-step guide developed from countless cupping sessions and iterations.\n\nWe feel it is also important to understand why or how different extraction methods highlight different flavor notes in a coffee. A better understanding of the variables at play allows all coffee drinkers to make more informed choices about their roasts, coffees etc.\n\nWe believe we’ve done a good job if you, the customer, are curious enough to explore extraction methods different from your usual one!`}
            btnLabel="Read More"
            link="/about"
        />
    return (
        <TwoColLayout 
            bgColor="darkGrey"
            right={<FullImg imgLink={brewing}/>}
            left={intro}
        />
    );
};

export default BrewingIntro;