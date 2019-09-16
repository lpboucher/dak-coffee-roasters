import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../utils/HOCs/WithResponsive';
import { Form, Field } from 'react-final-form';

import { TextInputAdapter } from '../../utils/Forms/FormHelpers';
import validation from '../../utils/Forms/newsletterValidation';

import { Box, Text, Anchor, Button } from 'grommet';

const NewsletterSignUp = ({add, t, i18n, message, media}) => {
    const addToNewsletter = (values) => {
        add(values.name, values.email, i18n.language);
      }
    const layout = {
        extraSmall: {width: '100%'},
        small: {width: '100%'},
        medium: {width: '40%'},
        large: {width: '40%'},
        infinity: {width: '40%'},
    }
    return ( 
        <Box pad="large" background="mainDark">
            <Text textAlign="center">{t("newsletter.description")}</Text>
            <Text textAlign="center" color="red">{t(message)}</Text>
                <Form
                    onSubmit={addToNewsletter}
                    validate={validation}
                    render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <Box direction="row" justify="around" wrap>
                            <Box width={layout[media] ? layout[media].width : "100%"} pad={{"top": "medium", "left": "medium", "right": "medium"}}>
                                <Field
                                    name='name'
                                    component={TextInputAdapter}
                                    type="text"
                                    placeholder={t("newsletter.form.name")}
                                />
                                <Anchor size="xsmall">{t("newsletter.privacy")}</Anchor>
                            </Box>
                            <Box width={layout[media] ? layout[media].width : "100%"} pad={{"top": "medium", "left": "medium", "right": "medium"}} >
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

export default withTranslation()(withResponsive(NewsletterSignUp));