import React from 'react';
import styled from 'styled-components';

import { Menu } from 'grommet';

const Settings = styled(Menu)`
    & > div {
        padding: 0;
    }
`

const CurrencySelector = () => {
    //const langs = ['en', 'fr', 'nl'].filter(lang => lang !== i18n.language);
    return (
        <Settings
            label={"EU €"}
            items={[{label: "CA $", pad: '0px'}]}
            icon={false}
            size="small"
        />
    );
};

export default CurrencySelector;