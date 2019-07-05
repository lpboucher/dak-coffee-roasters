import React from 'react';

const SubscriptionSpecsItem = ({icon, header, desc}) => {
    return (
        <div>
            <i className={`fas ${icon}`}></i>
            <p>{header}</p>
            <p>{desc}</p>
        </div>
    );
};

export default SubscriptionSpecsItem;