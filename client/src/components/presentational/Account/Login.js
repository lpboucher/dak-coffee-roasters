import React from 'react';
import { Form, Field } from 'react-final-form';

import { TextInputAdapter } from '../../utils/Forms/FormHelpers';
import validation from '../../utils/Forms/loginValidation';

import { Box, Button } from 'grommet';

const Login = ({submit}) => {
    const handleSubmit = values => {
        console.log(values)
    }
    return (
      <Box width="50%" margin={{"horizontal": "25%"}}>
        <Form
        onSubmit={handleSubmit}
        validate={validation}
        render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
          <form onSubmit={handleSubmit}>
                <Box pad="small">
                    <Field
                        label="Full Name"
                        name="customer.name"
                        component={TextInputAdapter}
                        type="text"
                        />
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
                <Button type="submit" disabled={submitting || invalid} primary fill label="Login" color="mainDark" />
  
            <pre>{JSON.stringify(values, 0, 2)}</pre>
            <pre>{JSON.stringify(errors, 0, 2)}</pre>
            <pre>{JSON.stringify(invalid, 0, 2)}</pre>
          </form>
        )}
      />
      </Box>
  )}

export default Login;