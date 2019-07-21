import React from 'react';
import { Form } from 'react-final-form';
import {CardElement, CardNumberElement, injectStripe} from 'react-stripe-elements';
import { FormField, Box } from "grommet";

import validation from '../../../utils/Forms/paymentValidation';
import PaymentFields from './PaymentFields';

import { Button } from "grommet";

const PaymentForm = ({processing, submit, order}) => {
  return (
    <form onSubmit={(e) => submit(e, CardElement)}>
        <Box pad="small">
          <FormField label="Card Number">
            <CardElement style={{base: {fontSize: '18px'}}}/>
          </FormField>
        </Box>
      <Button type="submit" disabled={processing} label="Complete Purchase" primary fill color="mainDark" />
    </form>  
    
    /*<Form
      //onSubmit={values => submit(order.id, values)}
      onSubmit={handleToken}
      initialValues={{ existing: true, billingIsShipping: true }}
      //validate={validation}
      render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
        <form onSubmit={handleSubmit}>
            {//<CardElement />
            }
            <Box pad="small">
            <FormField label="Card Number">
              <CardElement style={{base: {fontSize: '18px'}}}/>
            </FormField>
            </Box>
            {//<PaymentFields/>
            }
            <Button type="submit" disabled={submitting || invalid} label="Submit" primary fill color="mainDark" />
          <pre>{JSON.stringify(values, 0, 2)}</pre>
          <pre>{JSON.stringify(errors, 0, 2)}</pre>
          <pre>{JSON.stringify(invalid, 0, 2)}</pre>
        </form>
      )}
    />*/
)}

export default PaymentForm;
