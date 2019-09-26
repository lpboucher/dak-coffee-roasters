import React from 'react';
import { withTranslation } from 'react-i18next';

import { Layer, Box, Text } from 'grommet';
import { Close } from 'grommet-icons';

const FullLoader = ({error, t}) => {
    return (
        <Layer full modal plain>
            <Box fill align="center" justify="center" background={{"color": "white","opacity": true}}>
                <Text size="medium">{t(`${error}`)}</Text>
                <Box pad="large" align="center">
                    <Close size={'large'} color='#A96C35'/>
                </Box>
            </Box>
        </Layer>
    );
};

export default withTranslation()(FullLoader);