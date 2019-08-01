import React, { Component, Fragment } from 'react';

import Hero from '../../presentational/Hero/Hero';
import SubscriptionExplain from '../../presentational/Subscriptions/SubscriptionExplain';
import SubscriptionSpecs from '../../presentational/Subscriptions/SubscriptionSpecs';
import SubscriptionContainer from '../../container/Subscriptions/SubscriptionsContainer';
import CategoryRowContainer from '../../container/Products/CategoryRowContainer';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

import header from '../../../assets/images/Header_Mainpage.jpg';

class SubscriptionPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Hero
                    bgImage={header}
                    overlay={{
                        text: "Go with the classics or opt for our roaster's seasonal picks.",
                        loc: "bottom-left",
                        withOpacity: true
                    }}
                />
                <SubscriptionExplain />
                <SubscriptionSpecs />
                <SubscriptionContainer collection='coffee-subscriptions'/>
                <CategoryRowContainer name="You may also like" category='coffee-equipment'/>
                <NewsletterSignUp />
            </Fragment>
        );
    }
}

export default SubscriptionPage;