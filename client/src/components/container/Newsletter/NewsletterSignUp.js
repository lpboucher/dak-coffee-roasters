import React from 'react';
import { Form, Field } from 'react-final-form';

import { TextInputAdapter } from '../../utils/Forms/FormHelpers';

import { Box, Text, Anchor, Button } from 'grommet';

const NewsletterSignUp = () => {
    const signUp = (values) => {
        console.log("Submit: ", values);
      }  
    return ( 
        <Box pad="large" background="mainDark">
            <Text textAlign="center">Sign up to our newsletter to receive exclusive coffee promotions, news, stories, tips</Text>
                <Form
                    onSubmit={signUp}
                    render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <Box direction="row" justify="around">
                            <Box width="40%" pad={{"top": "medium", "left": "medium", "right": "medium"}}>
                                <Field
                                    name='name'
                                    component={TextInputAdapter}
                                    type="text"
                                    placeholder="Your name"
                                />
                                <Anchor size="xsmall">Read our privacy policy</Anchor>
                            </Box>
                            <Box width="40%" pad={{"top": "medium", "left": "medium", "right": "medium"}} >
                                <Field
                                    name='email'
                                    component={TextInputAdapter}
                                    type="text"
                                    placeholder="Your email"
                                />
                                <Button type="submit" label="Sign Up" color="mainWhite" alignSelf="start" style={{fontSize: '10px', lineHeight: '10px'}}/>
                            </Box>
                        </Box>
                    </form>
                    )}
                />
        </Box>  
    );
};

export default NewsletterSignUp;