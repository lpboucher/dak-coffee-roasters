import React, { Component, Fragment } from 'react';

import Hero from '../../presentational/Hero/Hero';
import EthicsIntro from '../../presentational/Intros/EthicsIntro';
import CoffeeIntro from '../../presentational/Intros/CoffeeIntro';
import PackagingIntro from '../../presentational/Intros/PackagingIntro';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

import header from '../../../assets/images/Header_Ourcoffee.jpg';

class AboutPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Hero
                    bgImage={header}
                    overlay={{
                        text: "We are committed to offering you the best quality coffee, while reducing our footprint. After all, we only have one planet.",
                        loc: "top-right",
                        height: "50vh",
                        width: "50vw",
                        withOpacity: false
                    }}
                />
                <EthicsIntro />
                <CoffeeIntro />
                <PackagingIntro />
                <NewsletterSignUp />
            </Fragment>
        );
    }
}

export default AboutPage;