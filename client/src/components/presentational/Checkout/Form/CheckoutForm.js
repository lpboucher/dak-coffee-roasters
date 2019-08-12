import React from 'react';
import { withTranslation } from 'react-i18next';
import { Elements } from 'react-stripe-elements';

import LoginFormContainer from '../../../container/Account/LoginFormContainer';
import OrderFormContainer from '../../../container/Checkout/OrderFormContainer';
import PaymentFormContainer from '../../../container/Checkout/PaymentFormContainer';

import IconedExplanation from '../../../utils/IconedExplanation';

import { Box } from "grommet";
import { UserAdmin, Deliver, CreditCard } from "grommet-icons";

const CheckoutForm = ({isUserLoggedIn, orderExists, t}) => {
  return (
    <Box margin={{horizontal: 'large'}}>
      <IconedExplanation
        icon={<UserAdmin style={{margin: '0 20px'}}/>}
        description={`${isUserLoggedIn ? t("sections.checkout.islogged") : t("sections.checkout.notlogged")}`}
        background={`${isUserLoggedIn ? "darkGrey" : "mainDark"}`}
        size="medium"
        spacing={{vertical: "small"}}
        margin={{bottom: "small"}}
        vertical="center"
      />
      {!isUserLoggedIn && <LoginFormContainer />}
      <IconedExplanation
        icon={<Deliver style={{margin: '0 20px'}}/>}
        description={`${orderExists ? t("sections.checkout.shippingsubmit") : t("sections.checkout.shipping")}`}
        background={`${orderExists ? "darkGrey" : "mainDark"}`}
        size="medium"
        spacing={{vertical: "small"}}
        vertical="center"
      />
      {isUserLoggedIn && !orderExists && <OrderFormContainer loggedIn={isUserLoggedIn}/>}
      <IconedExplanation
        icon={<CreditCard style={{margin: '0 20px'}}/>}
        description={t("sections.checkout.payment")}
        background="mainDark"
        size="medium"
        spacing={{vertical: "small"}}
        vertical="center"
      />
      {orderExists &&  <Elements><PaymentFormContainer /></Elements>}
    </Box>
)}

export default withTranslation()(CheckoutForm);
