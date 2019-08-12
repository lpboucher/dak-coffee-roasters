import React from 'react';
import { withTranslation } from 'react-i18next';
import { Form, Field } from 'react-final-form';

import { TextInputAdapter } from '../../utils/Forms/FormHelpers';

import { Box, Text, Anchor, Button } from 'grommet';

const NewsletterSignUp = ({t}) => {
    const signUp = (values) => {
        console.log("Submit: ", values);
      }  
    return ( 
        <Box pad="large" background="mainDark">
            <Text textAlign="center">{t("newsletter.description")}</Text>
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
                                    placeholder={t("newsletter.form.name")}
                                />
                                <Anchor size="xsmall">{t("newsletter.privacy")}</Anchor>
                            </Box>
                            <Box width="40%" pad={{"top": "medium", "left": "medium", "right": "medium"}} >
                                <Field
                                    name='email'
                                    component={TextInputAdapter}
                                    type="text"
                                    placeholder={t("newsletter.form.email")}
                                />
                                <Button type="submit" label={t("newsletter.button")} color="mainWhite" alignSelf="start" style={{fontSize: '10px', lineHeight: '10px'}}/>
                            </Box>
                        </Box>
                    </form>
                    )}
                />
        </Box>  
    );
};

export default withTranslation()(NewsletterSignUp);