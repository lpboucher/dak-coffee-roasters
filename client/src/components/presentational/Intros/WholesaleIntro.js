import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import wholesale from '../../../assets/images/Wholesale.jpg';

const WholesaleIntro = () => {
    const intro = 
        <IntroSection 
        heading="intros.wholesale.title"
        description="intros.wholesale.description"
        />
    return (
        <TwoColLayout 
            bgColor="lightGrey"
            left={<FullImg imgLink={wholesale}/>}
            right={intro}
        />
    );
};

export default WholesaleIntro;