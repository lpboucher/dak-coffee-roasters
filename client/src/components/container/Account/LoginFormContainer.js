import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register, login, getLoggedStatus } from '../../../ducks/user';

import Loader from '../../utils/Loader';

import LoginForm from '../../presentational/Account/Form/LoginForm';

class LoginFormContainer extends Component {

    renderLoginForm() {
        const { register, login, isUserLoggedIn, loc } = this.props;
        const withRedirect = loc ? loc === "/login" : false;
        if(isUserLoggedIn && withRedirect) {
            return <Redirect to="/" />
         } else {
            return <LoginForm login={login} register={register}/> 
        }
      }

    render() {
        return (
            <Fragment>
                {this.renderLoginForm()}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        isUserLoggedIn: getLoggedStatus(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        register: (customer) => dispatch(register(customer)),
        login: (customer) => dispatch(login(customer)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginFormContainer);