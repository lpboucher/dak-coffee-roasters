import React, { Fragment } from 'react';
import { Form, Field } from 'react-final-form';

import { SelectAdapter } from '../../../utils/Forms/FormHelpers';

import { Box, Button } from "grommet";

const SubscriptionForm = ({ type, addToCart }) => {
    const initialize = type !== 'roaster-subscription' ? 
                      { quantity: '500g', varieties: '1', roast: 'espresso'}
                      :
                      { quantity: '500g' }
    return (
    <Form
    onSubmit={values => addToCart(type, values)}
    initialValues={initialize}
    render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
      <form onSubmit={handleSubmit}>
        <Box pad="small">
          {type !== 'roaster-subscription' && 
          <Fragment>
            <Field
              label="Number of varieties"
              name="varieties"
              component={SelectAdapter}
              size="small"
              options={['1', '2']}
            />
            <Field
              label="Roast style"
              name="roast"
              component={SelectAdapter}
              size="small"
              options={['Espresso', 'Filter']}
            />
          </Fragment>
          }
          <Field label="Quantity" name="quantity" component={SelectAdapter} size="small" options={['500g', '1kg']}/>
        </Box>
        <Button type="submit" disabled={submitting || invalid} primary fill="horizontal" label="Submit" color="mainDark" />
        <pre>{JSON.stringify(values, 0, 2)}</pre>
        <pre>{JSON.stringify(errors, 0, 2)}</pre>
        <pre>{JSON.stringify(invalid, 0, 2)}</pre>
        <pre>{JSON.stringify(submitting, 0, 2)}</pre>
      </form>
    )}
  />
    )
};

export default SubscriptionForm;