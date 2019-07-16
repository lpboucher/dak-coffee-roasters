import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserOrders, getUser, getAllOrders } from '../../../ducks/user';

import Account from '../../presentational/Account/Account';

import Loader from '../../utils/Loader';

class AccountContainer extends Component {
    componentDidMount() {
        const { userInfo } = this.props;
        this.props.fetchOrders(userInfo.token);
    }

    renderAccount() {
        const { submit, userInfo, orders } = this.props;
        if(orders && orders.length > 0) return <Account user={userInfo} orders={orders} />

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
        orders: getAllOrders(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchOrders: (token) => dispatch(fetchUserOrders(token)), 
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountContainer);