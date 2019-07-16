import React from 'react';
import { Form, Field } from 'react-final-form';

import AccountFields from '../Form/AccountFields';
import validation from '../../../utils/Forms/loginValidation';

import { Button } from 'grommet';

const LoginForm = ({login, register, isLoggedIn, withRedirect}) => {
    const handleSubmit = values => {
        values.existing ? login(values.customer) : register(values.customer)
    }
    return (
          <Form
          onSubmit={handleSubmit}
          initialValues={{ existing: true }}
          validate={validation}
          render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
            <form onSubmit={handleSubmit}>
                  <AccountFields isExistingUser={values.existing}/>
                  <Button type="submit" disabled={submitting || invalid} primary fill label={values.existing ? "Login" : "Register"} color="mainDark" />
            </form>
          )}
        />
  )}

export default LoginForm;