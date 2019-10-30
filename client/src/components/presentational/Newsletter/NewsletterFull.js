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
        medium: {width: '50%'},
        large: {width: '50%'},
        infinity: {width: '50%'},
    }
    return ( 
        <Box direction="row" pad="large" background="mainDark" wrap>
            <Box width={layout[media] ? layout[media].width : "50%"} pad="large">
                <Text size={"20px"} weight={"bold"} textAlign="start" style={{lineHeight: '32px'}}>{t("newsletter.full")}</Text>
                <Text textAlign="start" color="red">{t(message)}</Text>
            </Box>
            <Box width={layout[media] ? layout[media].width : "50%"} pad="large">
                <Form
                    onSubmit={addToNewsletter}
                    validate={validation}
                    render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
                    <form onSubmit={handleSubmit}>
                            <Box width={"100%"} >
                                <Field
                                    name='name'
                                    component={TextInputAdapter}
                                    type="text"
                                    placeholder={t("newsletter.form.name")}
                                    onlyBottom
                                />
                            </Box>
                            <Box width={"100%"}>
                                <Field
                                    name='email'
                                    component={TextInputAdapter}
                                    type="text"
                                    placeholder={t("newsletter.form.email")}
                                    onlyBottom
                                />
                                <Anchor size="xsmall" margin={{bottom: '14px'}}>{t("newsletter.privacy")}</Anchor>
                                <Button type="submit" label={t("newsletter.button")} color="mainWhite" alignSelf="start" style={{fontSize: '10px', lineHeight: '10px'}}/>
                            </Box>
                    </form>
                    )}
                />
            </Box>
        </Box>  
    );
};

export default withTranslation()(withResponsive(NewsletterSignUp));