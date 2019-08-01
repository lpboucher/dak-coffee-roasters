import React, { Fragment } from 'react';

import Hero from '../Hero/Hero';

import { Tabs, Tab, Box } from 'grommet';

import header from '../../../assets/images/Header_loggedin.jpg';

const Account = ({address, payment, subscriptions, orders}) => {
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
                        {subscriptions}
                    </Box>
                </Tab>
                <Tab title="View Orders">
                    <Box pad={{"horizontal": "xlarge"}}>
                        {orders}
                    </Box>
                </Tab>
                <Tab title="Address">
                    <Box pad={{"horizontal": "xlarge"}}>
                        {address}
                    </Box>
                </Tab>
                <Tab title="Payment Methods">
                    <Box pad={{"horizontal": "xlarge"}}>
                        {payment}
                    </Box>
                </Tab>
            </Tabs>
        </Fragment>
    );
};

export default Account;