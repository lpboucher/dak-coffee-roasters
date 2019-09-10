import React from 'react';
import { withTranslation } from 'react-i18next';

import { Box } from 'grommet';

const Article = ({t}) => {
    return (
        <Box width="80%" margin={{horizontal: "auto", bottom: "-20vh"}} pad="xlarge" background="lightGrey" style={{transform: "translate(0,-40vh)"}}>
                <div dangerouslySetInnerHTML={{__html: t('blog.text')}} />
        </Box>
    );
};

export default withTranslation()(Article);