import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../utils/HOCs/WithResponsive';
import { Form, Field } from 'react-final-form';

import ProductSpecs from './ProductSpecs';
import { RadioGroupAdapter } from '../../utils/Forms/FormHelpers';

import { Heading, Text, Button, Box, Tabs, Tab } from 'grommet';

const ProductDetails = ({id, name, region, country, roast, description, product_type, details, price, derived, add, currency, t, media,...rest}) => {
    const onSubmit = values => {
        product_type === 'coffee' ? derived(rest.slug, values) : add(id, '1')
    }
    const layout = {
        extraSmall: {size: 'small', margin: {horizontal: 'medium', vertical: 'small'}, formDir: 'column'},
        small: {size: 'small', margin: {horizontal: 'medium', vertical: 'small'}, formDir: 'column'},
        medium: {size: '', margin: {bottom: 'small'}, formDir: 'row'},
        large: {size: '', margin: {bottom: 'small'}, formDir: 'row'},
        infinity: {size: '', margin: {bottom: 'small'}, formDir: 'row'}
    }
    const isMobile = media === "small" || media === "extraSmall";
    return (
        <Fragment>
            <Heading level={1} size={layout[media] ? layout[media].size : 'small'} margin={layout[media] ? layout[media].margin : 'small'}>{t(`products:${product_type}.${rest.slug}.name`)}</Heading>
            {product_type === 'coffee' &&
            <Heading level={3} size={layout[media] ? layout[media].size : 'small'} margin={layout[media] ? layout[media].margin : 'small'}>{`${t(`products:${product_type}.${rest.slug}.region`)}, ${t(`products:${product_type}.${rest.slug}.country`)} | ${t(`products:${product_type}.${rest.slug}.roast`)} Roast`}</Heading>
            }
            <Text size={layout[media] ? layout[media].size : 'small'} margin={layout[media] ? layout[media].margin : 'small'} style={{fontSize: '16px'}}>{`${product_type === "coffee" ? "From " : ""}${rest.meta.display_price.with_tax.formatted}`}</Text>
            <Tabs justify="start" margin={layout[media] ? layout[media].margin : 'small'}>
                <Tab title={t("sections.product.description")}>
                    <Text margin={{"bottom": "medium"}}>{t(`products:${product_type}.${rest.slug}.description`)}</Text>
                    {product_type === 'coffee' &&
                        <ProductSpecs
                            recommendation={t(`products:${product_type}.${rest.slug}.drink`)}
                            process={t(`products:${product_type}.${rest.slug}.process`)}
                            harvest={t(`products:${product_type}.${rest.slug}.harvest`)}
                            altitude={t(`products:${product_type}.${rest.slug}.altitude`)}
                            tasting_notes={t(`products:${product_type}.${rest.slug}.taste`)}
                        />
                    }
                </Tab>
                {product_type === "equipment" &&
                (<Tab title={t("sections.product.details")}>
                    {t(`products:${product_type}.${rest.slug}.details`).split(";").map((detail, index) => (
                        <Text key={`${index}${detail.slice(0,5)}`}>{`- ${detail}\n`}</Text>
                    ))}
                </Tab>)
                }
            </Tabs>
            
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
                    <form onSubmit={handleSubmit}>
                        {product_type === 'coffee' &&
                        <Box pad={layout[media] ? layout[media].margin : 'small'}>
                            <Field 
                                name="quantity"
                                component={RadioGroupAdapter}
                                options={[{"label": "250g","value": "250g"},{"label": `500g ${t(`products:${product_type}.${rest.slug}.500${currency}`)}`,"value": "500g"},{"label": `1kg ${t(`products:${product_type}.${rest.slug}.1000${currency}`)}`,"value": "1kg"}]}
                                style={{flexDirection: layout[media] ? layout[media].formDir : 'column', justifyContent: 'space-between'}}
                            />
                        </Box>
                        }
                        <Box>
                        <Button type="submit" disabled={submitting || invalid} primary alignSelf={isMobile ? "center" : "start"} label="Add to Cart" color="mainDark" />
                        </Box>
                    </form>
            )}
            />
        </Fragment>
    );
};

export default withTranslation()(withResponsive(ProductDetails));