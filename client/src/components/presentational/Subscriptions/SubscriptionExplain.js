import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../utils/HOCs/WithResponsive';

import { Box, Heading, Text } from 'grommet';

const SubscriptionExplain = ({t, media}) => {
    const layout = {
        extraSmall: {
            marginH: 'small',
            size: 'small'
        },
        small: {
            marginH: 'small',
            size: 'small'
        },
        medium: {
            marginH: 'xlarge',
            size: ''
        },
        large: {
            marginH: 'xlarge',
            size: ''
        },
        infinity: {
            marginH: 'xlarge',
            size: ''
        }
    }
    return (
        <Box pad="large">
            <Heading level={1} size={layout[media] ? layout[media].size : 'small'} textAlign="center" margin={{bottom: 'medium'}}>{t("sections.subscription.title")}</Heading>
            <Text textAlign="center" size={layout[media] ? layout[media].size : 'small'} margin={{horizontal: layout[media] ? layout[media].marginH : 'small'}}>{t("sections.subscription.description")}</Text>
        </Box>
    );
};

export default withTranslation()(withResponsive(SubscriptionExplain));