import React from 'react';
import { withTranslation } from 'react-i18next';
import Slide from 'react-reveal/Slide';

import { Box, Image, Stack, Text } from 'grommet';

const Hero = ({bgImage, height="90vh", overlay, t}) => {
    return (
    <Stack anchor={overlay.loc} style={{paddingTop: '160px'}}>
        <Box height={height} width="full">
            <Image
                fit="cover"
                src={bgImage}
            />
        </Box>
        <Slide right duration={1500}>
        <Box height={overlay.height} width={overlay.width} justify="center" background={`${overlay.withOpacity ? 'rgba(0,0,0,0.5)' : ''}`}>
            <Box width="50vw" pad={{'horizontal': 'large'}}>
                <Text size="large" color='white' weight="bold" >{t(overlay.text)}</Text>
            </Box>
        </Box>
        </Slide>
    </Stack>
    );
};

export default withTranslation()(Hero);