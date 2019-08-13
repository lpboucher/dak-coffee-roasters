import React, { Fragment } from 'react';

import Hero from '../../presentational/Hero/Hero';

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565717615/Heros/Header_Thankyou_klmslc.jpg';

const CheckoutSuccess = () => {
    return (
        <Fragment>
            <Hero
                bgImage={header}
                height="90vh"
                overlay={{
                    text: "Thank you for your order. You will receive a confirmation email shortly.",
                    loc: "right",
                    width: "50vw",
                    height: "25vh"
                }}
            />
        </Fragment>
    );
};

export default CheckoutSuccess;