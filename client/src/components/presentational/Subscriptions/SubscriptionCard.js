import React, { Fragment } from 'react';

import IconedExplanation from '../../utils/IconedExplanation';

import { Box, Image, Heading, Text } from 'grommet'

import { SUBS_SPECS } from '../../../constants/Specs';

const SubscriptionCard = ({product, thumb}) => {
    const spec = SUBS_SPECS.filter(item => item.slug === product.slug)
                            .map(spec => spec.data);
    return (
        <Fragment>
            <Box height="200px" width="100%" background="lightGrey" >
                {//<Image fit="contain" src={`${thumb.link? thumb.link.href : ""}`}/>
                }
            </Box>
            <Box flex="grow" justify="evenly" border="all">
                <Heading level="3">{product.name}</Heading>
                <Text>{product.description}</Text>
                <Box>
                {spec[0].map(item => (
                    <IconedExplanation key={item.text.toString()} icon={item.icon} description={item.text} />
                ))}
                </Box>
                <Heading level="3">From XX $</Heading>
                <Text>(FREE SHIPPING EU + NORTH AMERICA)</Text>
            </Box>      
          </Fragment>
    );
};

export default SubscriptionCard;