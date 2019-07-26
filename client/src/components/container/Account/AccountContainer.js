import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserOrders, getUser, getAllOrders, getUserAddress, updateCustomerAddress } from '../../../ducks/user';

import AddressForm from '../../presentational/Checkout/Form/AddressForm';
import Orders from '../../presentational/Account/Orders';

import Account from '../../presentational/Account/Account';

import Loader from '../../utils/Loader';

class AccountContainer extends Component {
    componentDidMount() {
        const { userInfo } = this.props;
        this.props.fetchOrders(userInfo.token);
    }

    renderAccount() {
        const { update, userInfo, orders, address } = this.props;
        if(orders && orders.length > 0) return (
            <Account
                address={<AddressForm submit={update} userId={userInfo.id} address={address} />}
                payment={<p>Cards</p>}
                subscriptions={<p>Subs</p>}
                orders={<Orders orders={orders}/>}
            />
            )

        return <Loader />
      }

    render() {
        return (
            <div>
                {this.renderAccount()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: getUser(state),
        orders: getAllOrders(state),
        address: getUserAddress(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchOrders: (token) => dispatch(fetchUserOrders(token)), 
        update: (id, data) => dispatch(updateCustomerAddress(id, data))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountContainer);