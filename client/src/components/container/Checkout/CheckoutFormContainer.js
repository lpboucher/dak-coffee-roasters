import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { orderExists } from '../../../ducks/checkout';
import { getLoggedStatus } from '../../../ducks/user';
import { fetchProducts, getAllProducts } from '../../../ducks/products';

import CheckoutForm from '../../presentational/Checkout/Form/CheckoutForm';

class CheckoutFormContainer extends Component {
    componentDidMount() {
        const { products } = this.props;
        if(products.length < 1) {
            this.props.fetchProducts();
        }
    };

    renderCheckoutForm() {
        return <CheckoutForm {...this.props}/>
      }

    render() {
        return (
            <Fragment>
                {this.renderCheckoutForm()}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        isUserLoggedIn: getLoggedStatus(state),
        orderExists: orderExists(state),
        products: getAllProducts(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutFormContainer);