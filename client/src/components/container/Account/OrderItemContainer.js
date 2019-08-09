import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrderProducts } from '../../../ducks/products';

//import Orders from '../../presentational/Account/Orders';
import OrderItem from '../../presentational/Account/OrderItem';

import Loader from '../../utils/Loader';

class OrderItemContainer extends Component {
    renderProducts() {
        const { products, order } = this.props;
        if(products && products.length > 0 && Object.keys(order).length > 0) return (<OrderItem products={products} {...order}/>)
        return <Loader />
      }

    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { ids } = ownProps;
    return {
        products: getOrderProducts(state, ids),
    };
}

export default connect(mapStateToProps,null)(OrderItemContainer);