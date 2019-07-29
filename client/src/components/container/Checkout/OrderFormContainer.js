import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { submitOrder } from '../../../ducks/checkout';
import { getUser, getUserAddress } from '../../../ducks/user';

import Loader from '../../utils/Loader';

import AddressForm from '../../presentational/Checkout/Form/AddressForm';

class OrderFormContainer extends Component {
    
    renderOrderForm() {
        const { submit, userInfo, address } = this.props;
        return <AddressForm submit={submit} userId={userInfo.customer_id} address={address} />
      }

    render() {
        return (
            <Fragment>
                {this.renderOrderForm()}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: getUser(state),
        address: getUserAddress(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        submit: (id, data) => dispatch(submitOrder(id, data)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderFormContainer);