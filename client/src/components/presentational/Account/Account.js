import React from 'react';

import { Tabs, Tab, Box } from 'grommet';

const Account = ({address, payment, subscriptions, orders}) => {
    return (
        <Tabs>
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
        </Tabs>
    );
};

export default Account;