import React, {Fragment} from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../utils/HOCs/WithResponsive'
import { Link } from 'react-router-dom';

import { Box, Text } from 'grommet';
import { Previous } from 'grommet-icons';

const CartHeading = ({t, media}) => {
    const layout = {
        small: {size: "small"},
        medium: {size: "small"},
        large: {size: "medium"},
        infinity: {size: "medium"},
    }
    return (
        <Fragment>
            <Box direction="row" align="center" width="100%">
                <Box direction="row" width="35%" align="center">
                        <Previous size="small"/>
                    <Link to="/shop">
                        <Text size={layout[media] ? layout[media].size : 'small'}>{t("sections.cart.heading.shopping")}</Text>
                    </Link>
                </Box>
                <Box width="25%">
                    <Text size={layout[media] ? layout[media].size : 'small'}>{t("sections.cart.heading.product")}</Text>
                </Box>
                <Box width="20%" align="center">
                    <Text size={layout[media] ? layout[media].size : 'small'}>{t("sections.cart.heading.price")}</Text>
                </Box>
                <Box width="10%" align="center">
                    <Text size={layout[media] ? layout[media].size : 'small'}>{t("sections.cart.heading.quantity")}</Text>
                </Box>
                <Box width="10%" align="center">
                    <Text size={layout[media] ? layout[media].size : 'small'}>{t("sections.cart.heading.subtotal")}</Text>
                </Box>
            </Box>
        </Fragment>
    );
};

export default withTranslation()(withResponsive(CartHeading));