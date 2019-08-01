import React from 'react';

import { Field } from 'react-final-form';
import { TextInputAdapter } from '../../../utils/Forms/FormHelpers';

import { Box } from 'grommet';

const AddressFields = ({type}) => {
    return (
        <Box pad={{vertical: 'small'}}>
            <Box direction="row" flex="grow">
                <Box width="50%" pad={{"right": "small"}}>
                    <Field
                        label="Name"
                        name={`${type}.name`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
                <Box width="50%" pad={{"left": "small"}}>
                    <Field
                        label="Company"
                        name={`${type}.company`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
            </Box>
            <Box direction="row" flex="grow">
                <Box width="50%" pad={{"right": "small"}}>
                    <Field
                        label="Address Line 1"
                        name={`${type}.line1`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
                <Box width="50%" pad={{"left": "small"}}>
                    <Field
                        label="Address Line 2"
                        name={`${type}.line2`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
            </Box>
            <Box direction="row" flex="grow">
                <Box width="50%" pad={{"right": "small"}}>
                    <Field
                        label="City/Town"
                        name={`${type}.city`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
                <Box width="50%" pad={{"left": "small"}}>
                    <Field
                        label="Postal Code"
                        name={`${type}.postal_code`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
            </Box>
            <Box direction="row" flex="grow">
                <Box width="50%" pad={{"right": "small"}}>
                    <Field
                        label="County/Region"
                        name={`${type}.state`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
                <Box width="50%" pad={{"left": "small"}}>
                    <Field
                        label="Country"
                        name={`${type}.country`}
                        component={TextInputAdapter}
                        type="text"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default AddressFields;