import React, { useState, Fragment } from 'react';

import {
    Box,
    Button,
    Select,
    Form,
    FormField,
  } from "grommet";

const onSubmit = async values => {
    window.alert(JSON.stringify(values, 0, 2))
  }

const SubscriptionForm = ({ type }) => {
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        //event.persist();
        console.log(event)
        setValues(values => ({ ...values, [event.target.name]: event.value }));
      };

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        console.log("Submit: ", values)
    };

    return (
    <Form onSubmit={handleSubmit}>
        <Box pad="small">
            {type !== 'roaster-subscription' && 
            <Fragment>
                <FormField options={['1', '2']} onChange={handleChange} value={values.varieties} name="varieties" placeholder="Number of varieties" component={Select} required={true} size="small" />
                <FormField options={['Espresso', 'Filter']} onChange={handleChange} value={values.roast} name="roast" placeholder="Roast Style" component={Select} required={true} size="small" />
            </Fragment>
            }
            <FormField options={['500g', '1kg']} onChange={handleChange} value={values.quantity} name="quantity" placeholder="Quantity" component={Select} required={true} size="small" />
        </Box>
      
      <Button type="submit" label="Submit" primary color="mainDark" />
    </Form>
    )
};

export default SubscriptionForm;