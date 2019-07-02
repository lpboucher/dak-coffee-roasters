import React, { Component, Fragment } from 'react';

import Hero from '../../presentational/Hero/Hero';
import EthicsIntro from '../../presentational/Intros/EthicsIntro';
import CoffeeIntro from '../../presentational/Intros/CoffeeIntro';
import PackagingIntro from '../../presentational/Intros/PackagingIntro';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

class AboutPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Hero />
                <EthicsIntro />
                <CoffeeIntro />
                <PackagingIntro />
                <NewsletterSignUp />
            </Fragment>
        );
    }
}

export default AboutPage;