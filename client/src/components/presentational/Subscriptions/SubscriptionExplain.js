import React from 'react';
import { withTranslation } from 'react-i18next';

import { Box, Heading, Text } from 'grommet';

const SubscriptionExplain = ({t}) => {
    return (
        <Box pad="large">
            <Heading level={1} textAlign="center" margin={{bottom: 'medium'}}>{t("sections.subscription.title")}</Heading>
            <Text textAlign="center" margin={{horizontal: 'xlarge'}}>{t("sections.subscription.description")}</Text>
        </Box>
    );
};

export default withTranslation()(SubscriptionExplain);