import React, { Component, Fragment } from 'react';

import Hero from '../../presentational/Hero/Hero';
import ContactInfo from '../../presentational/Contact/ContactInfo';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

class ContactPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Hero />
                <ContactInfo />
                <NewsletterSignUp />
            </Fragment>
        );
    }
}

export default ContactPage;