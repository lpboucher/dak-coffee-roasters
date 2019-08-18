import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';

import SubscriptionForm from './Form/SubscriptionForm';
import IconedExplanation from '../../utils/IconedExplanation';

import { Box, Image, Heading, Text } from 'grommet'

import { SUBS_SPECS } from '../../../constants/Specs';

const SubscriptionCard = ({addToCart, product, thumb, t}) => {
    const spec = SUBS_SPECS.filter(item => item.slug === product.slug)
                            .map(spec => spec.data);
    return (
        <Fragment>
            {/*<Box height="400px" width="100%" background="lightGrey" >
                {//<Image fit="contain" src={`${thumb.link? thumb.link.href : ""}`}/>
                }
            </Box>*/}
            <Box pad="large" flex="grow" justify="evenly" >
                <Heading level="1" margin={{vertical: 'small'}}>{t(`products:subscription.${product.slug}.name`)}</Heading>
                <Text size="small">{t(`products:subscription.${product.slug}.description`)}</Text>
                <Box>
                {spec[0] ? spec[0].map(item => (
                    <IconedExplanation key={item.text.toString()} icon={item.icon} description={item.text} size={"small"} spacing={{vertical: "small"}} margin="0px" vertical={'center'}/>
                )) : null}
                </Box>
                <Heading level="3">From XX $</Heading>
                <Text>(FREE SHIPPING EU + NORTH AMERICA)</Text>
                <SubscriptionForm addToCart={addToCart} type={product.slug}/>
            </Box>      
          </Fragment>
    );
};

export default withTranslation()(SubscriptionCard);