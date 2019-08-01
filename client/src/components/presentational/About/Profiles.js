import React, { Fragment } from 'react';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import louis from '../../../assets/images/LP.jpg';
import olivier from '../../../assets/images/Olivier.jpg';
import veronique from '../../../assets/images/Veronique.jpg';

import { Box, Heading, Image } from 'grommet';

const Profiles = () => {
    const intro = 
    <IntroSection 
        heading="Louis-Philippe Boucher" 
        subHeading="Founder & Roaster"
        helperText="info@dakcoffeeroasters.com"
        description={
            `Based in Amsterdam, Dak Coffee Roasters was founded in 2019 by Louis-Philippe Boucher. Originally from Montreal, Canada, his passion for coffee began during his early years at University, studying and working full-time.\n\nAfter working many years in the Finance and Venture Capital industry, Louis-Philippe decided to make the big move and leave everything behind to follow his passion. Much like with wine and beer, he wants people to discover the breadth and understand the complexity of flavors that coffee can offer.\n\nCoffee philosophy: Louis-Philippe used to be one of those people adding tons of cream and sugar to his coffee. That all changed when he lived in Milan and was introduced to the world of Italian espresso. This experience sparked a journey to discover and appreciate the many ways coffee can be brewed, served and enjoyed. He truly believes that every coffee beverage is unique in its own way and deserves a dedicated roast that celebrates it.`}
    />
    const secondaryProfiles = (img, name, role, contact) => 
            <Fragment>
                <Box height="90%" width="100%">
                    <Image fit="cover" src={img}/>
                </Box>
                <Box height="10%" pad={{top: "medium"}}>
                    <Heading level={1}>{name}</Heading>
                    <Heading level={2} size="small">{role}</Heading>
                    <Heading level={3} size="small" margin={{"bottom": "medium"}} style={{fontWeight: '400'}}>{contact}</Heading>
                </Box>      
            </Fragment>
    return (
        <Fragment>
            <TwoColLayout 
                bgColor="mainWhite"
                left={<FullImg imgLink={louis}/>}
                right={intro}
            />
            <TwoColLayout 
                bgColor="lightGrey"
                left={secondaryProfiles(veronique, "Veronique Lagarde", "Brand Strategist & Graphic Designer", "marketing@dakcoffeeroasters.com")}
                right={secondaryProfiles(olivier, "Olivier Daigneault", "Regional Manager - Montreal/Canada", "wholesaleca@dakcoffeeroasters.com")}
            />
        </Fragment>
    );
};

export default Profiles;