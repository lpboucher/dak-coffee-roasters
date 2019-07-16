import React from 'react';

import { Field } from 'react-final-form';
import { TextInputAdapter } from '../../../utils/Forms/FormHelpers';

import { Box } from 'grommet';

const AddressFields = ({type}) => {
    return (
        <Box pad="small">
            <Box direction="row" flex="grow">
                <Box width="50%" pad={{"right": "small"}}>
                    <Field
                        label="First Name"
                        name={`${type}.first_name`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
                <Box width="50%" pad={{"left": "small"}}>
                    <Field
                        label="Last Name"
                        name={`${type}.last_name`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
            </Box>
            <Field
                label="Company"
                name={`${type}.company`}
                component={TextInputAdapter}
                type="text"
            />
            <Field
                label="Address Line 1"
                name={`${type}.line_1`}
                component={TextInputAdapter}
                type="text"
            />
            <Field
                label="Address Line 2"
                name={`${type}.line_2`}
                component={TextInputAdapter}
                type="text"
            />
            <Field
                label="City/Town"
                name={`${type}.city`}
                component={TextInputAdapter}
                type="text"
            />
            <Box direction="row" flex="grow">
                <Box width="50%" pad={{"right": "small"}}>
                    <Field
                        label="County/Region"
                        name={`${type}.county`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
                <Box width="50%" pad={{"left": "small"}}>
                    <Field
                        label="Postal Code"
                        name={`${type}.postcode`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
            </Box>
            <Field
                label="Country"
                name={`${type}.country`}
                component={TextInputAdapter}
                type="text"
            />
        </Box>
    );
};

export default AddressFields;