import React, { Component, Fragment } from 'react';

import Hero from '../../presentational/Hero/Hero';
import ContactInfo from '../../presentational/Contact/ContactInfo';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';
import Footer from '../../presentational/Footer/Footer';

import header from '../../../assets/images/Header_Contactus.jpg';

class ContactPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Hero bgImage={header}/>
                <ContactInfo />
                <NewsletterSignUp />
                <Footer />
            </Fragment>
        );
    }
}

export default ContactPage;