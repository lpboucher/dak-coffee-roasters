import React from 'react';
import styled from 'styled-components';

import { Menu } from 'grommet';

const Settings = styled(Menu)`
    & > div {
        padding: 0;
    }
`

const CurrencySelector = ({displayCurrency, updateCurrency}) => {
    const currencies = {
        CAD: {label: "CA $", onClick: () => updateCurrency('CAD')},
        EUR: {label: "EU €", onClick: () => updateCurrency('EUR')},
    }
    const items = Object.keys(currencies).filter(curr => curr !== displayCurrency)
    return (
        <Settings
            label={currencies[displayCurrency].label}
            items={items.map(item => currencies[item])}
            icon={false}
            size="small"
        />
    );
};

export default CurrencySelector;