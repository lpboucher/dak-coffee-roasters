import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../utils/HOCs/WithResponsive';

import { Box } from 'grommet';

const Article = ({t, media}) => {
    const isMobile = !(media === "medium" || media === "large" || media === "infinity")
    return (
        <Box width="80%" margin={{horizontal: "auto", bottom: "-20vh"}} pad="xlarge" background="lightGrey" style={{transform: "translate(0,-40vh)"}}>
            <div style={{textAlign: isMobile ? 'center' : 'inherit', paddingTop: isMobile ? '20px' : '0'}} dangerouslySetInnerHTML={{__html: t('blog.text')}} />
        </Box>
    );
};

export default withTranslation()(withResponsive(Article));