import React from 'react';
import { Field } from 'react-final-form';

import { TextInputAdapter } from '../../../utils/Forms/FormHelpers';

import { Box } from "grommet";

const PaymentFields = () => {
    return (
        <Box pad="small">
            <Field
                label="Cardholder Name"
                name="payment.name"
                component={TextInputAdapter}
                type="text"
            />
            <Field
                label="Card Number"
                name="payment.number"
                component={TextInputAdapter}
                type="text"
            />

            <Box direction="row" flex="grow">
                <Box width="50%" pad={{"right": "small"}}>
                    <Field
                        label="Expiration Month"
                        name="payment.month"
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
                <Box width="50%" pad={{"left": "small"}}>
                    <Field
                        label="Expiration Year"
                        name="payment.year"
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
            </Box>
            <Field
                label="Security Code"
                name="payment.verification_value"
                component={TextInputAdapter}
                type="text"
            />
        </Box>
    );
};

export default PaymentFields;