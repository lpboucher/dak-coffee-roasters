import React, { Fragment } from 'react';
import { Field } from 'react-final-form';

const CheckoutField = ({label, name, placeholder, type, halfWidth}) => {
    return (
        <Fragment>
            <label className={`${halfWidth ? 'w-50' : 'w-100'} m-0`}>{label}</label>
            <Field
              className={`${halfWidth ? 'w-50' : 'w-100'}`}
              name={name}
              component="input"
              type={type}
              placeholder={placeholder}
            />
        </Fragment>
    );
};

export default CheckoutField;