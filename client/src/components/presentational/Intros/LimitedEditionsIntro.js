import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import limited from '../../../assets/images/Coffeefortwo.jpg';

const LimitedEditionsIntro = () => {
    const intro = 
        <IntroSection 
            heading="intros.limited edition.title"
            subHeading="intros.limited edition.subtitle" 
            helperText="intros.limited edition.helper"
            description="intros.limited edition.description"
            btnLabel="intros.limited edition.button"
            link="/shop"
        />
    return (
        <TwoColLayout 
            bgColor="mainWhite"
            right={<FullImg imgLink={limited} />}
            left={intro}
        />
    );
};

export default LimitedEditionsIntro;