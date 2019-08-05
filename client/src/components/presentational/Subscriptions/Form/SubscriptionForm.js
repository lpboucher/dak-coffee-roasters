import React, { Fragment } from 'react';
import { Form, Field } from 'react-final-form';

import { SelectAdapter } from '../../../utils/Forms/FormHelpers';

import { Box, Button } from "grommet";

const required = value => (value ? undefined : "Please select all options");

const SubscriptionForm = ({ type, addToCart }) => {
    return (
    <Form
    onSubmit={values => addToCart(type, values)}
    render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
      <form onSubmit={handleSubmit}>
        <Box width="75%" pad={{vertical: 'medium'}}>
          {type !== 'roaster-subscription' && 
          <Fragment>
            <Field
              label="Number of varieties"
              name="varieties"
              component={SelectAdapter}
              size="small"
              options={['1', '2']}
              placeholder="How many varieties?"
              validate={required}
            />
            <Field
              label="Roast style"
              name="roast"
              component={SelectAdapter}
              size="small"
              options={['Espresso', 'Filter']}
              placeholder="Espresso or Filter?"
              validate={required}
            />
          </Fragment>
          }
          <Field label="Quantity" name="quantity" component={SelectAdapter} size="small" options={['500g', '1kg']} placeholder="How much?" validate={required}/>
        <Button type="submit" disabled={submitting || invalid} primary fill="horizontal" label="Submit" color="mainDark" />
        </Box>
      </form>
    )}
  />
    )
};

export default SubscriptionForm;