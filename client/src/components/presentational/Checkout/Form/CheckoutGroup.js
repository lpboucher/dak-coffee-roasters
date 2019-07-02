import React from 'react';

import CheckoutField from './CheckoutField';

const CheckoutGroup = ({icon, label, fields}) => {
    return (
        <div className="mt-5">
            <div className="d-flex mb-2">
                <i className={`fas ${icon}`}></i>
                <h5 className="text-capitalize">{label}</h5>
            </div>
            {fields.map(field =>
                <CheckoutField key={field.name} {...field} />
            )}
        </div>
    );
};

export default CheckoutGroup;