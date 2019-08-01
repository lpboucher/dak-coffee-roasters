import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

const PackagingIntro = () => {
    const intro = 
        <IntroSection 
            heading="Our Eco-friendly packaging tagline" 
            description={`One thing is to source coffee ethically and to help provide living wages to the farmers, another is to respect the environment and conditions that they require to grow their product. This is why we use eco-friendly, yet aesthetically appealing packaging.\n\nOur coffee bags are 100% recyclable, CO2 Neutral and aluminum-free. We are proud to partner with a supplier that invests in CO2-reducing projects in coffee growing countries, so the greenhouse gas emissions needed to produce coffee bags can be compensated by reducing emissions elsewhere.\n\nOur shipping boxes are also 100% recyclable and made of recyclable materials and water-based ink making them environmentally friendly.\n\nOur goal is to continuously improve our processes in order to reduce our footprint. After all, we only have one planet.`}
        />
    return (
        <TwoColLayout 
            bgColor="lightGrey"
            left={<FullImg imgLink={"https://thumbs.dreamstime.com/z/black-bag-packaging-wide-variety-products-clipping-packet-path-wrapper-sweet-snack-milk-powder-coffee-salt-sugar-43471774.jpg"}/>}
            right={intro}
        />
    );
};

export default PackagingIntro;