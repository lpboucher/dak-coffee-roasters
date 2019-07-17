import React from 'react';

import AddressForm from '../Checkout/Form/AddressForm';
import Orders from './Orders';

import { Tabs, Tab, Box } from 'grommet';

const Account = ({user, orders, addresses}) => {
    const submit = values => {
        console.log(values)
    }
    return (
        <Tabs>
            <Tab title="Address">
                <Box pad={{"horizontal": "xlarge"}}>
                    <AddressForm submit={submit} user={user} addresses={addresses} />
                </Box>
            </Tab>
            <Tab title="Manage Subscriptions">
                <Box pad="medium">Two</Box>
            </Tab>
            <Tab title="View Orders">
                <Orders orders={orders}/>
            </Tab>
        </Tabs>
    );
};

export default Account;