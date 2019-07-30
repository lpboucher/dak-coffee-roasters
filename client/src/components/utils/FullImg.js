import React from 'react';

import { Box } from 'grommet';

const FullImg = ({ imgLink, size }) => {
    const bgSize = { backgroundSize: size}
    return (
        <Box width="100%" height="100%" background={`url(${imgLink})`} style={bgSize}/>
    );
};

export default FullImg;