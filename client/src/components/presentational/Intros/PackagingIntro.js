import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const pack = "https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1566244655/Intros/eco-friendlypack_2_uecqwl.jpg";

const PackagingIntro = () => {
    const intro = 
        <IntroSection 
            heading="intros.packaging.title" 
            description="intros.packaging.description"
        />
    return (
        <TwoColLayout 
            bgColor="lightGrey"
            left={<FullImg imgLink={pack}/>}
            right={intro}
        />
    );
};

export default PackagingIntro;