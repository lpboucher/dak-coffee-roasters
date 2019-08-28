import React from 'react';

import SubscriptionForm from './Form/SubscriptionForm';

import { Box, Text, Accordion, AccordionPanel } from 'grommet';

const SubscriptionItem = ({id, subscription, status, update, pause, cancel, created, quantity, plan}) => {
    let statusToShow;
    if(status.cancelled) {
        statusToShow = 'cancelled';
    } else if (status.paused === 'sub-pause') {
        statusToShow = 'paused';
    } else {
        statusToShow = 'active';
    }
    const createdOn = new Date(created*1000);
    return (
        <Box elevation="xsmall" pad="medium">
            <Accordion margin={{horizontal: 'small'}}>
                <AccordionPanel header={
                    <Box width="100%" direction="row" align="center" justify="around">
                        <Text>{createdOn.toLocaleString()}</Text>
                        <Text>{plan.nickname}</Text>
                        <Text color={statusToShow !== 'active' ? 'red' : 'black'}>{statusToShow}</Text>
                        <Text>{`${plan.amount /100} ${plan.currency.toUpperCase()} per ${plan.interval}`}</Text>
                    </Box>
                }>
                    <SubscriptionForm
                        id={subscription}
                        itemId={id}
                        update={update}
                        pause={pause}
                        cancel={cancel}
                        plan={plan.nickname.split("_")[0]}
                        status={statusToShow}
                        number={quantity}
                        quantity={plan.nickname.split("_")[1]}
                        roast={plan.nickname.split("_")[2]}
                        varieties={plan.nickname.split("_")[3]}
                    />
                </AccordionPanel>
            </Accordion>
        </Box>
    );
};

export default SubscriptionItem;