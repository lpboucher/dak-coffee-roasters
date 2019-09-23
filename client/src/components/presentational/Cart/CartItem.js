import React, {Fragment} from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import { Box, Text, Image } from 'grommet';
import { Add, Subtract } from 'grommet-icons';

const CartItem = ({
    id,
    image,
    name,
    description,
    unit_price,
    quantity,
    value,
    meta,
    remove,
    update,
    media}) => {
    const layout = {
        extraSmall: {height:'xsmall', width: ['10%', '25%', '35%', '0%', '20%', '10%']},
        small: {height:'xsmall', width: ['10%', '25%', '35%', '0%', '20%', '10%']},
        medium: {height:'small', width: ['10%', '25%', '25%', '20%', '10%', '20%']},
        large: {height:'small', width: ['10%', '25%', '25%', '20%', '10%', '20%']},
        infinity: {height:'small', width: ['10%', '25%', '25%', '20%', '10%', '20%']}
    }
    return (
        <Fragment>
            <Box direction="row" align="center" width="100%" height={layout[media] ? layout[media].height : 'small'}>
                <Box width={layout[media] ? layout[media].width[0] : '10%'} align="center">
                    <Box onClick={() => remove(id)} style={{cursor: 'pointer'}}>
                        <i className="far fa-trash-alt"></i>
                    </Box>
                </Box>
                <Box width={layout[media] ? layout[media].width[1] : '25%'} height="100%">
                    <Image fit="contain" src={image.href} alt={name}/>
                </Box>
                <Box width={layout[media] ? layout[media].width[2] : '25%'}>
                    <Text>{name}</Text>
                </Box>
                {(media === "medium" || media === "large" || media === "infinity") &&
                <Box width={layout[media] ? layout[media].width[3] : '0%'} align="center">
                    <Text>{`${meta.display_price.with_tax.unit.formatted}`}</Text>
                </Box>
                }
                <Box width={layout[media] ? layout[media].width[4] : '20%'} align="center">
                    <Box onClick={() => update(id, quantity + 1)}>
                        <Add size="small" style={{margin: '10px', cursor: 'pointer'}}/>
                    </Box>
                    <Text>{quantity}</Text>
                    <Box onClick={() => update(id, quantity - 1)}>
                        <Subtract size="small" style={{margin: '10px', cursor: 'pointer'}}/>
                    </Box>
                </Box>
                <Box width={layout[media] ? layout[media].width[4] : '20%'} align="center">
                    <Text>{`${meta.display_price.with_tax.value.formatted}`}</Text>
                </Box>
            </Box>
            <hr/>
        </Fragment>
    );
};

export default withResponsive(CartItem);