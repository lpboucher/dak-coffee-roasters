import React from 'react';

import LoginFormContainer from '../../container/Account/LoginFormContainer';

import { Box } from 'grommet';

const back = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565721241/Heros/LoginbackgroundV2_2_tpvtgt.jpg';

const Login = ({location}) => {
    return (
        <Box pad={{"top": '160px'}} background={`url(${back})`}>
            <Box width="30%" background="lightGrey" pad={{"horizontal": '5%', vertical: '50px'}} margin={{"horizontal": "35%", vertical: '50px'}} style={{minHeight: '520px'}}>
                <LoginFormContainer loc={location.pathname}/>
            </Box>
        </Box>
    );
};

export default Login;