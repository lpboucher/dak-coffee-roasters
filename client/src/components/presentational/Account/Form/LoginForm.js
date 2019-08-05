import React from 'react';
import { Form } from 'react-final-form';

import AccountFields from '../Form/AccountFields';
import validation from '../../../utils/Forms/loginValidation';

import { Button, Text } from 'grommet';

const LoginForm = ({login, register, loginError}) => {
    const handleSubmit = values => {
        values.existing ? login(values.customer) : register(values.customer)
    }
    return (
          <Form
          onSubmit={handleSubmit}
          initialValues={{ existing: true }}
          validate={validation}
          render={({ handleSubmit, form, submitting, invalid, pristine, values, errors, modified }) => (
            <form onSubmit={handleSubmit}>
                  <Text color="red">{loginError}</Text>
                  <AccountFields isExistingUser={values.existing} loginError={loginError}/>
                  <Button type="submit" disabled={submitting || invalid} primary fill label={values.existing ? "Login" : "Register"} color="mainDark" />
            </form>
          )}
        />
  )}

export default LoginForm;