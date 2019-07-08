import React, { Fragment } from 'react';

import { Box, Image, Stack, Text } from 'grommet';

const Hero = () => {
    return (
    <Stack anchor="bottom-left">
        <Box height="100vh" width="full">
            <Image
                fit="cover"
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
            />
        </Box>
        <Text>SOme Text</Text>
    </Stack>
    );
};

export default Hero;