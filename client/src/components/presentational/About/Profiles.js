import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../utils/HOCs/WithResponsive';

import TwoColLayout from '../../utils/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroSection from '../../utils/IntroSection';

import { Box, Heading, Image } from 'grommet';

const louis = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565720115/Intros/LP_aop9ug.jpg';
const olivier = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565720115/Intros/Olivier_p7pok3.jpg';
const veronique = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565720116/Intros/Veronique_gfzqmg.jpg';

const Profiles = ({t, media}) => {
    const layout = {
        extraSmall: {height: ['400px', ''], size: "small", align:"center", pad: {top: '80px'}},
        small: {height: ['400px', ''], size: "small", align:"center", pad: {top: '80px'}},
        medium: {height: ['90%', '10%'], size: "", align:"start", pad: {top: '0px'}},
        large: {height: ['90%', '10%'], size: "", align:"start", pad: {top: '0px'}},
        infinity: {height: ['90%', '10%'], size: "", align:"start", pad: {top: '0px'}},
    };
    const intro = 
    <IntroSection 
        heading="intros.team.LP.name" 
        subHeading="intros.team.LP.title"
        helperText="intros.team.LP.contact"
        description="intros.team.LP.description"
    />
    const secondaryProfiles = (img, name, role, contact) => 
            <Fragment>
                <Box height={layout[media] ? layout[media].height[0] : '85%'}  width="100%">
                    <Image fit="cover" src={img}/>
                </Box>
                <Box align={layout[media] ? layout[media].align : 'center'} height={layout[media] ? layout[media].height[1] : '15%'} pad={"medium"}>
                    <Heading level={1} size={layout[media] ? layout[media].size : 'small'}>{t(name)}</Heading>
                    <Heading level={2} size="small">{t(role)}</Heading>
                    <Heading level={3} size="" margin={{"bottom": "medium"}} style={{fontWeight: '400'}}>{t(contact)}</Heading>
                </Box>      
            </Fragment>
    return (
        <Fragment>
            <TwoColLayout 
                bgColor="mainWhite"
                left={<FullImg imgLink={louis} margin={layout[media] ? layout[media].pad : '80px'}/>}
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

export default withTranslation()(withResponsive(Profiles));