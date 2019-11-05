import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const beans = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1572969989/Intros/BelieveinV2_cysbar.jpg';


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