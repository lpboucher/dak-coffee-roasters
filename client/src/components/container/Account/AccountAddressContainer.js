import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, getUserAddress, updateCustomerAddress } from '../../../ducks/user';

import AddressForm from '../../presentational/Checkout/Form/AddressForm';

import Loader from '../../utils/Loader';

class AccountAddressContainer extends Component {
    renderAddress() {
        const { update, userInfo, address } = this.props;
        if(address) return (
            <AddressForm btnLabel="sections.checkout.button" submit={update} userId={userInfo.id} address={address} />
        )
        return <Loader />
      }

    render() {
        return (
            <div>
                {this.renderAddress()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: getUser(state),
        address: getUserAddress(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        update: (id, data) => dispatch(updateCustomerAddress(id, data))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountAddressContainer);