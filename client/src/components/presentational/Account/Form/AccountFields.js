import React from 'react';

import { Field } from 'react-final-form';
import { TextInputAdapter, CheckboxAdapter } from '../../../utils/Forms/FormHelpers';

import { Box } from 'grommet';

const AccountFields = ({isExistingUser}) => {
    return (
        <Box pad="small">
            <Field
                label="Existing user?"
                name="existing"
                component={CheckboxAdapter}
                type="checkbox"
                size="small"
                />
            {!isExistingUser &&
            <Field
                label="Full Name"
                name="customer.name"
                component={TextInputAdapter}
                type="text"
                />
            }
            <Field
                label="Email"
                name="customer.email"
                component={TextInputAdapter}
                type="email"
                />
                <Field
                    label="Password"
                    name="customer.password"
                    component={TextInputAdapter}
                    type="password"
                />
        </Box>
    );
};

export default AccountFields;