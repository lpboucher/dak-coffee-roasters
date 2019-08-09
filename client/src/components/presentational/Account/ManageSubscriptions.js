import React, { Fragment } from 'react';

import SubscriptionItem from './SubscriptionItem';

import { Box } from 'grommet';

const ManageSubscriptions = ({update, subscriptions}) => {
    return (
        <Fragment>
            <Box pad={{horizontal: 'xlarge', vertical: 'medium'}}>
                {subscriptions.map(sub => 
                    sub.items.data.map(item => (
                        <SubscriptionItem 
                            key={item.id}
                            update={update}
                            {...item}
                        />

                    )
                ))}
            </Box>
        </Fragment>
    );
};

export default ManageSubscriptions;