import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Box, Heading, Text, Button } from 'grommet';

const IntroSection = ({heading, subHeading, helperText, description, btnLabel, link, children, isSmall=false, t}) => {
    return (
        <Box>
            <Heading level={1} size={`${isSmall ? 'small' : ''}`}>{t(heading)}</Heading>
            <Heading level={2} size={`${isSmall ? 'xsmall' : 'small'}`}>{t(subHeading)}</Heading>
            <Heading level={3} margin={{"bottom": "medium"}} size={`${isSmall ? 'xsmall' : 'small'}`} style={{fontWeight: '400'}}>{t(helperText)}</Heading>
            <Text size={`${isSmall ? 'small' : ''}`} margin={isSmall ? {"bottom": "medium"} : {"bottom": "large"}}>
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

export default withTranslation()(IntroSection);