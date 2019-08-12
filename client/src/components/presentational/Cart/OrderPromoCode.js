import React from 'react';
import { withTranslation } from 'react-i18next';
import { Form, Field } from 'react-final-form';

import { TextInputAdapter } from '../../utils/Forms/FormHelpers'

import { Box, Text, Button } from 'grommet';

const OrderPromoCode = ({apply, t}) => {
    return (
        <Box>
            <Text>{t("sections.cart.promo.title")}</Text>
            <Form
                onSubmit={apply}
                render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
                <form onSubmit={handleSubmit}>
                    <Box direction="row">
                        <Field
                            name='promo'
                            component={TextInputAdapter}
                            type="text"
                            placeholder={t("sections.cart.promo.input")}
                        />
                        <Box height="36px" margin={{bottom: "24px", horizontal: "20px"}}>
                            <Button type="submit" fill primary label={t("sections.cart.promo.button")} alignSelf="start" color="darkHighlight" style={{marginBottom: '0px', marginTop: '0px', padding: '0px 20px'}}/>
                        </Box>
                    </Box>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                    <pre>{JSON.stringify(errors, 0, 2)}</pre>
                    <pre>{JSON.stringify(invalid, 0, 2)}</pre>
                </form>
                )}
            />
            <Text weight="bold" size="small">{t("sections.cart.promo.description")}</Text>
        </Box>
    );
};

export default withTranslation()(OrderPromoCode);