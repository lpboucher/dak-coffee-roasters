import React from 'react';
import { Elements } from 'react-stripe-elements';

import LoginFormContainer from '../../../container/Account/LoginFormContainer';
import OrderFormContainer from '../../../container/Checkout/OrderFormContainer';
import PaymentFormContainer from '../../../container/Checkout/PaymentFormContainer';

import IconedExplanation from '../../../utils/IconedExplanation';

import { Box } from "grommet";
import { UserAdmin, Deliver, CreditCard } from "grommet-icons";

const CheckoutForm = ({isUserLoggedIn, orderExists}) => {
  return (
    <Box margin={{horizontal: 'large'}}>
      <IconedExplanation
        icon={<UserAdmin style={{margin: '0 20px'}}/>}
        description={`${isUserLoggedIn ? "Already Logged In" : "Log In/Register to Continue"}`}
        background="mainDark"
        size="medium"
        spacing={{vertical: "small"}}
        vertical="center"
      />
      {!isUserLoggedIn && <LoginFormContainer />}
      <IconedExplanation
        icon={<Deliver style={{margin: '0 20px'}}/>}
        description={`${orderExists ? "Submitted" : "Shipping Address"}`}
        background="mainDark"
        size="medium"
        spacing={{vertical: "small"}}
        vertical="center"
      />
      {isUserLoggedIn && !orderExists && <OrderFormContainer loggedIn={isUserLoggedIn}/>}
      <IconedExplanation
        icon={<CreditCard style={{margin: '0 20px'}}/>}
        description="Payment Method"
        background="mainDark"
        size="medium"
        spacing={{vertical: "small"}}
        vertical="center"
      />
      {orderExists &&  <Elements><PaymentFormContainer /></Elements>}
    </Box>
)}

export default CheckoutForm;
