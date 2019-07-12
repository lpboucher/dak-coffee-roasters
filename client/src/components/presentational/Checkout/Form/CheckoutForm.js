import React from 'react';

import useForm from '../../../utils/Hooks/useForm';

import IconedExplanation from '../../../utils/IconedExplanation';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import {
    Accordion,
    AccordionPanel,
    Box,
    Button,
    CheckBox,
    Form,
    FormField,
    RadioButtonGroup,
    TextInput
  } from "grommet";
import { Deliver, UserNew, Home, CreditCard } from 'grommet-icons';

const CheckoutForm = () => {
  
  const order = () => {
    console.log("Submit: ", values);
  }  
  const {values, handleChange, handleSubmit} = useForm(order);

    return (
    <Box margin="large">
      <Form onSubmit={handleSubmit}>
      <Accordion multiple animate={true} //activeIndex={0} >
      >
        <AccordionPanel label={<IconedExplanation icon={<Deliver />} description="Shipping Method" />}>
          <Box pad="small">
              <FormField onChange={handleChange} value={values.country} name="country" label="Choose your country" component={TextInput} required={true} />
              <FormField onChange={handleChange} value={values.delivery} name="delivery" component={RadioButtonGroup} pad={true} options={[
                  "Eco-Friendly option (2 working days) €4",
                  "DPD Delivery (3-4 working days) €4"
                  ]}
              />
        </Box>
      </AccordionPanel>
      
      <AccordionPanel label={<IconedExplanation icon={<UserNew />} description="Create an Account" />}>
        <Box pad="small">
        <FormField onChange={handleChange} value={values.email} name="email" label="Email" component={TextInput} required={true} />
        <FormField onChange={handleChange} value={values.password} name="password" label="password" component={TextInput} required={true} />
        </Box>
      </AccordionPanel>
      
      <AccordionPanel label={<IconedExplanation icon={<Home />} description="Shipping Address" />}>
        <Box pad="small">
        <FormField onChange={handleChange} value={values.first_name} name="first_name" label="First Name" component={TextInput} required={true} />
        <FormField onChange={handleChange} value={values.last_name} name="last_name" label="Last Name" component={TextInput} required={true} />
        <FormField onChange={handleChange} value={values.company} name="company" label="Company" component={TextInput} required={true} />
        <FormField onChange={handleChange} value={values.address} name="address" label="address" component={TextInput} required={true} />
        <FormField onChange={handleChange} value={values.extension} name="extension" label="Building, stairs, floor" component={TextInput} required={true} />
        <FormField onChange={handleChange} value={values.city} name="city" label="City/Town" component={TextInput} required={true} />
        <FormField onChange={handleChange} value={values.postal_code} name="postal_code" label="Postal Code" component={TextInput} required={true} />
        <FormField onChange={handleChange} value={values.country} name="country" label="Country" component={TextInput} required={true} />
        <FormField onChange={handleChange} value={values.mobile} name="mobile" label="Mobile number" component={TextInput} required={true} />
        <FormField onChange={handleChange} value={values.same_billing} name="same_billing" component={CheckBox} pad={true} label="Same address for billing"/>
        </Box>
      </AccordionPanel>
        
      <AccordionPanel label={<IconedExplanation icon={<CreditCard />} description="Payment Method" />}>
        <Box pad="small">
        <Cards
            number={values.card_number || ''}
            name={values.card_name || ''}
            expiry={values.expiration || ''}
            cvc={values.cvc || ''}
            //focused={active}
            />
        <FormField onChange={handleChange} value={values.card_name} name="card_name" label="Cardholder Name" component={TextInput} required={true} />
        <FormField onChange={handleChange} value={values.card_number} name="card_number" label="Card Number" component={TextInput} required={true} />
        <FormField onChange={handleChange} value={values.expiration} name="expiration" label="Expiration Date" component={TextInput} required={true} />
        <FormField onChange={handleChange} value={values.cvc} name="cvc" label="Security Code" component={TextInput} required={true} />
        </Box>
      </AccordionPanel>
        
      <Button type="submit" label="Submit" primary fill color="mainDark" />
      </Accordion>
      </Form>
    </Box>
)}

export default CheckoutForm;
