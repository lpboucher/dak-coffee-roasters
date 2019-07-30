import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import beans from '../../../assets/images/Coffeebeans.jpg';

const ValuesIntro = () => {
    const intro = 
        <IntroSection 
            heading="What we believe in" 
            description={`Five things always come first at Dak: delicious coffee, the environment, the social conditions of the farmers, creativity and customization.\n\nOffering high-quality coffee for you to enjoy is what matters to us. All coffees on offer have been carefully selected, and each week our team hosts cupping sessions to ensure their quality. We roast twice a week to make sure that you get the freshest coffee, and with continuous testing and development, we keep your taste buds on their toes.\n\nGood coffee tastes even better if it’s sourced ethically. We only partner with importers that share our values, work with exclusive lots and do extensive background research on the farms. We are ready to pay a premium price for our green coffee beans to make sure the farmers are paid their fair share, and our customers are offered the highest quality coffee possible`}
            btnLabel="Read More"
            link="/about"
        />
    return (
        <TwoColLayout 
            bgColor="mainWhite"
            left={<FullImg imgLink={beans}/>}
            right={intro}
        />
    );
};

export default ValuesIntro;