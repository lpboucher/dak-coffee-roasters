import React from 'react';
import { withTranslation } from 'react-i18next';
import { Form, Field } from 'react-final-form';

import { CheckboxAdapter } from '../../../utils/Forms/FormHelpers';
import validation from '../../../utils/Forms/orderValidation';
import IconedExplanation from '../../../utils/IconedExplanation';
import AddressFields from './AddressFields';

import { Text, Button } from "grommet";
import { Home } from 'grommet-icons';

const AddressForm = ({btnLabel, submit, userId, address, t}) => {
  return (
      <Form
      onSubmit={values => submit(userId, values)}
      initialValues={{ 
        shipping: {
          address: {...address.shipping}
        },
        address: {...address.billing},
        billingIsShipping: true
      }}
      validate={validation}
      render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
        <form onSubmit={handleSubmit}>
          <AddressFields type="shipping.address" />
          <IconedExplanation
            icon={<Home />}
            description={t("sections.checkout.address.billing")}
            size="medium"
            spacing={{vertical: "small"}}
            vertical="center"
          />
          <Field
                  label={t("sections.checkout.address.samebilling")}
                  name="billingIsShipping"
                  component={CheckboxAdapter}
                  type="checkbox"
                />
          {!values.billingIsShipping &&
            <AddressFields type="address" />
            }
          <Text>By clicking the button below you agree to our terms of sale.</Text>
          <Button type="submit" disabled={submitting || invalid} primary fill label={btnLabel} color="mainDark" />
            
          <pre>{JSON.stringify(values, 0, 2)}</pre>
          <pre>{JSON.stringify(errors, 0, 2)}</pre>
          <pre>{JSON.stringify(invalid, 0, 2)}</pre>
        </form>
      )}
    />
)}

export default withTranslation()(AddressForm);
