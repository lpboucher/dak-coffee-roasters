import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const beans = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565720115/Intros/Coffeebeans_m6lnjc.jpg';

const ValuesIntro = () => {
    const intro = 
        <IntroSection 
            link="/about"
            heading="intros.values.title"
            description="intros.values.description"
            btnLabel="intros.values.button"
        />
    return (
        <TwoColLayout 
            bgColor="mainWhite"
            left={<FullImg imgLink={beans}/>}
            right={intro}
        />
    );
};

export default ValuesIntro;