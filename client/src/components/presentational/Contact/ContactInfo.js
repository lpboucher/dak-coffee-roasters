import React from 'react';
import { withTranslation } from 'react-i18next';

import { Box, Heading, Text } from 'grommet';

const ContactInfo = ({t}) => {
    return (
        <Box direction="row" wrap pad="large" background="darkGrey">
            <Box width="50%" pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1}>{t("sections.contact.general.title")}</Heading>
                <Text margin={{'bottom': 'small'}} size="small"><a href = "mailto: info@dakcoffeeroasters.com">info@dakcoffeeroasters.com</a></Text>
                <Text margin={{'bottom': 'small'}} size="small">{t("sections.contact.general.helper")}</Text>
            </Box>
            <Box width="50%" pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1}>{t("sections.contact.wholesaleeu.title")}</Heading>
                <Text margin={{'bottom': 'small'}} size="small"><a href = "mailto: info@dakcoffeeroasters.com">info@dakcoffeeroasters.com</a></Text>
                <Text margin={{'bottom': 'small'}} size="small">{t("sections.contact.wholesaleeu.helper")}</Text>
            </Box>
            <Box width="50%" pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1}>{t("sections.contact.marketing.title")}</Heading>
                <Text margin={{'bottom': 'small'}} size="small"><a href = "mailto: marketing@dakcoffeeroasters.com">marketing@dakcoffeeroasters.com</a></Text>
                <Text margin={{'bottom': 'small'}} size="small">{t("sections.contact.marketing.helper")}</Text>
            </Box>
            <Box width="50%" pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1}>{t("sections.contact.wholesalena.title")}</Heading>
                <Text margin={{'bottom': 'small'}} size="small"><a href = "mailto: wholesale@dakcoffeeroasters.com">wholesale@dakcoffeeroasters.com</a></Text>
                <Text margin={{'bottom': 'small'}} size="small">{t("sections.contact.wholesalena.helper")}</Text>
            </Box>
        </Box>
    );
};

export default withTranslation()(ContactInfo);