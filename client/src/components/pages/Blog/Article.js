import React from 'react';
import { withTranslation, Trans } from 'react-i18next';

import { Box } from 'grommet';

const Article = () => {
    return (
        <Box width="80%" margin={{horizontal: "auto", bottom: "-20vh"}} pad="xlarge" background="lightGrey" style={{transform: "translate(0,-40vh)"}}>
            <Trans i18nKey={"blog.text"} />
        </Box>
    );
};

export default withTranslation()(Article);