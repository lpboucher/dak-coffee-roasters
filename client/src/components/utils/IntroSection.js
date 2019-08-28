import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import withResponsive from '../utils/HOCs/WithResponsive';
import { Link } from 'react-router-dom';

import { Box, Heading, Text, Button } from 'grommet';

const IntroSection = ({heading, subHeading, helperText, description, btnLabel, link, children, isSmall=false, t, media}) => {
    const layout = {
        small: {
            main: {
                size: isSmall ? 'xsmall' : 'small',
                margin: isSmall ? {"bottom": "medium"} : {"bottom": "large"}
            },
            sub: { size: isSmall ? '10px' : 'small'},
            small: { size: isSmall ? 'xsmall' : '12px', margin: {"bottom": "medium"}},
        },
        medium: {
            main: {
                size: isSmall ? 'xsmall' : 'small',
                margin: isSmall ? {"bottom": "medium"} : {"bottom": "large"}
            },
            sub: { size: isSmall ? '10px' : 'small'},
            small: { size: isSmall ? 'xsmall' : '12px', margin: {"bottom": "medium"}},
        },
        large: {
            main: {
                size: isSmall ? 'small' : '',
                margin: isSmall ? {"bottom": "medium"} : {"bottom": "large"}
            },
            sub: { size: isSmall ? '10px' : 'small'},
            small: { size: isSmall ? 'xsmall' : 'small', margin: {"bottom": "medium"}},
        },
        infinity: {
            main: {
                size: isSmall ? 'small' : '',
                margin: isSmall ? {"bottom": "medium"} : {"bottom": "large"}
            },
            sub: { size: isSmall ? '10px' : 'small'},
            small: { size: isSmall ? 'xsmall' : 'small', margin: {"bottom": "medium"}},
        },
    };
    return (
        <Box>
            <Heading level={1} size={layout[media].main.size}>{t(heading)}</Heading>
            <Heading level={2} size={layout[media].sub.size}>{t(subHeading)}</Heading>
            <Heading level={3} margin={layout[media].main.margin} size={layout[media].small.size} style={{fontWeight: '400'}}>{t(helperText)}</Heading>
            <Text size={layout[media].main.size} margin={layout[media].main.margin}>
                <Trans i18nKey={description} />
            </Text>
            {btnLabel &&
            <Link to={link}>
                <Button primary label={t(btnLabel)} alignSelf="start" style={{color: 'white'}}/>
            </Link>
            }
        </Box>
    );
};

export default withTranslation()(withResponsive(IntroSection));