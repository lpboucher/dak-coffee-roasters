import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import privatelabel from '../../../assets/images/Privatelabel.jpg';

const PrivateLabelIntro = () => {
    const intro = 
        <IntroSection 
            heading="intros.private label.title"
            description="intros.private label.description"
        />
    return (
        <TwoColLayout 
            bgColor="mainWhite"
            right={<FullImg imgLink={privatelabel}/>}
            left={intro}
        />
    );
};

export default PrivateLabelIntro;