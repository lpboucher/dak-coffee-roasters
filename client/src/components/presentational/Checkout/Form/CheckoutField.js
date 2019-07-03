import React, { Fragment } from 'react';
import { Field } from 'react-final-form';

import Col from 'react-bootstrap/Col';

const CheckoutField = ({label, name, placeholder, type, halfWidth}) => {
    const colSize = halfWidth ? 6 : 12;
    return (
        <Fragment>
            <Col md={colSize}>
                <label className='m-0'>{label}</label>
                <Field
                className="w-100"
                name={name}
                component="input"
                type={type}
                placeholder={placeholder}
                />
            </Col>
        </Fragment>
    );
};

export default CheckoutField;