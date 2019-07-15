import React from 'react';
import { Form, Field } from 'react-final-form';

import AccountFields from '../Form/AccountFields';
import validation from '../../../utils/Forms/loginValidation';

import { Box, Button } from 'grommet';

const LoginForm = ({login, register}) => {
    const handleSubmit = values => {
        values.existing ? login(values.customer) : register(values.customer)
    }
    return (
      <Box width="50%" margin={{"horizontal": "25%"}}>
        <Form
        onSubmit={handleSubmit}
        initialValues={{ existing: true }}
        validate={validation}
        render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
          <form onSubmit={handleSubmit}>
                <AccountFields isExistingUser={values.existing}/>
                <Button type="submit" disabled={submitting || invalid} primary fill label={values.existing ? "Login" : "Register"} color="mainDark" />
  
                <pre>{JSON.stringify(values, 0, 2)}</pre>
                <pre>{JSON.stringify(errors, 0, 2)}</pre>
                <pre>{JSON.stringify(invalid, 0, 2)}</pre>
          </form>
        )}
      />
      </Box>
  )}

export default LoginForm;