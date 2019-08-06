import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserSubscriptions } from '../../../ducks/user';

import Loader from '../../utils/Loader';

class AccountSubscriptionContainer extends Component {
    renderSubscriptions() {
        const { subscriptions } = this.props;
        if(subscriptions && Object.keys(subscriptions).length > 0) return (
            <div>
                {subscriptions.data.map(sub => (
                    <div>
                    <p>{sub.start}</p>
                    <p>{sub.quantity}</p>
                    <p>{sub.plan.metadata.Quantity}</p>
                    <p>{sub.plan.nickname}</p>
                    </div>
                ))}
            </div>
        )
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
        
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountSubscriptionContainer);