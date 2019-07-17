import React from 'react';
import { Form, Field } from 'react-final-form';

import { TextInputAdapter, CheckboxAdapter, WhenValid } from '../../../utils/Forms/FormHelpers';
import validation from '../../../utils/Forms/orderValidation';
import IconedExplanation from '../../../utils/IconedExplanation';
import AddressFields from './AddressFields';
import PaymentFields from './PaymentFields';

import { Box, Text, Button } from "grommet";
import { Deliver, UserNew, Home, CreditCard } from 'grommet-icons';

const AddressForm = ({submit, user, addresses}) => {
  return (
      <Form
      onSubmit={values => submit(user.customer_id, values)}
      initialValues={{ "shipping_address": {...addresses}, billingIsShipping: true }}
      validate={validation}
      render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
        <form onSubmit={handleSubmit}>
          <AddressFields type="shipping_address" />
          <IconedExplanation icon={<Home />} description="Billing Address" />
          <Field
                  label="Use shipping address for billing"
                  name="billingIsShipping"
                  component={CheckboxAdapter}
                  type="checkbox"
                />
          {!values.billingIsShipping &&
            <AddressFields type="shipping_address" />
            }
          <Text>By clicking the button below you agree to our terms of sale.</Text>
          <Button type="submit" disabled={submitting || invalid} primary fill label="Confirm and Pay" color="mainDark" />
            
          <pre>{JSON.stringify(values, 0, 2)}</pre>
          <pre>{JSON.stringify(errors, 0, 2)}</pre>
          <pre>{JSON.stringify(invalid, 0, 2)}</pre>
        </form>
      )}
    />
)}

export default AddressForm;
