import React, { Fragment } from 'react';

import Hero from '../../presentational/Hero/Hero';

import header from '../../../assets/images/Header_Thankyou.jpg';

const CheckoutSuccess = () => {
    return (
        <Fragment>
            <Hero
                bgImage={header}
                height="90vh"
                overlay={{
                    text: "Thank you for your order. You will receive a confirmation email shortly",
                    loc: "right",
                    width: "50vw",
                    height: "25vh"
                }}
            />
        </Fragment>
    );
};

export default CheckoutSuccess;