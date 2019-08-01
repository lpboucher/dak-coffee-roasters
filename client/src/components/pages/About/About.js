import React, { Component, Fragment } from 'react';

import Hero from '../../presentational/Hero/Hero';
import Profiles from '../../presentational/About/Profiles';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

import header from '../../../assets/images/Header_Aboutus.jpg';

class AboutPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Hero
                    bgImage={header}
                    overlay={{
                        text: "It's good because we care and pay great attention to every step from farm to roast to brew.",
                        loc: "top-left",
                        height: "50vh",
                        width: "50vw",
                        withOpacity: false
                    }}
                />
                <Profiles />
                <NewsletterSignUp />
            </Fragment>
        );
    }
}

export default AboutPage;