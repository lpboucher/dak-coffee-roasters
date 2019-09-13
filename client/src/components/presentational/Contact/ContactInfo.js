import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../utils/HOCs/WithResponsive';

import { Box, Heading, Text } from 'grommet';

const ContactInfo = ({t, media}) => {
    const layout = {
        extraSmall: {width: '100%', size: "small", align:"center"},
        small: {width: '100%', size: "small", align:"center"},
        medium: {width: '50%', size: "", align:"start"},
        large: {width: '50%', size: "", align:"start"},
        infinity: {width: '50%', size: "", align:"start"}
    };
    return (
        <Box direction="row" wrap pad="large" background="darkGrey">
            <Box width={layout[media] ? layout[media].width : '100%'} align={layout[media] ? layout[media].align : 'center'} pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1} size={layout[media] ? layout[media].size : 'small'} textAlign={layout[media] ? layout[media].align : 'center'}>{t("sections.contact.general.title")}</Heading>
                <Text margin={{'bottom': 'small'}} size="small" textAlign={layout[media] ? layout[media].align : 'center'}><a href = "mailto: info@dakcoffeeroasters.com">info@dakcoffeeroasters.com</a></Text>
                <Text margin={{'bottom': 'small'}} size="small" textAlign={layout[media] ? layout[media].align : 'center'}>{t("sections.contact.general.helper")}</Text>
            </Box>
            <Box width={layout[media] ? layout[media].width : '100%'} align={layout[media] ? layout[media].align : 'center'} pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1} size={layout[media] ? layout[media].size : 'small'} textAlign={layout[media] ? layout[media].align : 'center'}>{t("sections.contact.wholesaleeu.title")}</Heading>
                <Text margin={{'bottom': 'small'}} size="small" textAlign={layout[media] ? layout[media].align : 'center'}><a href = "mailto: info@dakcoffeeroasters.com">info@dakcoffeeroasters.com</a></Text>
                <Text margin={{'bottom': 'small'}} size="small" textAlign={layout[media] ? layout[media].align : 'center'}>{t("sections.contact.wholesaleeu.helper")}</Text>
            </Box>
            <Box width={layout[media] ? layout[media].width : '100%'} align={layout[media] ? layout[media].align : 'center'} pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1} size={layout[media] ? layout[media].size : 'small'} textAlign={layout[media] ? layout[media].align : 'center'}>{t("sections.contact.marketing.title")}</Heading>
                <Text margin={{'bottom': 'small'}} size="small" textAlign={layout[media] ? layout[media].align : 'center'}><a href = "mailto: marketing@dakcoffeeroasters.com">marketing@dakcoffeeroasters.com</a></Text>
                <Text margin={{'bottom': 'small'}} size="small" textAlign={layout[media] ? layout[media].align : 'center'}>{t("sections.contact.marketing.helper")}</Text>
            </Box>
            <Box width={layout[media] ? layout[media].width : '100%'} align={layout[media] ? layout[media].align : 'center'} pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1} size={layout[media] ? layout[media].size : 'small'} textAlign={layout[media] ? layout[media].align : 'center'}>{t("sections.contact.wholesalena.title")}</Heading>
                <Text margin={{'bottom': 'small'}} size="small" textAlign={layout[media] ? layout[media].align : 'center'}><a href = "mailto: wholesale@dakcoffeeroasters.com">wholesale@dakcoffeeroasters.com</a></Text>
                <Text margin={{'bottom': 'small'}} size="small" textAlign={layout[media] ? layout[media].align : 'center'}>{t("sections.contact.wholesalena.helper")}</Text>
            </Box>
        </Box>
    );
};

export default withTranslation()(withResponsive(ContactInfo));