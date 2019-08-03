import React from 'react';

import Loader from './Loader';

import { Layer, Box, Text } from 'grommet';

const FullLoader = ({text}) => {
    return (
        <Layer full modal plain>
            <Box fill align="center" justify="center" background={{"color": "white","opacity": true}}>
                <Text size="large">{text}</Text>
                <Loader />
            </Box>
        </Layer>
    );
};

export default FullLoader;