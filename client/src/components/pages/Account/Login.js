import React from 'react';

import LoginFormContainer from '../../container/Account/LoginFormContainer';

import { Box } from 'grommet';

const Login = ({location}) => {
    return (
        <Box width="50%" margin={{"horizontal": "25%"}}>
            <LoginFormContainer loc={location.pathname}/>
        </Box>
    );
};

export default Login;