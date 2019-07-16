import React from 'react';
import { Form } from 'react-final-form';

import validation from '../../../utils/Forms/orderValidation';
import PaymentFields from './PaymentFields';

import { Button } from "grommet";

const PaymentForm = ({submit}) => {
  return (
      <Form
      onSubmit={submit}
      initialValues={{ existing: true, billingIsShipping: true }}
      validate={validation}
      render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
        <form onSubmit={handleSubmit}>
              <PaymentFields
                number={values.card_number}
                name={values.card_name}
                expiration={values.expiration}
                cvc={values.cvc}
              />
            <Button type="submit" label="Submit" primary fill color="mainDark" />
            
          <pre>{JSON.stringify(values, 0, 2)}</pre>
          <pre>{JSON.stringify(errors, 0, 2)}</pre>
          <pre>{JSON.stringify(invalid, 0, 2)}</pre>
        </form>
      )}
    />
)}

export default PaymentForm;
