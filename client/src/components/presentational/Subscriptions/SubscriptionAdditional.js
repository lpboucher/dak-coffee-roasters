import React from 'react';

import IconedExplanation from '../../utils/IconedExplanation';

import { Java, Tasks, Money, Plan, Bar } from 'grommet-icons';

const SubscriptionAdditional = ({type}) => {
    return (
        <>
            <IconedExplanation icon={<Java style={{margin: '0 20px'}}/>} description={'Freshly-roasted specialty coffee'} size={"small"} spacing={{vertical: "small"}} margin="0px" vertical={'center'}/>
            {type === 'roasters-subscription' &&
                <IconedExplanation icon={<Bar style={{margin: '0 20px'}}/>} description={'Get 2 coffee varieties: the current limited edition & what the roaster drinks that month'} size={"small"} spacing={{vertical: "small"}} margin="0px" vertical={'center'}/>
            }
            {type === 'classics-subscription' &&
                <IconedExplanation icon={<Tasks style={{margin: '0 20px'}}/>} description={'Customize your order by choosing your roast styles and quantity'} size={"small"} spacing={{vertical: "small"}} margin="0px" vertical={'center'}/>
            }
            <IconedExplanation icon={<Money style={{margin: '0 20px'}}/>} description={'Save money compared to single orders'} size={"small"} spacing={{vertical: "small"}} margin="0px" vertical={'center'}/>
            <IconedExplanation icon={<Plan style={{margin: '0 20px'}}/>} description={'Receive your coffee box once a month'} size={"small"} spacing={{vertical: "small"}} margin="0px" vertical={'center'}/>
        </>
    );
};

export default SubscriptionAdditional;