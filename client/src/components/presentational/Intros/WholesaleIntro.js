import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import wholesale from '../../../assets/images/Wholesale.jpg';

const WholesaleIntro = () => {
    const intro = 
        <IntroSection 
            heading="Wholesale & Partnerships" 
            description={`We are always happy to partner and work with businesses, whether small or large, that share our passion for coffee. We can accommodate smaller or larger wholesale orders for all types of businesses.\n\nNot an expert on coffee flavors, brewing methods or best practices? Let us come to you and offer our guidance on how to prepare our coffees so that you can offer your customer a skillfully brewed cup of coffee.\n\n\nIf you would like to sell our coffee in Europe: info@dakcoffeeroasters.com\n\nIf you would like to sell our coffee in Canada/USA: wholesaleCA@dakcoffeeroasters.com`}
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