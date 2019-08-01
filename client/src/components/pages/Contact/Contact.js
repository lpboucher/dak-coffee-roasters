import React, { Component, Fragment } from 'react';

import Hero from '../../presentational/Hero/Hero';
import ContactInfo from '../../presentational/Contact/ContactInfo';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

import header from '../../../assets/images/Header_Contactus.jpg';

class ContactPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Hero 
                    bgImage={header}
                    overlay={{
                        text: "Collaboration is key. Whether big or small, we engage in passion-driven partnerships.",
                        loc: "bottom-right",
                        height: "50vh",
                        width: "50vw",
                        withOpacity: false
                    }}
                />
                <ContactInfo />
                <NewsletterSignUp />
            </Fragment>
        );
    }
}

export default ContactPage;