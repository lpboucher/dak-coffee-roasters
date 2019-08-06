import React, { Fragment } from 'react';
import { Form, Field } from 'react-final-form';

import { SelectAdapter } from '../../utils/Forms/FormHelpers';

import IconedExplanation from '../../utils/IconedExplanation';

import { Heading, Text, Grid, Button, Box, Tabs, Tab } from 'grommet';
import { Grow } from 'grommet-icons';

const ProductDetails = ({id, name, description, product_type, details, price, link, slug, main, addToCart}) => {
    const onSubmit = values => {
        console.log(values);
    }
    return (
        <Fragment>
            <Heading level={1}>{name}</Heading>
            <Heading level={3} margin={{"bottom": "medium"}} size="small">Nueva Segovia, Nicaragua | Espresso Beans</Heading>
            <Tabs justify="start">
                <Tab title="Description">
                    <Text>{description}</Text>
                    {product_type === 'coffee' &&
                    <Fragment>
                        <IconedExplanation 
                            icon={<Grow color="plain" size="medium" />}
                            description={"These beans were harvested in the highest of the peralta farms in Nicaragua (Santa Maria de Lourdes)."}
                            spacing={{vertical: 'medium'}}
                            size={"xsmall"}
                        />
                        <hr/>
                        <Grid columns="50%" rows="50%">
                        <IconedExplanation 
                            icon={<Grow color="plain" size="medium" />}
                            description={"Red Honey, Nueva Segovia, Nicaragua"}
                            spacing={{vertical: 'medium'}}
                            size={"xsmall"}
                        />
                        <IconedExplanation 
                        icon={<Grow color="plain" size="medium" />}
                        description={"Recommended as a Cappuccino"}
                        spacing={{vertical: 'medium'}}
                        size={"xsmall"}
                        />
                        <IconedExplanation 
                            icon={<Grow color="plain" size="medium" />}
                            description={"Floral, Brown Sugar, Teal-like acidity, clean"}
                            spacing={{vertical: 'medium'}}
                            size={"xsmall"}
                        />
                        <IconedExplanation 
                        icon={<Grow color="plain" size="medium" />}
                        description={"100% recyclable bag, recyclable box"}
                        spacing={{vertical: 'medium'}}
                        size={"xsmall"}
                        />
                        </Grid>
                    </Fragment>
                    }
                </Tab>
                {product_type === "equipment" &&
                <Tab title="Details">
                    {details.split(";").map(detail => (
                        <Text>{`- ${detail}\n`}</Text>
                    ))}
                </Tab>
                }
            </Tabs>
            
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
                    <form onSubmit={handleSubmit}>
                        {product_type === 'coffee' &&
                        <Box pad="small">
                            <Field placeholder="How much?" name="quantity" component={SelectAdapter} size="small" options={['500g', '1kg']}/>
                        </Box>
                        }
                        <Button type="submit" disabled={submitting || invalid} primary alignSelf="start" label="Add to Cart" color="mainDark" />
                        {/*<pre>{JSON.stringify(values, 0, 2)}</pre>
                        <pre>{JSON.stringify(errors, 0, 2)}</pre>
                        <pre>{JSON.stringify(invalid, 0, 2)}</pre>
                <pre>{JSON.stringify(submitting, 0, 2)}</pre>*/}
                    </form>
            )}
            />
        </Fragment>
    );
};

export default ProductDetails;