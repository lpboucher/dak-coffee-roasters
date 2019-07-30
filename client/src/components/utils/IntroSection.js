import React from 'react';
import { withRouter } from 'react-router-dom';

import { Box, Heading, Text, Button } from 'grommet';

const IntroSection = withRouter(({heading, subHeading, helperText, description, btnLabel, link, children, history}) => {
    return (
        <Box>
            <Heading level={1}>{heading}</Heading>
            <Heading level={2} size="small">{subHeading}</Heading>
            <Heading level={3} margin={{"bottom": "medium"}} size="small">{helperText}</Heading>
            <Text margin={{"bottom": "large"}}>{description}</Text>
            {btnLabel &&
            <Button primary label={btnLabel} alignSelf="start" style={{color: 'white'}} onClick={() => history.push(link)}/>
            }
        </Box>
    );
})

export default IntroSection;