import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserSubscriptions, updateSubscription, pauseSubscription, cancelSubscription } from '../../../ducks/user';

import ManageSubscriptions from '../../presentational/Account/ManageSubscriptions';

import Loader from '../../utils/Loader';

class AccountSubscriptionContainer extends Component {
    renderSubscriptions() {
        const { subscriptions, update, pause, cancel } = this.props;
        if(subscriptions) {
            return subscriptions.data && subscriptions.data.length > 0
            ? 
            <ManageSubscriptions subscriptions={subscriptions.data} update={update} pause={pause} cancel={cancel}/>
            :
            <p style={{textAlign: 'center'}}>No subscriptions yet.</p>
        }
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
        update: (id, item, data) => dispatch(updateSubscription(id, item, data)),
        pause: (id, reactivate) => dispatch(pauseSubscription(id, reactivate)),
        cancel: (id) => dispatch(cancelSubscription(id))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountSubscriptionContainer);