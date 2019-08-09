import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserSubscriptions, updateSubscription } from '../../../ducks/user';

import ManageSubscriptions from '../../presentational/Account/ManageSubscriptions';

import Loader from '../../utils/Loader';

class AccountSubscriptionContainer extends Component {
    renderSubscriptions() {
        const { subscriptions, update } = this.props;
        if(subscriptions && Object.keys(subscriptions).length > 0) return (<ManageSubscriptions subscriptions={subscriptions.data} update={update}/>)
        return <Loader />
      }

    render() {
        return (
            <div>
                {this.renderSubscriptions()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        subscriptions: getUserSubscriptions(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        update: (id, item, data) => dispatch(updateSubscription(id, item, data))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountSubscriptionContainer);