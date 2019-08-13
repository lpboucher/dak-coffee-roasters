import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const brewing = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565720115/Intros/Ourbrewingguides_e0zw12.jpg';

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