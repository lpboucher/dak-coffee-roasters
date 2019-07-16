import React from 'react';

import { Tabs, Tab, Box } from 'grommet';

import AddressForm from '../Checkout/Form/AddressForm';
import Orders from './Orders';

const Account = ({user, orders}) => {
    const submit = values => {
        console.log(values)
    }
    return (
        <Tabs>
            <Tab title="Address">
                <Box pad={{"horizontal": "xlarge"}}>
                    <AddressForm submit={submit} user={user}/>
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

const user = {
    customer_id: "72486401-16b4-466b-9ae3-21d46d2b6119",
    expires: 1563388185,
    id: "927fb2d5-8c9f-4987-a2d3-65840df74c41",
    token: "eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJzdWIiOiI3MjQ4NjQwMS0xNmI0LTQ2NmItOWFlMy0yMWQ0NmQyYjYxMTkiLCJuYW1lIjoiTG91aXMtUGhpbGlwcGUgQm91Y2hlciIsImV4cCI6MTU2MzM4ODE4NSwiaWF0IjoxNTYzMzAxNzg1LCJqdGkiOiI5MjdmYjJkNS04YzlmLTQ5ODctYTJkMy02NTg0MGRmNzRjNDEifQ==.692fdf76e25ce248df2b04c99452ab81b2e6fe4a1ab5e872d6ec8b7f9a891c8b",
    type: "token"
}