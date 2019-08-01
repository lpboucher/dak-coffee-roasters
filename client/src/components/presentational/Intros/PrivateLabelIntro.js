import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import privatelabel from '../../../assets/images/Privatelabel.jpg';

const PrivateLabelIntro = () => {
    const intro = 
        <IntroSection 
            heading="Private Label" 
            description={`We fully understand that relationships with your clients is of huge importance to the success and sustainability of your business. This starts with a recognizable and differentiating branding on your establishment, but also with the products that sit on your shelves.\n\nThat is why we recognize your need for custom packaging and branding for the coffee that you want to serve. We are committed to working with you in developing your own packaging for us to deliver the coffee in That way, you can have great coffee without reducing your presence.\n\n\nIf you would like to sell our coffee as a private label in Europe: info@dakcoffeeroasters.com\n\nIf you would like to sell our coffee as a private label in Canada/USA: wholesaleCA@dakcoffeeroasters.com`}
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