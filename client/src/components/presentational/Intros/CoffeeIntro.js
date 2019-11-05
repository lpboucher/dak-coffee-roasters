import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const coffee = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/q_auto:good/v1572969989/Intros/BelieveinV2_cysbar.jpg';

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