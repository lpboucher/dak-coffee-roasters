import React from 'react';
import { withTranslation } from 'react-i18next';
import { CardElement } from 'react-stripe-elements';
import { FormField, Box } from "grommet";

import { Button } from "grommet";

const PaymentForm = ({processing, submit, order, btnLabel, t}) => {
  return (
    <form onSubmit={(e) => submit(e, CardElement)}>
        <Box pad="small">
          <FormField label="Card Number">
            <CardElement style={{base: {fontSize: '18px'}}}/>
          </FormField>
        </Box>
      <Button type="submit" disabled={processing} label={t("sections.checkout.complete")} primary fill color="mainDark" />
    </form>  
)}

export default withTranslation()(PaymentForm);
