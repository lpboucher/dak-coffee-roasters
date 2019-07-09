import React, { useState } from 'react';

import { Box, Text, Form, FormField, TextInput, Anchor, Button } from 'grommet';

const NewsletterSignUp = () => {
    const [values, setValues] = useState({});

        const handleChange = (event) => {
            event.persist();
            setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        };

        const handleSubmit = (event) => {
            if (event) event.preventDefault();
            console.log("Submit: ", values)
        };
    return (
        <Box pad="large" background="mainDark">
            <Text textAlign="center">Sign up to our newsletter to receive exclusive coffee promotions, news, stories, tips</Text>
            <Form>
                <Box direction="row" justify="around">
                    <Box width="40%" pad="medium">
                        <FormField onChange={handleChange} value={values.country} name="country" placeholder="Choose your country" component={TextInput} required={true} />
                        <Anchor>Read our privacy policy</Anchor>
                    </Box>
                    <Box width="40%" pad="medium">
                        <FormField onChange={handleChange} value={values.country} name="country" placeholder="Choose your country" component={TextInput} required={true} />
                        <Button type="submit" label="Sign Up" color="mainWhite" />
                    </Box>
                </Box>
            </Form>
        </Box>
    );
};

export default NewsletterSignUp;