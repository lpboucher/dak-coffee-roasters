import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import ethics from '../../../assets/images/EthicallySourced.jpg'

const EthicsIntro = () => {
    const intro = 
        <IntroSection 
            heading="Ethically Sourced" 
            description={`We often forget where the things we consume come from, but let us tell you that good coffee tastes even better when it is sourced ethically!\n\nIt is important to us that the farmers we work with are paid their fair share of money and can afford good living conditions. We only partner with importers that share our values, work with exclusive lots and do extensive background research on the farms.\n\nWe are ready to pay a premium price for our green coffee beans to make sure everyone in the supply chain gets their fair shares and our customers get the best quality.\n\nWe are hoping to open direct trade relationships with farmers in 2020 by visiting the farms ourselves, assessing their conditions and developing exclusive partnerships. It is also in our short-term plan to give back to the coffee community and invest in projects that can improve living conditions for the farmers.`}
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