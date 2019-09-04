import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import { Form, Field } from 'react-final-form';

import ProductSpecs from './ProductSpecs';
import { RadioGroupAdapter } from '../../utils/Forms/FormHelpers';

import { Heading, Text, Button, Box, Tabs, Tab } from 'grommet';

const ProductDetails = ({id, name, region, country, roast, description, product_type, details, price, derived, add, t, ...rest}) => {
    const onSubmit = values => {
        product_type === 'coffee' ? derived(rest.slug, values) : add(id, '1')
    }
    return (
        <Fragment>
            <Heading level={1}>{t(`products:${product_type}.${rest.slug}.name`)}</Heading>
            {product_type === 'coffee' &&
            <Heading level={3} margin={{"bottom": "small"}} size="small">{`${t(`products:${product_type}.${rest.slug}.region`)}, ${t(`products:${product_type}.${rest.slug}.country`)} | ${t(`products:${product_type}.${rest.slug}.roast`)} Roast`}</Heading>
            }
            <Text margin={{"bottom": "small"}} style={{fontSize: '16px'}}>{`${product_type === "coffee" ? "From " : ""}${rest.meta.display_price.with_tax.formatted}`}</Text>
            <Tabs justify="start">
                <Tab title="Description">
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
                (<Tab title="Details">
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
                        <Box pad="small">
                            <Field 
                                name="quantity"
                                component={RadioGroupAdapter}
                                options={[{"label": "250g","value": "250g"},{"label": "500g (+ 7)","value": "500g"},{"label": "1kg (+ 15)","value": "1kg"}]}
                                style={{flexDirection: 'row', justifyContent: 'space-between'}}
                            />
                        </Box>
                        }
                        <Button type="submit" disabled={submitting || invalid} primary alignSelf="start" label="Add to Cart" color="mainDark" />
                    </form>
            )}
            />
        </Fragment>
    );
};

export default withTranslation()(ProductDetails);