import React from 'react';
import { withTranslation } from 'react-i18next';

import { Field } from 'react-final-form';
import { TextInputAdapter, SelectAdapter, Condition } from '../../../utils/Forms/FormHelpers';

import { Box } from 'grommet';

import { COUNTRIES, US_STATES, CA_PROVS } from '../../../../constants/Countries';

const countries = COUNTRIES.map(country => country.name);

const AddressFields = ({condition, type, t}) => {
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
                <Box width="50%" pad={{"left": "small"}}>
                        <Field
                            label={t("sections.checkout.address.country")}
                            name={`${type}.country`}
                            component={SelectAdapter}
                            options={countries}
                        />
                </Box>
                {condition.country &&
                <Box width="50%" pad={{"right": "small"}}>
                    {(condition.country !== "United States" && condition.country !== "Canada") &&
                        <Field
                            label={t("sections.checkout.address.region")}
                            name={`${type}.state`}
                            component={TextInputAdapter}
                            type="text"
                        />
                    }
                    <Condition when={`${type}.country`} is={"United States"} >
                        <Field
                            label={t("sections.checkout.address.region")}
                            name={`${type}.state`}
                            component={SelectAdapter}
                            options={US_STATES}
                        />
                    </Condition>
                    <Condition when={`${type}.country`} is={"Canada"} >
                        <Field
                            label={t("sections.checkout.address.region")}
                            name={`${type}.state`}
                            component={SelectAdapter}
                            options={CA_PROVS}
                        />
                    </Condition>
                </Box>
                }
            </Box>
        </Box>
    );
};

export default withTranslation()(AddressFields);