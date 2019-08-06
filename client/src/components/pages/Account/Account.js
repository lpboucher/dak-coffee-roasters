import React, { Fragment } from 'react';

import Hero from '../../presentational/Hero/Hero';

import { Tabs, Tab, Box } from 'grommet';

import header from '../../../assets/images/Header_loggedin.jpg';

import SubscriptionContainer from '../../container/Account/AccountSubscriptionContainer';
import OrderContainer from '../../container/Account/AccountOrderContainer';
import PaymentContainer from '../../container/Account/AccountPaymentContainer';
import AddressContainer from '../../container/Account/AccountAddressContainer';

const Account = () => {
    return (
        <Fragment>
            <Hero
                bgImage={header}
                height="50vh"
                overlay={{
                    text: "Welcome to your account.",
                    loc: "bottom",
                    width: "50vw",
                    height: "25vh"
                }}
            />
            <Tabs>
                <Tab title="Manage Subscriptions">
                    <Box pad={{"horizontal": "xlarge"}}>
                        <SubscriptionContainer />
                    </Box>
                </Tab>
                <Tab title="View Orders">
                    <Box pad={{"horizontal": "xlarge"}}>
                        <OrderContainer />
                    </Box>
                </Tab>
                <Tab title="Address">
                    <Box pad={{"horizontal": "xlarge"}}>
                        <AddressContainer />
                    </Box>
                </Tab>
                <Tab title="Payment Methods">
                    <Box pad={{"horizontal": "xlarge"}}>
                        <PaymentContainer />
                    </Box>
                </Tab>
            </Tabs>
        </Fragment>
    );
};

export default Account;