import React, { Fragment } from 'react';

import SubscriptionItem from './SubscriptionItem';

import { Box } from 'grommet';

const ManageSubscriptions = ({update, pause, cancel, subscriptions}) => {
    return (
        <Fragment>
            <Box pad={{horizontal: 'xlarge', vertical: 'medium'}}>
                {subscriptions.map(sub => 
                    sub.items.data.map(item => (
                        <SubscriptionItem 
                            key={item.id}
                            update={update}
                            pause={pause}
                            cancel={cancel}
                            status={{
                                cancelled: sub.status === "canceled",
                                paused: sub.discount ? sub.discount.coupon.id : null
                            }}
                            {...item}
                        />

                    )
                ))}
            </Box>
        </Fragment>
    );
};

export default ManageSubscriptions;