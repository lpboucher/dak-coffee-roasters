import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { fetchUserOrders, getUser, getAllOrders } from '../../../ducks/user';

import Orders from '../../presentational/Account/Orders';

import Loader from '../../utils/Loader';

class AccountOrderContainer extends Component {
    componentDidMount() {
        const { userInfo } = this.props;
        this.props.fetchOrders(userInfo.customer_id);
    }

    renderOrders() {
        const { orders, t } = this.props;
        if(orders) {
            return orders.length > 0
            ?
            <Orders orders={orders}/>
            :
            <p style={{textAlign: 'center'}}>{t(`sections.account.orders.no`)}</p>
        }
        return <Loader />
      }

    render() {
        return (
            <div>
                {this.renderOrders()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: getUser(state),
        orders: getAllOrders(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchOrders: (id) => dispatch(fetchUserOrders(id)), 
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withTranslation()(AccountOrderContainer));