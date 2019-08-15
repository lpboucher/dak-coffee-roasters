import React from 'react';

import {Box, Text} from 'grommet';

const AnnouncementBar = ({loc, text}) => {
    return (
        <Box fill gridArea={loc} background="darkGrey">
            <Text alignSelf="center">{text}</Text>
        </Box>
    );
};

export default AnnouncementBar;