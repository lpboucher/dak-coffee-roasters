import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const ethics = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565720115/Intros/EthicallySourced_k3xky7.jpg';

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