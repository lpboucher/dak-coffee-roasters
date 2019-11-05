import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import withResponsive from '../utils/HOCs/WithResponsive';
import { Link } from 'react-router-dom';

import { Box, Heading, Text, Button } from 'grommet';

const IntroSection = ({heading, subHeading, helperText, description, btnLabel, link, options=null, children, isSmall=false, t, media}) => {
    const helper = options ? t(helperText, options) : t(helperText);
    const subHead = options ? t(subHeading, options) : t(subHeading);
    const layout = {
        extraSmall: {
            main: {
                size: 'small',
                margin: isSmall ? "medium" : {"horizontal": "large", "vertical": "small"}
            },
            sub: { size: isSmall ? '10px' : 'small'},
            small: { size: isSmall ? 'xsmall' : '12px', margin: {"bottom": "medium"}},
            align: 'center',
            around: {vertical: 'large'}
        },
        small: {
            main: {
                size: 'small',
                margin: isSmall ? "medium" : "large"
            },
            sub: { size: isSmall ? '10px' : 'small'},
            small: { size: isSmall ? 'xsmall' : '12px', margin: {"bottom": "medium"}},
            align: 'center',
            around: {vertical: 'large'}
        },
        medium: {
            main: {
                size: isSmall ? 'xsmall' : 'small',
                margin: isSmall ? {"bottom": "medium"} : {"bottom": "large"}
            },
            sub: { size: isSmall ? '10px' : 'small'},
            small: { size: isSmall ? 'xsmall' : '12px', margin: {"bottom": "medium"}},
            align: 'start',
            around: {vertical: 'medium'}
        },
        large: {
            main: {
                size: isSmall ? 'small' : '',
                margin: isSmall ? {"bottom": "medium"} : {"bottom": "large"}
            },
            sub: { size: isSmall ? '10px' : 'small'},
            small: { size: isSmall ? 'xsmall' : 'small', margin: {"bottom": "medium"}},
            align: 'start',
            around: {vertical: 'medium'}
        },
        infinity: {
            main: {
                size: isSmall ? 'small' : '',
                margin: isSmall ? {"bottom": "medium"} : {"bottom": "medium"}
            },
            sub: { size: isSmall ? '10px' : 'small'},
            small: { size: isSmall ? 'xsmall' : 'small', margin: {"bottom": "medium"}},
            align: 'start',
            around: {vertical: 'medium'}
        },
    };
    return (
        <Box margin={layout[media] ? layout[media].around : {vertical: 'large'}}>
            <Heading level={1} margin={layout[media] ? layout[media].main.margin : {"bottom": "large"}} size={layout[media] ? layout[media].main.size : 'xsmall'} textAlign={layout[media] ? layout[media].align : 'center'}>{t(heading)}</Heading>
            {subHeading &&
                <Heading level={2} margin={layout[media] ? layout[media].main.margin : {"bottom": "large"}} size={layout[media] ? layout[media].sub.size : 'small'} textAlign={layout[media] ? layout[media].align : 'center'}>{subHead}</Heading>
            }
            {helperText &&
                <Heading level={3} margin={layout[media] ? layout[media].main.margin : {"bottom": "large"}} size={layout[media] ? layout[media].small.size : 'small'} style={{fontWeight: '400'}} textAlign={layout[media] ? layout[media].align : 'center'}>{helper}</Heading>
            }
            <Text size={layout[media] ? layout[media].main.size : 'xsmall'} margin={layout[media] ? layout[media].main.margin : {"bottom": "large"}} textAlign={layout[media] ? layout[media].align : 'center'}>
                <Trans i18nKey={description} />
            </Text>
            {btnLabel &&
            <Box alignSelf={layout[media] ? layout[media].align : 'center'}>
                <Link to={link}>
                    <Button primary label={t(btnLabel)} alignSelf={layout[media] ? layout[media].align : 'center'} style={{color: 'white'}}/>
                </Link>
            </Box>
            }
        </Box>
    );
};

export default withTranslation()(withResponsive(IntroSection));