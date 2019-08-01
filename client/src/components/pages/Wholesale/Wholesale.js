import React, { Component, Fragment } from 'react';

import Hero from '../../presentational/Hero/Hero';
import WholesaleIntro from '../../presentational/Intros/WholesaleIntro';
import PrivateLabelIntro from '../../presentational/Intros/PrivateLabelIntro';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

import header from '../../../assets/images/Header_Wholesale.jpg';

class WholesalePage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Hero
                    bgImage={header}
                    overlay={{
                        text: "We partner with people who share our uncompromised, passion-driven approach to coffee.",
                        loc: "bottom-right",
                        height: "50vh",
                        width: "50vw",
                        withOpacity: false
                    }}
                />
                <WholesaleIntro />
                <PrivateLabelIntro />
                <NewsletterSignUp />
            </Fragment>
        );
    }
}

export default WholesalePage;