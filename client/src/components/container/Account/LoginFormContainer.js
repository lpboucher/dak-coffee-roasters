import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { register, login } from '../../../ducks/user';

import Loader from '../../utils/Loader';

import LoginForm from '../../presentational/Account/Form/LoginForm';

class CheckoutFormContainer extends Component {

    renderLoginForm() {
        const { register, login } = this.props;
        return <LoginForm login={login} register={register}/>
      }

    render() {
        return (
            <Fragment>
                {this.renderLoginForm()}
            </Fragment>
        );
    }
}

/*function mapStateToProps(state) {
    return {
        cartItems: getAllCartItems(state),
        cartMeta: getAllCartMeta(state)
    };
}*/

function mapDispatchToProps(dispatch) {
    return {
        register: (customer) => dispatch(register(customer)),
        login: (customer) => dispatch(login(customer)),
    };
}

export default connect(null,mapDispatchToProps)(CheckoutFormContainer);