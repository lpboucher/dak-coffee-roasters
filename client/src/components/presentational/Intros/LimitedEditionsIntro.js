import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const limited = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565720114/Intros/Coffeefortwo_xcyfkk.jpg';

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