import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../utils/HOCs/WithResponsive';

import OrderHeading from './OrderHeading';
import OrderItemContainer from '../../container/Account/OrderItemContainer';

import { Accordion } from 'grommet';
//`Status: ${order.status}`
const Orders = ({orders, t, media}) => {
    const isMobile = !(media === 'medium' || media === 'large' || media === 'infinity');
    return (
        <Fragment>
            {!isMobile &&
            <OrderHeading headers={[t("sections.account.orders.heading.invoice"), t("sections.account.orders.heading.date"), t("sections.account.orders.heading.price"), t("sections.account.orders.heading.payment"), t("sections.account.orders.heading.status"), t("sections.account.orders.heading.tracking")]}/>
            }
            <Accordion>
                {orders.map(order => 
                    <OrderItemContainer key={order.id} ids={order.relationships.items.data.map(item => item.id)} order={order}/>
                )}
            </Accordion>
        </Fragment>
    );
};

export default withTranslation()(withResponsive(Orders));