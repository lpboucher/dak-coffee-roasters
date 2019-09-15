import React from 'react';
import { withTranslation } from 'react-i18next';

import IconedExplanation from '../../utils/IconedExplanation';

import { Java, Tasks, Money, Plan, Bar } from 'grommet-icons';

const SubscriptionAdditional = ({type, t}) => {
    return (
        <>
            <IconedExplanation icon={<Java style={{margin: '0 20px'}}/>} description={t('sections.subscription.icons.fresh')} size={"small"} spacing={{vertical: "small"}} margin="0px" vertical={'center'}/>
            {type === 'roasters-subscription' &&
                <IconedExplanation icon={<Bar style={{margin: '0 20px'}}/>} description={t('sections.subscription.icons.varieties')} size={"small"} spacing={{vertical: "small"}} margin="0px" vertical={'center'}/>
            }
            {type === 'classics-subscription' &&
                <IconedExplanation icon={<Tasks style={{margin: '0 20px'}}/>} description={t('sections.subscription.icons.choice')} size={"small"} spacing={{vertical: "small"}} margin="0px" vertical={'center'}/>
            }
            <IconedExplanation icon={<Money style={{margin: '0 20px'}}/>} description={t('sections.subscription.icons.save')} size={"small"} spacing={{vertical: "small"}} margin="0px" vertical={'center'}/>
            <IconedExplanation icon={<Plan style={{margin: '0 20px'}}/>} description={t('sections.subscription.icons.receive')} size={"small"} spacing={{vertical: "small"}} margin="0px" vertical={'center'}/>
        </>
    );
};

export default withTranslation()(SubscriptionAdditional);