import React from 'react';

import { DropButton, Box } from 'grommet';

const ProductSpecs = () => {
    return (
        <DropButton
            label="Details"
            dropAlign={{ top: 'bottom', right: 'right' }}
            dropContent={
                <Box pad="xlarge" background="mainWhite">
                    Details here
                </Box>
            }
        />
    );
};

export default ProductSpecs;