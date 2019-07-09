import React from 'react';

import { Box, Heading, Text } from 'grommet';

const ContactInfo = () => {
    return (
        <Box direction="row" wrap background="lightGrey">
            <Box width="50%" pad="xlarge">
                <Heading level="3">General Enquiries</Heading>
                <Text>info@dakcoffeeroasters.com</Text>
                <Text>We do our best to respond to e-mails wthin 24hours</Text>
            </Box>
            <Box width="50%" pad="xlarge">
                <Heading level="3">Wholesale Europe</Heading>
                <Text>wholesale@dakcoffeeroasters.com</Text>
                <Text>If you would like to sell our coffee or sell as a private label in Europe.</Text>
            </Box>
            <Box width="50%" pad="xlarge">
                <Heading level="3">Press & Marketing</Heading>
                <Text>marketing@dakcoffeeroasters.com</Text>
                <Text>For press enquiries or partnerships.</Text>
            </Box>
            <Box width="50%" pad="xlarge">
                <Heading level="3">Wholesale North America</Heading>
                <Text>wholesaleca@dakcoffeeroasters.com</Text>
                <Text>If you would like to sell our coffee or sell as a private label in Canada / USA.</Text>
            </Box>
        </Box>
    );
};

export default ContactInfo;