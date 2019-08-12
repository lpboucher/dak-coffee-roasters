import React, {Fragment} from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Box, Text } from 'grommet';
import { Previous } from 'grommet-icons';

const CartHeading = ({t}) => {
    return (
        <Fragment>
            <Box direction="row" align="center" width="100%">
                <Box direction="row" width="35%" align="center">
                        <Previous size="small"/>
                    <Link to="/shop">
                        <Text>{t("sections.cart.heading.shopping")}</Text>
                    </Link>
                </Box>
                <Box width="25%">
                    <Text>{t("sections.cart.heading.price")}</Text>
                </Box>
                <Box width="20%" align="center">
                    <Text>{t("sections.cart.heading.price")}</Text>
                </Box>
                <Box width="10%" align="center">
                    <Text>{t("sections.cart.heading.quantity")}</Text>
                </Box>
                <Box width="20%" align="center">
                    <Text>{t("sections.cart.heading.subtotal")}</Text>
                </Box>
            </Box>
        </Fragment>
    );
};

export default withTranslation()(CartHeading);