import React from 'react';

import { Box, Image, Stack, Text } from 'grommet';

const Hero = ({bgImage, height="90vh", overlay}) => {
    return (
    <Stack anchor={overlay.loc}>
        <Box height={height} width="full">
            <Image
                fit="cover"
                src={bgImage}
            />
        </Box>
        <Box height={overlay.height} width={overlay.width} justify="center" background={`${overlay.withOpacity ? 'rgba(0,0,0,0.5)' : ''}`}>
            <Box width="50vw" pad={{'horizontal': 'large'}}>
                <Text size="large" color='white' weight="bold" >{overlay.text}</Text>
            </Box>
        </Box>
    </Stack>
    );
};

export default Hero;