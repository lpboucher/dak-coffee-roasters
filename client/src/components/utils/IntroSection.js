import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Heading, Text, Button } from 'grommet';

const IntroSection = ({heading, subHeading, helperText, description, btnLabel, link, children, isSmall=false}) => {
    return (
        <Box>
            <Heading level={1} size={`${isSmall ? 'small' : ''}`}>{heading}</Heading>
            <Heading level={2} size={`${isSmall ? 'xsmall' : 'small'}`}>{subHeading}</Heading>
            <Heading level={3} margin={{"bottom": "medium"}} size={`${isSmall ? 'xsmall' : 'small'}`} style={{fontWeight: '400'}}>{helperText}</Heading>
            <Text size={`${isSmall ? 'small' : ''}`} margin={isSmall ? {"bottom": "medium"} : {"bottom": "large"}}>{description}</Text>
            {btnLabel &&
            <Link to={link}>
                <Button primary label={btnLabel} alignSelf="start" style={{color: 'white'}}/>
            </Link>
            }
        </Box>
    );
};

export default IntroSection;