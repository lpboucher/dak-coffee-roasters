import React, { Component, Fragment } from 'react';

import Hero from '../../presentational/Hero/Hero';
import SubscriptionExplain from '../../presentational/Subscriptions/SubscriptionExplain';
import SubscriptionSpecs from '../../presentational/Subscriptions/SubscriptionSpecs';
import SubscriptionContainer from '../../container/Subscriptions/SubscriptionsContainer';
import CategoryRowContainer from '../../container/Products/CategoryRowContainer';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';
import Footer from '../../presentational/Footer/Footer';

class SubscriptionPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Hero />
                <SubscriptionExplain />
                <SubscriptionSpecs />
                <SubscriptionContainer collection='coffee-subscriptions'/>
                <CategoryRowContainer name="You may also like" category='coffee-equipment'/>
                <NewsletterSignUp />
                <Footer />
            </Fragment>
        );
    }
}

export default SubscriptionPage;