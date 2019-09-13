import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../utils/HOCs/WithResponsive';

import SubscriptionForm from './Form/SubscriptionForm';
import SubscriptionAdditional from './SubscriptionAdditional';

import { Box, Image, Heading, Text } from 'grommet'

const SubscriptionCard = ({addToCart, product, thumb, t, media}) => {
    const layout = {
        extraSmall: {size: 'small'},
        small: {size: 'small'},
        medium: {size: ''},
        large: {size: ''},
        infinity: {size: ''}
    }
    return (
        <Fragment>
            {/*<Box height="400px" width="100%" background="lightGrey" >
                {//<Image fit="contain" src={`${thumb.link? thumb.link.href : ""}`}/>
                }
            </Box>*/}
            <Box pad="large" flex="grow" justify="evenly" >
                <Heading level="1" size={layout[media] ? layout[media].size : 'small'} margin={{vertical: 'small'}}>{t(`products:subscription.${product.slug}.name`)}</Heading>
                <Text size="small">{t(`products:subscription.${product.slug}.description`)}</Text>
                <Box>
                    <SubscriptionAdditional type={product.slug} />
                </Box>
                <Heading level="3">{`From ${product && product.meta ? product.meta.display_price.without_tax.formatted : "--"}`}</Heading>
                <Text>(FREE SHIPPING EU + NORTH AMERICA)</Text>
                <SubscriptionForm addToCart={addToCart} type={product.slug}/>
            </Box>      
          </Fragment>
    );
};

export default withTranslation()(withResponsive(SubscriptionCard));