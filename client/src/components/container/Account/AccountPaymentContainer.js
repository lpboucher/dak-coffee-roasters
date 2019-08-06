import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../../ducks/user';

import Loader from '../../utils/Loader';

class AccountPaymentContainer extends Component {
    renderPayment() {
        const { userInfo } = this.props;
        if(userInfo) return (<p>Cards</p>)

        return <Loader />
      }

    render() {
        return (
            <div>
                {this.renderPayment()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: getUser(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountPaymentContainer);