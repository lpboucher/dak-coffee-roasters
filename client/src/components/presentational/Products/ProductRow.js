import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../utils/HOCs/WithResponsive';

import ProductCard from './ProductCard';

import { Box, Heading } from 'grommet';

const ProductRow = ({cart, title, slug, products, limit, background="mainWhite", media, t}) => {
    const limitedProducts = limit ? limit : products.length;
    const layout = {
        extraSmall: {width: '98%', size: 'small'},
        small: {width: '98%', size: 'small'},
        medium: {width: '48%', size: ''},
        large: {width: '31%', size: ''},
        infinity: {width: '31%', size: ''},
    }
    return (
        <Box background={background}>
            <Heading level={1} size={layout[media] ? layout[media].size : 'small'} textAlign="center" style={{paddingTop: '48px'}}>{t(`sections.shop.${slug}`)}</Heading>
            <Box direction="row" pad="large" wrap>
                {products.slice(0,limitedProducts).map(product => 
                    <Box key={product.product.id} background="mainWhite" height="350px" width={layout[media] ? layout[media].width : '98%'} pad="medium" margin={'1%'}>
                        <ProductCard {...product} addToCart={cart}/>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default withResponsive(withTranslation()(ProductRow));