import React from 'react';

import OrderHeading from './OrderHeading';
import OrderSummaryPrices from '../Cart/OrderSummaryPrices';

import { Box, Text, AccordionPanel } from 'grommet';

const OrderItem = ({products, id, relationships, meta, status, shipping_address, billing_address}) => {
    return (
        <Box pad="small" border="all">
        <AccordionPanel key={id} header={
            <OrderHeading id={id} headers={[id.slice(0,8), meta.timestamps.created_at, meta.display_price.with_tax.formatted, "payment", status, "tracking"]} />
        }>
            <Box direction="row" justify="around" pad="medium" background="light-2">
                <Box>
                    <Text>DELIVERY ADDRESS</Text>
                    <Text>{`${shipping_address.first_name} ${shipping_address.last_name}`}</Text>
                    <Text>{`${shipping_address.line_1}`}</Text>
                    {shipping_address.line_2 !== "" &&
                    <Text>{`${shipping_address.line_2}`}</Text>
                    }
                    <Text>{`${shipping_address.postcode} ${shipping_address.city}`}</Text>
                    <Text>{`${shipping_address.country}`}</Text>
                </Box>
                <Box>
                <Text>BILLING ADDRESS</Text>
                    <Text>{`${billing_address.first_name} ${billing_address.last_name}`}</Text>
                    <Text>{`${billing_address.line_1}`}</Text>
                    {billing_address.line_2 !== "" &&
                    <Text>{`${billing_address.line_2}`}</Text>
                    }
                    <Text>{`${billing_address.postcode} ${billing_address.city}`}</Text>
                    <Text>{`${billing_address.country}`}</Text>
                </Box>
                <Box>
                    {products.map(product => 
                        product ?
                        <Text>{product.name || product.id}</Text>
                        :
                        null
                    )}
                    {//<OrderSummaryPrices withButton={false} {...meta}/>
                    }
                </Box>
            </Box>
        </AccordionPanel>
        </Box>
    );
};

export default OrderItem;