import React from 'react';
import { withTranslation } from 'react-i18next';

import { Field } from 'react-final-form';
import { TextInputAdapter } from '../../../utils/Forms/FormHelpers';

import { Box } from 'grommet';

const AddressFields = ({type, t}) => {
    return (
        <Box pad={{vertical: 'small'}}>
            <Box direction="row" flex="grow">
                <Box width="50%" pad={{"right": "small"}}>
                    <Field
                        label={t("sections.checkout.address.name")}
                        name={`${type}.name`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
                <Box width="50%" pad={{"left": "small"}}>
                    <Field
                        label={t("sections.checkout.address.company")}
                        name={`${type}.company`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
            </Box>
            <Box direction="row" flex="grow">
                <Box width="50%" pad={{"right": "small"}}>
                    <Field
                        label={t("sections.checkout.address.line1")}
                        name={`${type}.line1`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
                <Box width="50%" pad={{"left": "small"}}>
                    <Field
                        label={t("sections.checkout.address.line2")}
                        name={`${type}.line2`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
            </Box>
            <Box direction="row" flex="grow">
                <Box width="50%" pad={{"right": "small"}}>
                    <Field
                        label={t("sections.checkout.address.city")}
                        name={`${type}.city`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
                <Box width="50%" pad={{"left": "small"}}>
                    <Field
                        label={t("sections.checkout.address.postcode")}
                        name={`${type}.postal_code`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
            </Box>
            <Box direction="row" flex="grow">
                <Box width="50%" pad={{"right": "small"}}>
                    <Field
                        label={t("sections.checkout.address.region")}
                        name={`${type}.state`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
                <Box width="50%" pad={{"left": "small"}}>
                    <Field
                        label={t("sections.checkout.address.country")}
                        name={`${type}.country`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default withTranslation()(AddressFields);