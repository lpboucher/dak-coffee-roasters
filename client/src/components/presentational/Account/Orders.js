import React, { Fragment } from 'react';

import OrderHeading from './OrderHeading';
import OrderItemContainer from '../../container/Account/OrderItemContainer';

import { Accordion } from 'grommet';
//`Status: ${order.status}`
const Orders = ({orders}) => {
    return (
        <Fragment>
            <OrderHeading headers={["Invoice #", "Date", "Price", "Payment", "Status", "Tracking"]}/>
            <Accordion>
                {orders.map(order => 
                    <OrderItemContainer key={order.id} ids={order.relationships.items.data.map(item => item.id)} order={order}/>
                )}
            </Accordion>
        </Fragment>
    );
};

export default Orders;