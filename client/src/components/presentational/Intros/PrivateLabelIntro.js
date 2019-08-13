import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const privatelabel = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565720115/Intros/Privatelabel_bh1cd6.jpg';

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