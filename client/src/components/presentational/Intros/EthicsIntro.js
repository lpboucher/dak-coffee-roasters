import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import ethics from '../../../assets/images/EthicallySourced.jpg'

const EthicsIntro = () => {
    const intro = 
        <IntroSection 
            heading="intros.ethics.title" 
            description="intros.ethics.description"
        />
    return (
        <TwoColLayout 
            bgColor="lightGrey"
            left={<FullImg imgLink={ethics}/>}
            right={intro}
        />
    );
};

export default EthicsIntro;