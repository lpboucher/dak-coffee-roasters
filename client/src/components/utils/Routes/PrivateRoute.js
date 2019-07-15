import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { getLoggedStatus } from '../../../ducks/user';

class PrivateRoute extends Component {

    render() {
        const { component: Component, isLoggedIn, ...rest } = this.props
        return (
            <Route {...rest} render={(props) => (
                isLoggedIn === true
                  ? <Component {...props} />
                  : <Redirect to='/login' />
              )} />
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: getLoggedStatus(state),
    };
}

export default connect(mapStateToProps,null)(PrivateRoute);