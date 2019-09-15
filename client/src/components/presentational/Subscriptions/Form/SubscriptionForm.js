import React, { Fragment } from 'react';
import { Form, Field } from 'react-final-form';
import { withTranslation } from 'react-i18next';

import { SelectAdapter } from '../../../utils/Forms/FormHelpers';

import { Box, Button } from "grommet";

const required = value => (value ? undefined : "Please select all options");

const SubscriptionForm = ({ type, addToCart, t }) => {
    return (
    <Form
    onSubmit={values => addToCart(type, values)}
    render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
      <form onSubmit={handleSubmit}>
        <Box width="75%" pad={{vertical: 'medium'}}>
          {type !== 'roasters-subscription' && 
          <Fragment>
            <Field
              label={`${t("sections.subscription.form.varieties.label")}`}
              name="varieties"
              component={SelectAdapter}
              size="small"
              options={['1', '2']}
              placeholder={`${t("sections.subscription.form.varieties.placeholder")}`}
              validate={required}
            />
            <Field
              label={`${t("sections.subscription.form.roast.label")}`}
              name="roast"
              component={SelectAdapter}
              size="small"
              options={['espresso', 'filter']}
              placeholder={`${t("sections.subscription.form.roast.placeholder")}`}
              validate={required}
            />
          </Fragment>
          }
          <Field label={`${t("sections.subscription.form.quantity.label")}`} name="quantity" component={SelectAdapter} size="small" options={['500g', '1kg']} placeholder={`${t("sections.subscription.form.quantity.placeholder")}`} validate={required}/>
        <Button type="submit" disabled={submitting || invalid} primary fill="horizontal" label={t("sections.subscription.button")} color="mainDark" />
        </Box>
      </form>
    )}
  />
    )
};

export default withTranslation()(SubscriptionForm);