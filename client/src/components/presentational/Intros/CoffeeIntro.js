import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import coffee from '../../../assets/images/Coffeebeans.jpg';

const CoffeeIntro = () => {
    const intro = 
        <IntroSection 
        heading="intros.coffee.title" 
        description="intros.coffee.description"
        />
    return (
        <TwoColLayout 
            bgColor="mainWhite"
            right={<FullImg imgLink={coffee}/>}
            left={intro}
        />
    );
};

export default CoffeeIntro;