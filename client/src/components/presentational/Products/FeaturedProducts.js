import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../utils/HOCs/WithResponsive';
import { Link } from 'react-router-dom';

import ProductGrid from './ProductGridLayout';

import { Box, Heading, Button } from 'grommet';

const FeaturedProducts = ({products, cart, media, t}) => {
    const layout = {
        extraSmall: {size: 'small'},
        small: {size: 'small'},
        medium: {size: ''},
        large: {size: ''},
        infinity: {size: ''},
    }
    return (
        <Fragment>
            <Box pad="large" background="lightGrey">
                <Link to="/shop" style={{textAlign: 'center'}}>
                    <Heading level='1' size={layout[media] ? layout[media].size : 'small'} textAlign="center">{t("sections.featured.title")}</Heading>
                </Link>
                <ProductGrid products={products} cart={cart} />
                <Link to="/shop" style={{textAlign: 'center'}}>
                    <Button primary label={t("sections.featured.button")} alignSelf="center"></Button>
                </Link>
            </Box>   
        </Fragment>
    );
};

export default withTranslation()(withResponsive(FeaturedProducts));