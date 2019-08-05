import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register, login, getLoggedStatus } from '../../../ducks/user';

import LoginForm from '../../presentational/Account/Form/LoginForm';
import { getError } from '../../../ducks/views';

class LoginFormContainer extends Component {

    renderLoginForm() {
        const { register, login, isUserLoggedIn, error, loc } = this.props;
        const withRedirect = loc ? loc === "/login" : false;
        if(isUserLoggedIn && withRedirect) {
            return <Redirect to="/account" />
         } else {
            return <LoginForm login={login} register={register} loginError={error}/> 
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
        isUserLoggedIn: getLoggedStatus(state),
        error: getError(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        register: (customer) => dispatch(register(customer)),
        login: (customer) => dispatch(login(customer)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginFormContainer);