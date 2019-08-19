import React from 'react';

import Hero from '../../presentational/Hero/Hero';
import NewsletterContainer from '../../container/Newsletter/NewsletterContainer';

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565717611/Heros/Header_Brewingguides_amnufl.jpg';

const Brew = () => {
    return (
        <>
           <Hero
                bgImage={header}
                height="90vh"
                overlay={{
                    text: "Coming soon...",
                    loc: "center",
                    height: "25vh"
                }}
            />
            <NewsletterContainer /> 
        </>
    );
};

export default Brew;