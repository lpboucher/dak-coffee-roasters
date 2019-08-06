import React from 'react';

import { Box, Text, Accordion, AccordionPanel } from 'grommet';

const Orders = ({orders}) => {
    return (
        <Accordion>
            {orders.map(order => 
            <AccordionPanel key={order.id} label={`Status: ${order.status}`}>
                <Box pad="medium" background="light-2">
                    {order.relationships.items.data.map(item =>
                        <Text>{item.id}</Text>
                    )}
                    <Text>{`Date: ${order.meta.timestamps.created_at}, Order value: ${order.meta.display_price.with_tax.formatted}`}</Text>
                </Box>
            </AccordionPanel>
            )}
        </Accordion>
    );
};

export default Orders;