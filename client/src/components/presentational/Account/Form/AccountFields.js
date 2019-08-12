import React from 'react';
import { withTranslation } from 'react-i18next';

import { Field } from 'react-final-form';
import { TextInputAdapter, CheckboxAdapter } from '../../../utils/Forms/FormHelpers';

import { Box } from 'grommet';

const AccountFields = ({isExistingUser, loginErrors, t}) => {
    return (
        <Box pad={{vertical: 'small'}}>
            <Field
                label={t("sections.login.existing")}
                name="existing"
                component={CheckboxAdapter}
                type="checkbox"
                size="small"
                />
            {!isExistingUser &&
            <Field
                label={t("sections.login.name")}
                name="customer.name"
                component={TextInputAdapter}
                type="text"
                />
            }
            <Field
                label={t("sections.login.email")}
                name="customer.email"
                component={TextInputAdapter}
                type="email"
                loginErrors={loginErrors}
                />
            <Field
                label={t("sections.login.password")}
                name="customer.password"
                component={TextInputAdapter}
                type="password"
            />
        </Box>
    );
};

export default withTranslation()(AccountFields);