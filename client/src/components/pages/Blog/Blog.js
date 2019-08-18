import React from 'react';

import Hero from '../../presentational/Hero/Hero';
import Article from '../Blog/Article';
import NewsletterContainer from '../../container/Newsletter/NewsletterContainer';

import header from '../../../assets/images/nathan-dumlao-fiOBVNPokGY-unsplash.jpg';

const Blog = () => {
    return (
        <>
           <Hero
                bgImage={header}
                height="90vh"
                overlay={{
                    text: "Why you should grind your coffee before drinking it always.",
                    loc: "center",
                    height: "25vh"
                }}
            />
            <Article />
            <NewsletterContainer /> 
        </>
    );
};

export default Blog;