import React, { Fragment } from 'react';

import SubscriptionForm from './Form/SubscriptionForm';

import { Box, Text, Accordion, AccordionPanel } from 'grommet';

const SubscriptionItem = ({id, subscription, update, created, quantity, plan}) => {
    return (
        <Box elevation="xsmall" pad="medium">
            <Accordion margin={{horizontal: 'small'}}>
                <AccordionPanel header={
                    <Box width="100%" direction="row" align="center" justify="around">
                        <Text>{created.toLocaleString()}</Text>
                        <Text>{plan.nickname}</Text>
                        <Text>{`${plan.amount /100} ${plan.currency.toUpperCase()} per ${plan.interval}`}</Text>
                    </Box>
                }>
                    <SubscriptionForm
                        id={subscription}
                        itemId={id}
                        update={update}
                        plan={plan.nickname.split("_")[0]}
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