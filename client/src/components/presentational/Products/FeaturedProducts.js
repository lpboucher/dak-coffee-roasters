import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ProductGrid from './ProductGridLayout';

import { Box, Heading, Button } from 'grommet';

const FeaturedProducts = ({products, cart, t}) => {
    return (
        <Fragment>
            <Box pad="large" background="lightGrey">
                <Heading level='1' textAlign="center">{t("sections.featured.title")}</Heading>
                <ProductGrid products={products} cart={cart} />
                <Link to="/shop" style={{textAlign: 'center'}}>
                    <Button primary label={t("sections.featured.button")} alignSelf="center"></Button>
                </Link>
            </Box>   
        </Fragment>
    );
};

export default withTranslation()(FeaturedProducts);