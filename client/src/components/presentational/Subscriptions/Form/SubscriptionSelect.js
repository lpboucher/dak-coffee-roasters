import React from 'react';
import { Field } from 'react-final-form';

const SubscriptionSelect = ({name, placeholder, options}) => {
    return (
            <Field className="w-100" name={name} component="select">
                <option value="">{placeholder}</option>
                {options.map(option => 
                    <option key={`${name}-${option}`} value={`${option}`}>{option}</option>
                )}
            </Field>
    );
};

export default SubscriptionSelect;