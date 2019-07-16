import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { submitOrder } from '../../../ducks/checkout';
import { getUser, fetchUserAddresses } from '../../../ducks/user';

import Loader from '../../utils/Loader';

import AddressForm from '../../presentational/Checkout/Form/AddressForm';

class OrderFormContainer extends Component {
    
    /*componentDidMount() {
        const { loggedIn, userInfo } = this.props;
        if (loggedIn) {
            this.props.fetchAddresses(userInfo.customer_id);
        }
    }*/
    
    renderOrderForm() {
        const { submit, userInfo } = this.props;
        return <AddressForm submit={submit} user={userInfo} />
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
    };
}

function mapDispatchToProps(dispatch) {
    return {
        submit: (id, data) => dispatch(submitOrder(id, data)),
        //fetchAddresses: (id) => dispatch(fetchUserAddresses(id))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderFormContainer);