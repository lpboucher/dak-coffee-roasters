import React from 'react';
import { withTranslation } from 'react-i18next';

import Hero from '../../presentational/Hero/Hero';
import Article from '../Blog/Article';
import NewsletterContainer from '../../container/Newsletter/NewsletterContainer';

import header from '../../../assets/images/nathan-dumlao-fiOBVNPokGY-unsplash.jpg';

const Blog = ({t}) => {
    return (
        <>
           <Hero
                bgImage={header}
                height="90vh"
                overlay={{
                    text: t(`blog.title`),
                    loc: "center",
                    height: "25vh"
                }}
            />
            <Article />
            <NewsletterContainer /> 
        </>
    );
};

export default withTranslation()(Blog);