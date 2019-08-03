import React from 'react';

import LoginFormContainer from '../../container/Account/LoginFormContainer';

import { Box } from 'grommet';

import back from '../../../assets/images/LoginbackgroundV2.jpg';

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