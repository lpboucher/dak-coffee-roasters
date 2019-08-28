import React from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import { Box, Text } from 'grommet';
import { Add } from 'grommet-icons';

const WithHover = styled(Box)`
    cursor: pointer;
    border-radius: 4px;
    &:hover {
        background-color: ${props => props.outOfStock ? '#dcddde' : '#a96c35'};
    }
`

const ProductCardInfo = ({id, slug, type, price, add, outOfStock, t}) => {
    return (
        <Box height="100%" width="100%" direction="row" align="center" justify="around">
            <Box flex="grow" margin={{right: "-48px"}}>
                <Text textAlign="center" weight="bold" style={{textTransform: 'uppercase'}}>{t(`products:${type}.${slug}.name`)}</Text>
                <Text textAlign="center" color="grey">{`${price && price.with_tax ? price.with_tax.formatted : '...'}`}</Text>
            </Box>
            <WithHover margin="small" pad="xsmall" background={`${outOfStock ? 'darkGrey' : 'mainDark'}`} outOfStock={outOfStock}>
                <Add size="small" onClick={!outOfStock ? () => add(id, '1') : null}/>
            </WithHover>
        </Box>
    );
};

export default withTranslation()(ProductCardInfo);