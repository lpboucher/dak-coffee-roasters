import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import beans from '../../../assets/images/Coffeebeans.jpg';

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