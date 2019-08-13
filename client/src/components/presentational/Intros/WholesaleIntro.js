import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const wholesale = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565720116/Intros/Wholesale_qf9vux.jpg';

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