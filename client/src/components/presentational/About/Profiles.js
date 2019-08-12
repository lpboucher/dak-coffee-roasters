import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import louis from '../../../assets/images/LP.jpg';
import olivier from '../../../assets/images/Olivier.jpg';
import veronique from '../../../assets/images/Veronique.jpg';

import { Box, Heading, Image } from 'grommet';

const Profiles = ({t}) => {
    const intro = 
    <IntroSection 
        heading="intros.team.LP.name" 
        subHeading="intros.team.LP.title"
        helperText="intros.team.LP.contact"
        description="intros.team.LP.description"
    />
    const secondaryProfiles = (img, name, role, contact) => 
            <Fragment>
                <Box height="90%" width="100%">
                    <Image fit="cover" src={img}/>
                </Box>
                <Box height="10%" pad={{top: "medium"}}>
                    <Heading level={1}>{t(name)}</Heading>
                    <Heading level={2} size="small">{t(role)}</Heading>
                    <Heading level={3} size="small" margin={{"bottom": "medium"}} style={{fontWeight: '400'}}>{t(contact)}</Heading>
                </Box>      
            </Fragment>
    return (
        <Fragment>
            <TwoColLayout 
                bgColor="mainWhite"
                left={<FullImg imgLink={louis}/>}
                right={intro}
            />
            <TwoColLayout 
                bgColor="lightGrey"
                left={secondaryProfiles(veronique, "intros.team.VL.name" , "intros.team.VL.title", "intros.team.VL.contact")}
                right={secondaryProfiles(olivier, "intros.team.OD.name" , "intros.team.OD.title", "intros.team.OD.contact")}
            />
        </Fragment>
    );
};

export default withTranslation()(Profiles);