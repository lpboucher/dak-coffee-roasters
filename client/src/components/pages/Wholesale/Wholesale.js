import React, { Component, Fragment } from 'react';

import Hero from '../../presentational/Hero/Hero';
import WholesaleIntro from '../../presentational/Intros/WholesaleIntro';
import PrivateLabelIntro from '../../presentational/Intros/PrivateLabelIntro';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';
import Footer from '../../presentational/Footer/Footer';

class WholesalePage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Hero />
                <WholesaleIntro />
                <PrivateLabelIntro />
                <NewsletterSignUp />
                <Footer />
            </Fragment>
        );
    }
}

export default WholesalePage;