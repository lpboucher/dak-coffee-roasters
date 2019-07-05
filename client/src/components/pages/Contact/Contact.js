import React, { Component, Fragment } from 'react';

import Hero from '../../presentational/Hero/Hero';
import ContactInfo from '../../presentational/Contact/ContactInfo';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';
import Footer from '../../presentational/Footer/Footer';

class ContactPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Hero />
                <ContactInfo />
                <NewsletterSignUp />
                <Footer />
            </Fragment>
        );
    }
}

export default ContactPage;