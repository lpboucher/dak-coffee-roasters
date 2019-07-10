import React from 'react';

import { Box } from 'grommet';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
    return (
        <Box pad="large" align="center">
            <ClipLoader size={70} color='#A96C35'/>
        </Box>
    );
};

export default Loader;