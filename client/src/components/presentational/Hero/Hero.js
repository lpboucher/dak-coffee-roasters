import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../utils/HOCs/WithResponsive';
import Slide from 'react-reveal/Slide';

import { Box, Image, Stack, Text } from 'grommet';

const Hero = ({bgImage, height="90vh", overlay, t, media}) => {
    const layout = {
        extraSmall: {
            pad: '0px',
            height: '50vh'
        },
        small: {
            pad: '0px',
            height: '50vh'
        },
        medium: {
            pad: '0px',
            height: height
        },
        large: {
            pad: '160px',
            height: height
        },
        infinity: {
            pad: '160px',
            height: height
        }
    }
    return (
    <Stack anchor={overlay.loc} style={{paddingTop: layout[media] ? layout[media].pad : '0px'}}>
        <Box height={layout[media] ? layout[media].height : height} width="full">
            <Image
                fit="cover"
                src={bgImage}
            />
        </Box>
        {(media === "medium" || media === "large" || media === "infinity") &&
        <Slide right duration={1500}>
        <Box height={overlay.height} width={overlay.width} justify={overlay.justify || "center"} background={`${overlay.withOpacity ? 'rgba(0,0,0,0.5)' : ''}`}>
            <Box width="50vw" pad={{'horizontal': 'large'}}>
                <Text size="large" color='white' weight="bold" >{t(overlay.text)}</Text>
            </Box>
        </Box>
        </Slide>
        }
    </Stack>
    );
};

export default withTranslation()(withResponsive(Hero));