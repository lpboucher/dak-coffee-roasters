import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import brewing from '../../../assets/images/Ourbrewingguides.jpg';

const BrewingIntro = () => {
    const intro = 
        <IntroSection 
            link="/about"
            heading="intros.brewing.title"
            description="intros.brewing.description"
            btnLabel="intros.brewing.button"
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