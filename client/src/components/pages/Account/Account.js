import React from 'react';
import { withTranslation } from 'react-i18next';

import Hero from '../../presentational/Hero/Hero';
import SubscriptionContainer from '../../container/Account/AccountSubscriptionContainer';
import OrderContainer from '../../container/Account/AccountOrderContainer';
import PaymentContainer from '../../container/Account/AccountPaymentContainer';
import AddressContainer from '../../container/Account/AccountAddressContainer';

import { Tabs, Tab, Box } from 'grommet';

import header from '../../../assets/images/Header_loggedin.jpg';

const Account = ({t}) => {
    return (
    <>
        <Hero
            bgImage={header}
            height="50vh"
            overlay={{
                text: "hero.account",
                loc: "bottom",
                width: "50vw",
                height: "25vh"
            }}
        />
        <Tabs>
            <Tab title={t("sections.account.menu.subscriptions")}>
                <Box pad={{"horizontal": "xlarge"}}>
                    <SubscriptionContainer />
                </Box>
            </Tab>
            <Tab title={t("sections.account.menu.orders")}>
                <Box pad={{"horizontal": "xlarge"}}>
                    <OrderContainer />
                </Box>
            </Tab>
            <Tab title={t("sections.account.menu.address")}>
                <Box pad={{"horizontal": "xlarge"}}>
                    <AddressContainer />
                </Box>
            </Tab>
            <Tab title={t("sections.account.menu.payment")}>
                <Box pad={{"horizontal": "xlarge"}}>
                    <PaymentContainer />
                </Box>
            </Tab>
        </Tabs>
    </>
    );
};

export default withTranslation()(Account);