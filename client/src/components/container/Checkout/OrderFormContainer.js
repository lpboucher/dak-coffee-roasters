import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { submitOrder } from '../../../ducks/checkout';
import { getAllCartItemsWithTax, getCartTotal } from '../../../ducks/cart';
import { getUser, getUserAddress } from '../../../ducks/user';

import AddressForm from '../../presentational/Checkout/Form/AddressForm';

class OrderFormContainer extends Component {
    
    renderOrderForm() {
        const { submit, userInfo, address, items, total } = this.props;
        return <AddressForm
                    btnLabel="sections.checkout.confirmButton"
                    submit={submit}
                    userId={userInfo.customer_id}
                    address={address}
                    items={items}
                    total={total}
                />
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
        items: getAllCartItemsWithTax(state),
        total: getCartTotal(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        submit: (id, data, items, total) => dispatch(submitOrder(id, data, items, total)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderFormContainer);