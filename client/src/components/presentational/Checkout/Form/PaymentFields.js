import React from 'react';
import { Field } from 'react-final-form';

import { TextInputAdapter } from '../../../utils/Forms/FormHelpers';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import { Box } from "grommet";

const PaymentFields = ({number, name, expiration, cvc}) => {
    return (
        <Box pad="small">
            <Cards
                number={number || ''}
                name={name || ''}
                expiry={expiration || ''}
                cvc={cvc || ''}
            />
            <Field
                label="Cardholder Name"
                name="card_name"
                component={TextInputAdapter}
                type="text"
            />
            <Field
                label="Card Number"
                name="card_number"
                component={TextInputAdapter}
                type="text"
            />
            <Field
                label="Expiration Date"
                name="expiration"
                component={TextInputAdapter}
                type="text"
            />
            <Field
                label="Security Code"
                name="cvc"
                component={TextInputAdapter}
                type="text"
            />
        </Box>
    );
};

export default PaymentFields;