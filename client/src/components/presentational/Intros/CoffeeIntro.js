import React from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import coffee from '../../../assets/images/Coffeebeans.jpg';

const CoffeeIntro = () => {
    const intro = 
        <IntroSection 
            heading="Our Coffee" 
            description={`We believe the only way to identify unique flavors is to continually try new and innovative roasting profiles. For that reason, we are creative with our roasts and also do our best to sample-roast as often as we can!\n\nOnce a week, we order new green coffee samples. These samples are roasted in a very simple manner to limit the effect, the roast might have on the flavor of the origin. After sample-roasting, we conduct regular cupping sessions. Here, the new origin samples are tasted, and we identify the origins we want to order in larger quantities.\n\nIn order to identify the roast profiles that will eventually go on the shelves, we repeat the process of roasting the selected beans. However, this time we let our creativity run wild and test different combinations of roasting lengths, temperatures and airflow, to create unique roasts for specific beverages.\n\nFinally, a final cupping session with the bean in question, roasted in many different ways, allow us to decide on and finalize the roast profile that best highlight the unique flavor profile of its origin.`}
        />
    return (
        <TwoColLayout 
            bgColor="mainWhite"
            right={<FullImg imgLink={coffee}/>}
            left={intro}
        />
    );
};

export default CoffeeIntro;