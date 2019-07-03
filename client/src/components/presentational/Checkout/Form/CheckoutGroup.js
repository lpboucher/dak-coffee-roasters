import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import CheckoutField from './CheckoutField';

import Row from 'react-bootstrap/Row';

const CheckoutGroup = ({icon, label, fields, values = {}, active}) => {
    return (
        <div className="mt-5">
            <div className="d-flex mb-2">
                <i className={`fas ${icon}`}></i>
                <h5 className="text-capitalize">{label}</h5>
            </div>
            {label === "payment method" && 
                <Cards
                    number={values.card_number || ''}
                    name={values.card_name || ''}
                    expiry={values.expiration || ''}
                    cvc={values.cvc || ''}
                    focused={active}
                />
            }
            <Row>
            {fields.map(field =>
                <CheckoutField key={field.name} {...field} />
            )}
            </Row>
        </div>
    );
};

export default CheckoutGroup;