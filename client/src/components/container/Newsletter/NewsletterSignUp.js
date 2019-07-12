import React from 'react';

import useForm from '../../utils/Hooks/useForm';

import { Box, Text, Form, FormField, TextInput, Anchor, Button } from 'grommet';

const NewsletterSignUp = () => {

    const signUp = () => {
        console.log("Submit: ", values);
      }  
    const {values, handleChange, handleSubmit} = useForm(signUp);

    return (
        <Box pad="large" background="mainDark">
            <Text textAlign="center">Sign up to our newsletter to receive exclusive coffee promotions, news, stories, tips</Text>
            <Form onSubmit={handleSubmit}>
                <Box direction="row" justify="around">
                    <Box width="40%" pad="medium">
                        <FormField onChange={handleChange} value={values.name} name="name" placeholder="Your name" component={TextInput} required={true} />
                        <Anchor>Read our privacy policy</Anchor>
                    </Box>
                    <Box width="40%" pad="medium">
                        <FormField onChange={handleChange} value={values.email} name="email" placeholder="Your e-mail address" component={TextInput} required={true} />
                        <Button type="submit" label="Sign Up" color="mainWhite" />
                    </Box>
                </Box>
            </Form>
        </Box>
    );
};

export default NewsletterSignUp;