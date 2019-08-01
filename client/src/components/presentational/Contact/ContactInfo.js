import React from 'react';

import { Box, Heading, Text } from 'grommet';

const ContactInfo = () => {
    return (
        <Box direction="row" wrap pad="large" background="darkGrey">
            <Box width="50%" pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1}>General Enquiries</Heading>
                <Text margin={{'bottom': 'small'}} size="small">info@dakcoffeeroasters.com</Text>
                <Text margin={{'bottom': 'small'}} size="small">We do our best to respond to e-mails wthin 24 hours</Text>
            </Box>
            <Box width="50%" pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1}>Wholesale Europe</Heading>
                <Text margin={{'bottom': 'small'}} size="small">wholesale@dakcoffeeroasters.com</Text>
                <Text margin={{'bottom': 'small'}} size="small">If you would like to sell our coffee or sell as a private label in Europe.</Text>
            </Box>
            <Box width="50%" pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1}>Press & Marketing</Heading>
                <Text margin={{'bottom': 'small'}} size="small">marketing@dakcoffeeroasters.com</Text>
                <Text margin={{'bottom': 'small'}} size="small">For press enquiries or partnerships.</Text>
            </Box>
            <Box width="50%" pad={{vertical: "medium", horizontal: "xlarge"}}>
                <Heading level={1}>Wholesale North America</Heading>
                <Text margin={{'bottom': 'small'}} size="small">wholesaleca@dakcoffeeroasters.com</Text>
                <Text margin={{'bottom': 'small'}} size="small">If you would like to sell our coffee or sell as a private label in Canada / USA.</Text>
            </Box>
        </Box>
    );
};

export default ContactInfo;