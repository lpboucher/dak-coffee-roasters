import React from 'react';
import { withTranslation } from 'react-i18next';

import { Box, Heading, Text } from 'grommet';

const ContactInfo = ({t}) => {
    return (
        <Box direction="row" wrap pad="large" background="darkGrey">
            <Box width="50%" pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1}>{t("sections.contact.general.title")}</Heading>
                <Text margin={{'bottom': 'small'}} size="small">{t("sections.contact.general.contact")}</Text>
                <Text margin={{'bottom': 'small'}} size="small">{t("sections.contact.general.helper")}</Text>
            </Box>
            <Box width="50%" pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1}>{t("sections.contact.wholesaleeu.title")}</Heading>
                <Text margin={{'bottom': 'small'}} size="small">{t("sections.contact.wholesaleeu.contact")}</Text>
                <Text margin={{'bottom': 'small'}} size="small">{t("sections.contact.wholesaleeu.helper")}</Text>
            </Box>
            <Box width="50%" pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1}>{t("sections.contact.marketing.title")}</Heading>
                <Text margin={{'bottom': 'small'}} size="small">{t("sections.contact.marketing.contact")}</Text>
                <Text margin={{'bottom': 'small'}} size="small">{t("sections.contact.marketing.helper")}</Text>
            </Box>
            <Box width="50%" pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1}>{t("sections.contact.wholesalena.title")}</Heading>
                <Text margin={{'bottom': 'small'}} size="small">{t("sections.contact.wholesalena.contact")}</Text>
                <Text margin={{'bottom': 'small'}} size="small">{t("sections.contact.wholesalena.helper")}</Text>
            </Box>
        </Box>
    );
};

export default withTranslation()(ContactInfo);