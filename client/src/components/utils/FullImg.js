import React from 'react';

import { Box } from 'grommet';

const FullImg = ({ imgLink }) => {
    return (
        <Box width="100%" height="100%" background={`url(${imgLink})`} />
    );
};

export default FullImg;