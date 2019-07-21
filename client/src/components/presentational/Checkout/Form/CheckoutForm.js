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
    <Box margin="large">
      <IconedExplanation icon={<UserAdmin />} description={`${isUserLoggedIn ? "Already Logged In" : "Log In/Register to Continue"}`} />
      {!isUserLoggedIn && <LoginFormContainer />}
      <IconedExplanation icon={<Deliver />} description={`${orderExists ? "Submitted" : "Shipping Address"}`} />
      {isUserLoggedIn && !orderExists && <OrderFormContainer loggedIn={isUserLoggedIn}/>}
      <IconedExplanation icon={<CreditCard />} description="Payment Method" />
      {orderExists &&  <Elements><PaymentFormContainer /></Elements>}
    </Box>
)}

export default CheckoutForm;
