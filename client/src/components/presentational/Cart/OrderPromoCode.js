import React from 'react';
import { Form, Field } from 'react-final-form';

import { TextInputAdapter } from '../../utils/Forms/FormHelpers'

import { Box, Text, Button } from 'grommet';

const OrderPromoCode = ({apply}) => {
    return (
        <Box>
            <Text>PROMO CODE</Text>
            <Form
                onSubmit={apply}
                render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
                <form onSubmit={handleSubmit}>
                    <Box direction="row">
                        <Field
                            name='promo'
                            component={TextInputAdapter}
                            type="text"
                            placeholder="Code Here"
                        />
                        <Box height="36px" margin={{bottom: "24px", horizontal: "20px"}}>
                            <Button type="submit" fill primary label="APPLY" alignSelf="start" color="darkHighlight" style={{marginBottom: '0px', marginTop: '0px', padding: '0px 20px'}}/>
                        </Box>
                    </Box>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                    <pre>{JSON.stringify(errors, 0, 2)}</pre>
                    <pre>{JSON.stringify(invalid, 0, 2)}</pre>
                </form>
                )}
            />
            <Text weight="bold" size="small">FREE STANDARD SHIPPING FOR ORDERS OF MORE THAN €25 IN EUROPE AND ON ALL SUBSCRIPTIONS</Text>
        </Box>
    );
};

export default OrderPromoCode;