import React, {Fragment} from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import { Box, Text } from 'grommet';

const OrderHeading = ({id, headers, media}) => {
    const isMobile = !(media === 'medium' || media === 'large' || media === 'infinity')
    return (
        <Fragment>
            <Box width="100%" direction={isMobile ? 'column' : 'row'} align="center">
                {headers.map(header => (
                    <Box key={`${id}${header}`} align="center" width={isMobile ? '100%' : '17%'}>
                        <Text>{header}</Text>
                    </Box>
                ))}
            </Box>
        </Fragment>
    );
};

export default withResponsive(OrderHeading);