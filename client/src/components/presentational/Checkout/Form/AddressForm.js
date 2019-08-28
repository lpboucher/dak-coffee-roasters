import React from 'react';
import { withTranslation } from 'react-i18next';
import { Form, Field } from 'react-final-form';

import { CheckboxAdapter } from '../../../utils/Forms/FormHelpers';
import validation from '../../../utils/Forms/orderValidation';
import IconedExplanation from '../../../utils/IconedExplanation';
import AddressFields from './AddressFields';

import { Text, Button } from "grommet";
import { Home } from 'grommet-icons';

const AddressForm = ({btnLabel, submit, userId, address, items, total, t}) => {
  return (
      <Form
      onSubmit={values => submit(userId, values, items, total)}
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
          <AddressFields condition={values.shipping.address} type="shipping.address" />
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
            <AddressFields condition={values.address} type="address" />
            }
            {items &&
              <Text>{t("sections.checkout.terms")}</Text>
            }
          <Button type="submit" disabled={submitting || invalid} primary fill label={t(btnLabel)} color="mainDark" />
        </form>
      )}
    />
)}

export default withTranslation()(AddressForm);
